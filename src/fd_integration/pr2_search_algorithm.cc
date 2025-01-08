#include "pr2_search_algorithm.h"

#include "../../plugins/options.h"
#include "../../plugins/plugin.h"

#include "../../search_algorithms/search_common.h"
#include "../../search_algorithms/lazy_search.h"

#include "../../open_list_factory.h"
#include "../../operator_cost.h"
#include "../../utils/memory.h"

#include "../../tasks/root_task.h"

#include "weak_planning_task.h"
#include "fsap_penalized_ff_heuristic.h"
#include "../deadend.h"

#include <iostream>
#include <limits>

using namespace std;
using namespace utils;


namespace pr2_search {

unique_ptr<SearchAlgorithm> PR2Search::get_search_engine() {
    /*
      Build the same search engine that would be generated by the
      command-line option "lazy_greedy(ff())". This is a bit complex
      because we need to manually set options that have default values
      when used from the command line and because "lazy_greedy" is a
      factory function with somewhat complex behaviour.
    */

    auto initial_state_values = PR2.proxy->get_pr2_initial_state()->get_unpacked_values();
    auto goals = PR2.proxy->get_pr2_goals();
    std::shared_ptr<extra_tasks::WeakPlanningTask> weak_task = std::make_shared<extra_tasks::WeakPlanningTask>(tasks::g_root_task, std::move(initial_state_values), std::move(goals));

    // Build FF heuristic object.
    if (h) {
        h->reset(goals);
    } else {
        h = make_shared<fsap_penalized_ff_heuristic::FSAPPenalizedFFHeuristic>(tasks::g_root_task, true, "FSAP Aware Heuristic", utils::Verbosity::NORMAL);
        preferred_list.push_back(h);
        preferred_list_scalar.push_back(h);
    }

    // Build open list object.
    shared_ptr<OpenListFactory> open_list = search_common::create_greedy_open_list_factory(
        preferred_list_scalar,
        preferred_list,
        500
    );

    // Build lazy search object.
    lazy_search::LazySearch *engine = new lazy_search::LazySearch(
        open_list,
        false,
        preferred_list_scalar,
        false,
        true,
        -1,
        ONE,
        numeric_limits<int>::max(),
        PR2.time.limit - PR2.time.time_taken(),
        "PR2 Search",
        utils::Verbosity::SILENT,
        weak_task,
        new DeadendAwareSuccessorGenerator());

    return unique_ptr<SearchAlgorithm>(engine);
}

PR2Search::PR2Search(const plugins::Options &opts)
    : SearchAlgorithm(opts),
      h(nullptr) {}

SearchStatus PR2Search::step() {

    unique_ptr<SearchAlgorithm> current_search = get_search_engine();
    current_search->search();

    if (current_search->found_solution()) {
        set_plan(current_search->get_plan());
        if (PR2.logging.verbose) {
            cout << "Solution found!" << endl;
            for (const auto & opid : get_plan()) {
                cout << PR2.proxy->get_operators()[opid].get_name() << endl;
            }
        }
        current_search->print_statistics();
    }

    return current_search->get_status();
}

void PR2Search::print_statistics() const {
    cout << "Cumulative statistics:" << endl;
    statistics.print_detailed_statistics();
}

DeterministicPlan PR2Search::get_plan() const {
    return SearchAlgorithm::get_plan();
}

void PR2Search::save_plan_if_necessary() { }




// TODO: See if this can be removed.
// class PR2SearchFeature : public plugins::TypedFeature<SearchAlgorithm, PR2Search> {
// public:
//     PR2SearchFeature() : TypedFeature("pr2search") {
//         SearchAlgorithm::add_options_to_feature(*this);
//     }
// };

// static plugins::FeaturePlugin<PR2SearchFeature> _plugin;




};




void DeadendAwareSuccessorGenerator::generate_applicable_ops(const PR2State &_curr, vector<OperatorID> &ops) const {
    if (PR2.deadend.enabled && PR2.deadend.policy) {

        PR2State curr = PR2State(_curr);

        vector<FSAP *> reg_items;
        vector<OperatorID> orig_ops;
        map<int, FSAP *> fsap_map;

        PR2.generate_orig_applicable_ops(_curr, orig_ops);
        PR2.deadend.policy->generate_entailed_items(curr, reg_items);

        set<int> forbidden;
        for (auto item : reg_items) {

            int index = item->get_index();

            forbidden.insert(index);

            if ((fsap_map.find(index) == fsap_map.end()) ||
                (item->state->size() < fsap_map[index]->state->size()))
                    fsap_map[index] = item;
        }

        vector<int> ruled_out;
        for (auto opid : orig_ops) {
            if (0 == forbidden.count(PR2.proxy->get_nondet_index(opid)))
                ops.push_back(opid);
            else if (PR2.deadend.combine)
                ruled_out.push_back(PR2.proxy->get_nondet_index(opid));
        }

        // Add this state as a deadend if we have ruled out everything
        if (!PR2.weaksearch.limit_states && PR2.deadend.record_online &&
             PR2.deadend.combine && (orig_ops.size() > 0) && ops.empty()) {

            // Combind all of the FSAPs
            PR2State *newDE = new PR2State();
            for (unsigned i = 0; i < ruled_out.size(); i++) {
                newDE->combine_with(*((fsap_map[ruled_out[i]])->state));
            }

            // Also rule out all of the unapplicable actions
            for (const auto & op : PR2.proxy->get_operators()) {
                if (0 == forbidden.count(op.nondet_index)) {
                    if (op.is_possibly_applicable(*newDE)) {
                        assert (!(op.is_possibly_applicable(curr)));
                        int conflict_var = op.compute_conflict_var(curr);
                        assert (conflict_var != -1);
                        assert ((*newDE)[conflict_var] == -1);
                        (*newDE)[conflict_var] = curr[conflict_var];
                    }
                }
            }

            PR2.deadend.combination_count++;

            vector<DeadendTuple *> failed_states;
            failed_states.push_back(new DeadendTuple(newDE, NULL, NULL));
            update_deadends(failed_states);
        }

    } else {

        PR2.generate_orig_applicable_ops(_curr, ops);

    }

    return;
}


// TODO: Confirm this can be removed.
// static shared_ptr<SearchAlgorithm> _parse(OptionParser &parser) {
//     SearchAlgorithm::add_options_to_parser(parser);
//     Options opts = parser.parse();
//     shared_ptr<PR2Search> engine;

//     if (!parser.dry_run())
//         engine = make_shared<PR2Search>(opts);

//     return engine;
// }

// static PluginShared<SearchAlgorithm> _plugin("pr2search", _parse);

