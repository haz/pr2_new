var snapshots = {
0: {
"solution": {
  "type": "Initial Round",
  "score": 0,
  "size": 1,
  "round": 1,
"psgraph": {

    "init": false,
    "goal": "0"
  },
  "policy": "Coming soon...",
  "ps2fs": {
  },
  "pr2searchnodes": {
  0: {
      name: "(0)",
      open: 1,
      init: 1,
      poisoned: 0,
      subsumed: 0,
  },
  },
  "pr2searchnodelinks": [
  ],
},
},
1: {
"solution": {
  "type": "(case-5) New Path [node 0]",
  "score": 0.002,
  "size": 13,
  "round": 1,
"psgraph": {

    "init": "12",
    "goal": "0",
    "nodes" : {
      "0": {
        "expected_successor": false,
        "action": "goal_action",
        "state": "0x555555a450b0",
        "distance": 0,
        "is_relevant": 1,
        "is_goal": 1,
        "is_sc": 1,
        "successors": [

         ]
      },
      "1": {
        "expected_successor": "0",
        "action": "move-car l-2-6 l-1-7",
        "state": "0x555555a7c8a0",
        "distance": 1,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-2-6 l-1-7",
              "successor_id": "0"
          },
          {
              "outcome_label": "move-car_detdup_2 l-2-6 l-1-7",
              "successor_id": "-1"
          }
         ]
      },
      "2": {
        "expected_successor": "1",
        "action": "move-car l-3-5 l-2-6",
        "state": "0x555555a7a9e0",
        "distance": 2,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-3-5 l-2-6",
              "successor_id": "1"
          },
          {
              "outcome_label": "move-car_detdup_2 l-3-5 l-2-6",
              "successor_id": "-1"
          }
         ]
      },
      "3": {
        "expected_successor": "2",
        "action": "move-car l-4-4 l-3-5",
        "state": "0x555555a7c5f0",
        "distance": 3,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-4-4 l-3-5",
              "successor_id": "2"
          },
          {
              "outcome_label": "move-car_detdup_2 l-4-4 l-3-5",
              "successor_id": "-1"
          }
         ]
      },
      "4": {
        "expected_successor": "3",
        "action": "move-car l-5-3 l-4-4",
        "state": "0x555555a794b0",
        "distance": 4,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-5-3 l-4-4",
              "successor_id": "3"
          },
          {
              "outcome_label": "move-car_detdup_2 l-5-3 l-4-4",
              "successor_id": "-1"
          }
         ]
      },
      "5": {
        "expected_successor": "4",
        "action": "move-car l-6-2 l-5-3",
        "state": "0x555555a7b010",
        "distance": 5,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-6-2 l-5-3",
              "successor_id": "4"
          },
          {
              "outcome_label": "move-car_detdup_2 l-6-2 l-5-3",
              "successor_id": "-1"
          }
         ]
      },
      "6": {
        "expected_successor": "5",
        "action": "move-car l-7-1 l-6-2",
        "state": "0x555555a7b1f0",
        "distance": 6,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-7-1 l-6-2",
              "successor_id": "5"
          },
          {
              "outcome_label": "move-car_detdup_2 l-7-1 l-6-2",
              "successor_id": "-1"
          }
         ]
      },
      "7": {
        "expected_successor": "6",
        "action": "move-car l-6-1 l-7-1",
        "state": "0x555555a7b3d0",
        "distance": 7,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-6-1 l-7-1",
              "successor_id": "6"
          },
          {
              "outcome_label": "move-car_detdup_2 l-6-1 l-7-1",
              "successor_id": "-1"
          }
         ]
      },
      "8": {
        "expected_successor": "7",
        "action": "move-car l-5-1 l-6-1",
        "state": "0x555555a7b610",
        "distance": 8,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-5-1 l-6-1",
              "successor_id": "7"
          },
          {
              "outcome_label": "move-car_detdup_2 l-5-1 l-6-1",
              "successor_id": "-1"
          }
         ]
      },
      "9": {
        "expected_successor": "8",
        "action": "move-car l-4-1 l-5-1",
        "state": "0x555555a7b800",
        "distance": 9,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-4-1 l-5-1",
              "successor_id": "8"
          },
          {
              "outcome_label": "move-car_detdup_2 l-4-1 l-5-1",
              "successor_id": "-1"
          }
         ]
      },
      "10": {
        "expected_successor": "9",
        "action": "move-car l-3-1 l-4-1",
        "state": "0x555555a7b9d0",
        "distance": 10,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-3-1 l-4-1",
              "successor_id": "9"
          },
          {
              "outcome_label": "move-car_detdup_2 l-3-1 l-4-1",
              "successor_id": "-1"
          }
         ]
      },
      "11": {
        "expected_successor": "10",
        "action": "move-car l-2-1 l-3-1",
        "state": "0x555555a7bbc0",
        "distance": 11,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-2-1 l-3-1",
              "successor_id": "10"
          },
          {
              "outcome_label": "move-car_detdup_2 l-2-1 l-3-1",
              "successor_id": "-1"
          }
         ]
      },
      "12": {
        "expected_successor": "11",
        "action": "move-car l-1-1 l-2-1",
        "state": "0x555555a7bd90",
        "distance": 12,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-1-1 l-2-1",
              "successor_id": "11"
          },
          {
              "outcome_label": "move-car_detdup_2 l-1-1 l-2-1",
              "successor_id": "-1"
          }
         ]
      }
    },
    "edges" : [
        ["1", ">", "0"],
        ["1", ">", "-1"],
        ["2", ">", "1"],
        ["2", ">", "-1"],
        ["3", ">", "2"],
        ["3", ">", "-1"],
        ["4", ">", "3"],
        ["4", ">", "-1"],
        ["5", ">", "4"],
        ["5", ">", "-1"],
        ["6", ">", "5"],
        ["6", ">", "-1"],
        ["7", ">", "6"],
        ["7", ">", "-1"],
        ["8", ">", "7"],
        ["8", ">", "-1"],
        ["9", ">", "8"],
        ["9", ">", "-1"],
        ["10", ">", "9"],
        ["10", ">", "-1"],
        ["11", ">", "10"],
        ["11", ">", "-1"],
        ["12", ">", "11"],
        ["12", ">", "-1"]
    ],
    "states" : {
      "0x555555a450b0": [
        "Atom vehicle-at(l-1-7)"
      ],
      "0x555555a7c8a0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-2-6)"
      ],
      "0x555555a7a9e0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-3-5)"
      ],
      "0x555555a7c5f0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-4-4)"
      ],
      "0x555555a794b0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-5-3)"
      ],
      "0x555555a7b010": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-6-2)"
      ],
      "0x555555a7b1f0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-7-1)"
      ],
      "0x555555a7b3d0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-6-1)"
      ],
      "0x555555a7b610": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-5-1)"
      ],
      "0x555555a7b800": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-4-1)"
      ],
      "0x555555a7b9d0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-3-1)"
      ],
      "0x555555a7bbc0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-2-1)"
      ],
      "0x555555a7bd90": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-1-1)"
      ]
     }
  },
  "policy": "Coming soon...",
  "ps2fs": {
    1: {21: 21, },
    2: {19: 19, },
    3: {17: 17, },
    4: {15: 15, },
    5: {13: 13, },
    6: {11: 11, },
    7: {9: 9, },
    8: {7: 7, },
    9: {5: 5, },
    10: {3: 3, },
    11: {1: 1, },
    12: {0: 0, },
  },
  "pr2searchnodes": {
  0: {
      name: "(0) move-car l-1-1 l-2-1",
      open: 0,
      init: 1,
      poisoned: 0,
      subsumed: 0,
  },
  1: {
      name: "(1) move-car l-2-1 l-3-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  2: {
      name: "(2)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  3: {
      name: "(3) move-car l-3-1 l-4-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  4: {
      name: "(4)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  5: {
      name: "(5) move-car l-4-1 l-5-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  6: {
      name: "(6)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  7: {
      name: "(7) move-car l-5-1 l-6-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  8: {
      name: "(8)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  9: {
      name: "(9) move-car l-6-1 l-7-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  10: {
      name: "(10)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  11: {
      name: "(11) move-car l-7-1 l-6-2",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  12: {
      name: "(12)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  13: {
      name: "(13) move-car l-6-2 l-5-3",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  14: {
      name: "(14)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  15: {
      name: "(15) move-car l-5-3 l-4-4",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  16: {
      name: "(16)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  17: {
      name: "(17) move-car l-4-4 l-3-5",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  18: {
      name: "(18)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  19: {
      name: "(19) move-car l-3-5 l-2-6",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  20: {
      name: "(20)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  21: {
      name: "(21) move-car l-2-6 l-1-7",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  22: {
      name: "(22)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  23: {
      name: "(23)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  24: {
      name: "(24)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  },
  "pr2searchnodelinks": [
    [0,1],
    [0,2],
    [1,3],
    [1,4],
    [3,5],
    [3,6],
    [5,7],
    [5,8],
    [7,9],
    [7,10],
    [9,11],
    [9,12],
    [11,13],
    [11,14],
    [13,15],
    [13,16],
    [15,17],
    [15,18],
    [17,19],
    [17,20],
    [19,21],
    [19,22],
    [21,23],
    [21,24],
  ],
},
},
2: {
"solution": {
  "type": "(case-4) Hooking Up [node 24]",
  "score": 0.002,
  "size": 13,
  "round": 1,
"psgraph": {

    "init": "12",
    "goal": "0",
    "nodes" : {
      "0": {
        "expected_successor": false,
        "action": "goal_action",
        "state": "0x555555a450b0",
        "distance": 0,
        "is_relevant": 1,
        "is_goal": 1,
        "is_sc": 1,
        "successors": [

         ]
      },
      "1": {
        "expected_successor": "0",
        "action": "move-car l-2-6 l-1-7",
        "state": "0x555555a7c8a0",
        "distance": 1,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 1,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-2-6 l-1-7",
              "successor_id": "0"
          },
          {
              "outcome_label": "move-car_detdup_2 l-2-6 l-1-7",
              "successor_id": "0"
          }
         ]
      },
      "2": {
        "expected_successor": "1",
        "action": "move-car l-3-5 l-2-6",
        "state": "0x555555a7a9e0",
        "distance": 2,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-3-5 l-2-6",
              "successor_id": "1"
          },
          {
              "outcome_label": "move-car_detdup_2 l-3-5 l-2-6",
              "successor_id": "-1"
          }
         ]
      },
      "3": {
        "expected_successor": "2",
        "action": "move-car l-4-4 l-3-5",
        "state": "0x555555a7c5f0",
        "distance": 3,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-4-4 l-3-5",
              "successor_id": "2"
          },
          {
              "outcome_label": "move-car_detdup_2 l-4-4 l-3-5",
              "successor_id": "-1"
          }
         ]
      },
      "4": {
        "expected_successor": "3",
        "action": "move-car l-5-3 l-4-4",
        "state": "0x555555a794b0",
        "distance": 4,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-5-3 l-4-4",
              "successor_id": "3"
          },
          {
              "outcome_label": "move-car_detdup_2 l-5-3 l-4-4",
              "successor_id": "-1"
          }
         ]
      },
      "5": {
        "expected_successor": "4",
        "action": "move-car l-6-2 l-5-3",
        "state": "0x555555a7b010",
        "distance": 5,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-6-2 l-5-3",
              "successor_id": "4"
          },
          {
              "outcome_label": "move-car_detdup_2 l-6-2 l-5-3",
              "successor_id": "-1"
          }
         ]
      },
      "6": {
        "expected_successor": "5",
        "action": "move-car l-7-1 l-6-2",
        "state": "0x555555a7b1f0",
        "distance": 6,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-7-1 l-6-2",
              "successor_id": "5"
          },
          {
              "outcome_label": "move-car_detdup_2 l-7-1 l-6-2",
              "successor_id": "-1"
          }
         ]
      },
      "7": {
        "expected_successor": "6",
        "action": "move-car l-6-1 l-7-1",
        "state": "0x555555a7b3d0",
        "distance": 7,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-6-1 l-7-1",
              "successor_id": "6"
          },
          {
              "outcome_label": "move-car_detdup_2 l-6-1 l-7-1",
              "successor_id": "-1"
          }
         ]
      },
      "8": {
        "expected_successor": "7",
        "action": "move-car l-5-1 l-6-1",
        "state": "0x555555a7b610",
        "distance": 8,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-5-1 l-6-1",
              "successor_id": "7"
          },
          {
              "outcome_label": "move-car_detdup_2 l-5-1 l-6-1",
              "successor_id": "-1"
          }
         ]
      },
      "9": {
        "expected_successor": "8",
        "action": "move-car l-4-1 l-5-1",
        "state": "0x555555a7b800",
        "distance": 9,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-4-1 l-5-1",
              "successor_id": "8"
          },
          {
              "outcome_label": "move-car_detdup_2 l-4-1 l-5-1",
              "successor_id": "-1"
          }
         ]
      },
      "10": {
        "expected_successor": "9",
        "action": "move-car l-3-1 l-4-1",
        "state": "0x555555a7b9d0",
        "distance": 10,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-3-1 l-4-1",
              "successor_id": "9"
          },
          {
              "outcome_label": "move-car_detdup_2 l-3-1 l-4-1",
              "successor_id": "-1"
          }
         ]
      },
      "11": {
        "expected_successor": "10",
        "action": "move-car l-2-1 l-3-1",
        "state": "0x555555a7bbc0",
        "distance": 11,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-2-1 l-3-1",
              "successor_id": "10"
          },
          {
              "outcome_label": "move-car_detdup_2 l-2-1 l-3-1",
              "successor_id": "-1"
          }
         ]
      },
      "12": {
        "expected_successor": "11",
        "action": "move-car l-1-1 l-2-1",
        "state": "0x555555a7bd90",
        "distance": 12,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-1-1 l-2-1",
              "successor_id": "11"
          },
          {
              "outcome_label": "move-car_detdup_2 l-1-1 l-2-1",
              "successor_id": "-1"
          }
         ]
      }
    },
    "edges" : [
        ["1", ">", "0"],
        ["1", ">", "0"],
        ["2", ">", "1"],
        ["2", ">", "-1"],
        ["3", ">", "2"],
        ["3", ">", "-1"],
        ["4", ">", "3"],
        ["4", ">", "-1"],
        ["5", ">", "4"],
        ["5", ">", "-1"],
        ["6", ">", "5"],
        ["6", ">", "-1"],
        ["7", ">", "6"],
        ["7", ">", "-1"],
        ["8", ">", "7"],
        ["8", ">", "-1"],
        ["9", ">", "8"],
        ["9", ">", "-1"],
        ["10", ">", "9"],
        ["10", ">", "-1"],
        ["11", ">", "10"],
        ["11", ">", "-1"],
        ["12", ">", "11"],
        ["12", ">", "-1"]
    ],
    "states" : {
      "0x555555a450b0": [
        "Atom vehicle-at(l-1-7)"
      ],
      "0x555555a7c8a0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-2-6)"
      ],
      "0x555555a7a9e0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-3-5)"
      ],
      "0x555555a7c5f0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-4-4)"
      ],
      "0x555555a794b0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-5-3)"
      ],
      "0x555555a7b010": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-6-2)"
      ],
      "0x555555a7b1f0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-7-1)"
      ],
      "0x555555a7b3d0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-6-1)"
      ],
      "0x555555a7b610": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-5-1)"
      ],
      "0x555555a7b800": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-4-1)"
      ],
      "0x555555a7b9d0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-3-1)"
      ],
      "0x555555a7bbc0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-2-1)"
      ],
      "0x555555a7bd90": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-1-1)"
      ]
     }
  },
  "policy": "Coming soon...",
  "ps2fs": {
    0: {24: 24, },
    1: {21: 21, },
    2: {19: 19, },
    3: {17: 17, },
    4: {15: 15, },
    5: {13: 13, },
    6: {11: 11, },
    7: {9: 9, },
    8: {7: 7, },
    9: {5: 5, },
    10: {3: 3, },
    11: {1: 1, },
    12: {0: 0, },
  },
  "pr2searchnodes": {
  0: {
      name: "(0) move-car l-1-1 l-2-1",
      open: 0,
      init: 1,
      poisoned: 0,
      subsumed: 0,
  },
  1: {
      name: "(1) move-car l-2-1 l-3-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  2: {
      name: "(2)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  3: {
      name: "(3) move-car l-3-1 l-4-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  4: {
      name: "(4)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  5: {
      name: "(5) move-car l-4-1 l-5-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  6: {
      name: "(6)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  7: {
      name: "(7) move-car l-5-1 l-6-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  8: {
      name: "(8)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  9: {
      name: "(9) move-car l-6-1 l-7-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  10: {
      name: "(10)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  11: {
      name: "(11) move-car l-7-1 l-6-2",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  12: {
      name: "(12)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  13: {
      name: "(13) move-car l-6-2 l-5-3",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  14: {
      name: "(14)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  15: {
      name: "(15) move-car l-5-3 l-4-4",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  16: {
      name: "(16)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  17: {
      name: "(17) move-car l-4-4 l-3-5",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  18: {
      name: "(18)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  19: {
      name: "(19) move-car l-3-5 l-2-6",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  20: {
      name: "(20)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  21: {
      name: "(21) move-car l-2-6 l-1-7",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  22: {
      name: "(22)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  23: {
      name: "(23)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  24: {
      name: "(24)",
      open: 0,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  },
  "pr2searchnodelinks": [
    [0,1],
    [0,2],
    [1,3],
    [1,4],
    [3,5],
    [3,6],
    [5,7],
    [5,8],
    [7,9],
    [7,10],
    [9,11],
    [9,12],
    [11,13],
    [11,14],
    [13,15],
    [13,16],
    [15,17],
    [15,18],
    [17,19],
    [17,20],
    [19,21],
    [19,22],
    [21,23],
    [21,24],
  ],
},
},
3: {
"solution": {
  "type": "(case-3) Predefined Path [node 23]",
  "score": 0.002,
  "size": 13,
  "round": 1,
"psgraph": {

    "init": "12",
    "goal": "0",
    "nodes" : {
      "0": {
        "expected_successor": false,
        "action": "goal_action",
        "state": "0x555555a450b0",
        "distance": 0,
        "is_relevant": 1,
        "is_goal": 1,
        "is_sc": 1,
        "successors": [

         ]
      },
      "1": {
        "expected_successor": "0",
        "action": "move-car l-2-6 l-1-7",
        "state": "0x555555a7c8a0",
        "distance": 1,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 1,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-2-6 l-1-7",
              "successor_id": "0"
          },
          {
              "outcome_label": "move-car_detdup_2 l-2-6 l-1-7",
              "successor_id": "0"
          }
         ]
      },
      "2": {
        "expected_successor": "1",
        "action": "move-car l-3-5 l-2-6",
        "state": "0x555555a7a9e0",
        "distance": 2,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-3-5 l-2-6",
              "successor_id": "1"
          },
          {
              "outcome_label": "move-car_detdup_2 l-3-5 l-2-6",
              "successor_id": "-1"
          }
         ]
      },
      "3": {
        "expected_successor": "2",
        "action": "move-car l-4-4 l-3-5",
        "state": "0x555555a7c5f0",
        "distance": 3,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-4-4 l-3-5",
              "successor_id": "2"
          },
          {
              "outcome_label": "move-car_detdup_2 l-4-4 l-3-5",
              "successor_id": "-1"
          }
         ]
      },
      "4": {
        "expected_successor": "3",
        "action": "move-car l-5-3 l-4-4",
        "state": "0x555555a794b0",
        "distance": 4,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-5-3 l-4-4",
              "successor_id": "3"
          },
          {
              "outcome_label": "move-car_detdup_2 l-5-3 l-4-4",
              "successor_id": "-1"
          }
         ]
      },
      "5": {
        "expected_successor": "4",
        "action": "move-car l-6-2 l-5-3",
        "state": "0x555555a7b010",
        "distance": 5,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-6-2 l-5-3",
              "successor_id": "4"
          },
          {
              "outcome_label": "move-car_detdup_2 l-6-2 l-5-3",
              "successor_id": "-1"
          }
         ]
      },
      "6": {
        "expected_successor": "5",
        "action": "move-car l-7-1 l-6-2",
        "state": "0x555555a7b1f0",
        "distance": 6,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-7-1 l-6-2",
              "successor_id": "5"
          },
          {
              "outcome_label": "move-car_detdup_2 l-7-1 l-6-2",
              "successor_id": "-1"
          }
         ]
      },
      "7": {
        "expected_successor": "6",
        "action": "move-car l-6-1 l-7-1",
        "state": "0x555555a7b3d0",
        "distance": 7,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-6-1 l-7-1",
              "successor_id": "6"
          },
          {
              "outcome_label": "move-car_detdup_2 l-6-1 l-7-1",
              "successor_id": "-1"
          }
         ]
      },
      "8": {
        "expected_successor": "7",
        "action": "move-car l-5-1 l-6-1",
        "state": "0x555555a7b610",
        "distance": 8,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-5-1 l-6-1",
              "successor_id": "7"
          },
          {
              "outcome_label": "move-car_detdup_2 l-5-1 l-6-1",
              "successor_id": "-1"
          }
         ]
      },
      "9": {
        "expected_successor": "8",
        "action": "move-car l-4-1 l-5-1",
        "state": "0x555555a7b800",
        "distance": 9,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-4-1 l-5-1",
              "successor_id": "8"
          },
          {
              "outcome_label": "move-car_detdup_2 l-4-1 l-5-1",
              "successor_id": "-1"
          }
         ]
      },
      "10": {
        "expected_successor": "9",
        "action": "move-car l-3-1 l-4-1",
        "state": "0x555555a7b9d0",
        "distance": 10,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-3-1 l-4-1",
              "successor_id": "9"
          },
          {
              "outcome_label": "move-car_detdup_2 l-3-1 l-4-1",
              "successor_id": "-1"
          }
         ]
      },
      "11": {
        "expected_successor": "10",
        "action": "move-car l-2-1 l-3-1",
        "state": "0x555555a7bbc0",
        "distance": 11,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-2-1 l-3-1",
              "successor_id": "10"
          },
          {
              "outcome_label": "move-car_detdup_2 l-2-1 l-3-1",
              "successor_id": "-1"
          }
         ]
      },
      "12": {
        "expected_successor": "11",
        "action": "move-car l-1-1 l-2-1",
        "state": "0x555555a7bd90",
        "distance": 12,
        "is_relevant": 0,
        "is_goal": 0,
        "is_sc": 0,
        "successors": [
          {
              "outcome_label": "move-car_detdup_1 l-1-1 l-2-1",
              "successor_id": "11"
          },
          {
              "outcome_label": "move-car_detdup_2 l-1-1 l-2-1",
              "successor_id": "-1"
          }
         ]
      }
    },
    "edges" : [
        ["1", ">", "0"],
        ["1", ">", "0"],
        ["2", ">", "1"],
        ["2", ">", "-1"],
        ["3", ">", "2"],
        ["3", ">", "-1"],
        ["4", ">", "3"],
        ["4", ">", "-1"],
        ["5", ">", "4"],
        ["5", ">", "-1"],
        ["6", ">", "5"],
        ["6", ">", "-1"],
        ["7", ">", "6"],
        ["7", ">", "-1"],
        ["8", ">", "7"],
        ["8", ">", "-1"],
        ["9", ">", "8"],
        ["9", ">", "-1"],
        ["10", ">", "9"],
        ["10", ">", "-1"],
        ["11", ">", "10"],
        ["11", ">", "-1"],
        ["12", ">", "11"],
        ["12", ">", "-1"]
    ],
    "states" : {
      "0x555555a450b0": [
        "Atom vehicle-at(l-1-7)"
      ],
      "0x555555a7c8a0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-2-6)"
      ],
      "0x555555a7a9e0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-3-5)"
      ],
      "0x555555a7c5f0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-4-4)"
      ],
      "0x555555a794b0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-5-3)"
      ],
      "0x555555a7b010": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-6-2)"
      ],
      "0x555555a7b1f0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-7-1)"
      ],
      "0x555555a7b3d0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-6-1)"
      ],
      "0x555555a7b610": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-5-1)"
      ],
      "0x555555a7b800": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-4-1)"
      ],
      "0x555555a7b9d0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-3-1)"
      ],
      "0x555555a7bbc0": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-2-1)"
      ],
      "0x555555a7bd90": [
        "Atom not-flattire()",
        "Atom vehicle-at(l-1-1)"
      ]
     }
  },
  "policy": "Coming soon...",
  "ps2fs": {
    0: {23: 23, 24: 24, },
    1: {21: 21, },
    2: {19: 19, },
    3: {17: 17, },
    4: {15: 15, },
    5: {13: 13, },
    6: {11: 11, },
    7: {9: 9, },
    8: {7: 7, },
    9: {5: 5, },
    10: {3: 3, },
    11: {1: 1, },
    12: {0: 0, },
  },
  "pr2searchnodes": {
  0: {
      name: "(0) move-car l-1-1 l-2-1",
      open: 0,
      init: 1,
      poisoned: 0,
      subsumed: 0,
  },
  1: {
      name: "(1) move-car l-2-1 l-3-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  2: {
      name: "(2)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  3: {
      name: "(3) move-car l-3-1 l-4-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  4: {
      name: "(4)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  5: {
      name: "(5) move-car l-4-1 l-5-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  6: {
      name: "(6)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  7: {
      name: "(7) move-car l-5-1 l-6-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  8: {
      name: "(8)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  9: {
      name: "(9) move-car l-6-1 l-7-1",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  10: {
      name: "(10)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  11: {
      name: "(11) move-car l-7-1 l-6-2",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  12: {
      name: "(12)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  13: {
      name: "(13) move-car l-6-2 l-5-3",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  14: {
      name: "(14)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  15: {
      name: "(15) move-car l-5-3 l-4-4",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  16: {
      name: "(16)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  17: {
      name: "(17) move-car l-4-4 l-3-5",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  18: {
      name: "(18)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  19: {
      name: "(19) move-car l-3-5 l-2-6",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  20: {
      name: "(20)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  21: {
      name: "(21) move-car l-2-6 l-1-7",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  22: {
      name: "(22)",
      open: 1,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  23: {
      name: "(23)",
      open: 0,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  24: {
      name: "(24)",
      open: 0,
      init: 0,
      poisoned: 0,
      subsumed: 0,
  },
  },
  "pr2searchnodelinks": [
    [0,1],
    [0,2],
    [1,3],
    [1,4],
    [3,5],
    [3,6],
    [5,7],
    [5,8],
    [7,9],
    [7,10],
    [9,11],
    [9,12],
    [11,13],
    [11,14],
    [13,15],
    [13,16],
    [15,17],
    [15,18],
    [17,19],
    [17,20],
    [19,21],
    [19,22],
    [21,23],
    [21,24],
  ],
},
},
};