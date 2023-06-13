// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: "601m6p28",
    question:
      "What does WBS stand for?",
    answer: "Work Breakdown Structure",
    options: [
      "Work Breakdown Statement",
      "Weekend Break Schedule",
      "Work Breakdown Structure",
      "Wait Before Stopping",
    ],
    note: "Source: PROEA 601 module 6 slide 28.",
  },
  {
    numb: "601m6p122",
    question:
      "What is a WBS?",
    answer: "deliverable-oriented hierarchical decomposition of the work to be executed",
    options: [
      "deliverable-oriented hierarchical decomposition of the work to be executed",
      "a list of the tasks that need to be performed for a project",
      "a schedule for the tasks that need to be completed for a project",
      "a flat file of project deliverables",
    ],
    note: "Source: PROEA 601 module 6 slide 122.",
  },
  {
    numb: "602m3p27",
    question:
      "What is a benefits of a WBS?",
    answer: "it turns one large, unique piece of work into many small manageable tasks and activities",
    options: [
      "it only focuses on the project tasks",
      "different team members will use different versions",
      "it goes into the same level of detail for every project",
      "it turns one large, unique piece of work into many small manageable tasks and activities",
    ],
    note: "Source: PROEA 602 module 3 slide 27.",
  },
  {
    numb: "602m3p28",
    question:
      "How do you build a WBS?",
    answer: "Identify large deliverables first, then decompose to smaller deliverables and tasks.",
    options: [
      "Identify small deliverables first, then compose to larger deliverables and tasks.",
      "Identify medium deliverables first, then decompose to smaller deliverables and tasks, and compose to large deliverables.",
      "Identify large deliverables first, then decompose to smaller deliverables and tasks.",
      "It should only focus on large deliverables that require multiple individuals.",
    ],
    note: "Source: PROEA 602 module 3 slide 28.",
  },
  {
    numb: "602m3p30",
    question:
      "What is a purpose of a deliverable-based WBS?",
    answer: "It demonstrates the relationship between the project deliverables and the project scope.",
    options: [
      "It's better than a planning package WBS.",
      "It demonstrates the relationship between the project deliverables and the project scope.",
      "It breaks the project down into phases.",
      "It should only focus on large deliverables that require multiple individuals.",
    ],
    note: "Source: PROEA 602 module 3 slide 30.",
  },
  {
    numb: "602m3p32a",
    question:
      "Anything you create in the project that brings the project closer to completion.",
    answer: "deliverable",
    options: [
      "deliverable",
      "milestone",
      "activity",
      "WBS",
    ],
    note: "Source: PROEA 602 module 3 slide 32.",
  },
  {
    numb: "602m3p32b",
    question:
      "A distinct, scheduled portion of work performed during a project.",
    answer: "activity",
    options: [
      "deliverable",
      "milestone",
      "activity",
      "WBS",
    ],
    note: "Source: PROEA 602 module 3 slide 32.",
  },
  {
    numb: "602m3p32c",
    question:
      "A significant point in a project, program, or portfolio.",
    answer: "milestone",
    options: [
      "deliverable",
      "milestone",
      "activity",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 32.",
  },
  {
    numb: "602m3p33a",
    question:
      "The process of identifying and documenting relationships among activities.",
    answer: "sequence activities",
    options: [
      "deliverable",
      "milestone",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 33.",
  },
  {
    numb: "602m3p33b",
    question:
      "Results in a network diagram used to develop a detailed schedule.",
    answer: "sequence activities",
    options: [
      "deliverable",
      "milestone",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 33.",
  },
  {
    numb: "602m3p34",
    question:
      "Determine the type and quantity of resources needed (human labor, equipment, materials, etc.).",
    answer: "sequence activities",
    options: [
      "estimate activity durations",
      "milestone",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 34.",
  },
  {
    numb: "602m3p35a",
    question:
      "Determine amount of time each activity will take place.",
    answer: "estimate activity durations",
    options: [
      "estimate activity durations",
      "milestone",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 35.",
  },
  {
    numb: "602m3p35b",
    question:
      "May require padding if there are unclear points about an activity.",
    answer: "estimate activity durations",
    options: [
      "estimate activity durations",
      "project schedule",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 35.",
  },
  {
    numb: "602m3p40a",
    question:
      "Created after the WBS.",
    answer: "project schedule",
    options: [
      "estimate activity durations",
      "project schedule",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 40.",
  },
  {
    numb: "602m3p40a",
    question:
      "Guides the project team from the start to the finish of a project.",
    answer: "project schedule",
    options: [
      "estimate activity durations",
      "project schedule",
      "estimate activity resources",
      "sequence activities",
    ],
    note: "Source: PROEA 602 module 3 slide 40.",
  },
  {
    numb: "602m3p40b",
    question:
      "A project timeline with start dates, end dates, and milestones.",
    answer: "project schedule",
    options: [
      "estimate activity durations",
      "project schedule",
      "estimate activity resources",
      "WBS",
    ],
    note: "Source: PROEA 602 module 3 slide 40.",
  },
  {
    numb: "602m3p43a",
    question:
      "Based on needs or desires outside of the project.",
    answer: "external dependency",
    options: [
      "mandatory dependency",
      "discretionary dependency",
      "external dependency",
      "fabricated dependency",
    ],
    note: "Source: PROEA 602 module 3 slide 43.",
  },
  {
    numb: "602m3p43b",
    question:
      "Inherent in the nature of the work.",
    answer: "mandatory dependency",
    options: [
      "mandatory dependency",
      "discretionary dependency",
      "external dependency",
      "fabricated dependency",
    ],
    note: "Source: PROEA 602 module 3 slide 43.",
  },
  {
    numb: "602m3p43c",
    question:
      "Determined by the project team and can be changed if needed.",
    answer: "discretionary dependency",
    options: [
      "mandatory dependency",
      "discretionary dependency",
      "external dependency",
      "fabricated dependency",
    ],
    note: "Source: PROEA 602 module 3 slide 43.",
  },
  {
    numb: "602m3p44a",
    question:
      "Schedule realationships: successor activity can't begin before predecessor has started.",
    answer: "Start-to-Start",
    options: [
      "Finish-to-Start",
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish",
    ],
    note: "Source: PROEA 602 module 3 slide 44.",
  },
  {
    numb: "602m3p44b",
    question:
      "Schedule realationships: most common, successor activity can't begin before predecessor has finished.",
    answer: "Finish-to-Start",
    options: [
      "Finish-to-Start",
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish",
    ],
    note: "Source: PROEA 602 module 3 slide 44.",
  },
  {
    numb: "602m3p44c",
    question:
      "Schedule realationships: One task can only be completed after the other task has been completed.",
    answer: "Finish-to-Finish",
    options: [
      "Finish-to-Start",
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish",
    ],
    note: "Source: PROEA 602 module 3 slide 44.",
  },
  {
    numb: "602m3p46a",
    question:
      "The longest sequence of activities in a project plan.",
    answer: "critical path method (CPM)",
    options: [
      "critical path method (CPM)",
      "schedule compression",
      "what-if scenario analysis",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 46.",
  },
  {
    numb: "602m3p46b",
    question:
      "Used to calculate the overall project duration.",
    answer: "critical path method (CPM)",
    options: [
      "critical path method (CPM)",
      "schedule compression",
      "what-if scenario analysis",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 46.",
  },
  {
    numb: "602m3p48a",
    question:
      "amount of time an activity can be delayed without delaying the early start date of its successor",
    answer: "free float",
    options: [
      "total float",
      "free float",
      "project float",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 48.",
  },
  {
    numb: "602m3p48b",
    question:
      "(main type) amount of time an activity can be delayed without delaying the project end date",
    answer: "total float",
    options: [
      "total float",
      "free float",
      "project float",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 48.",
  },
  {
    numb: "602m3p48c",
    question:
      "total time a project can be delayed without delaying the externally imposed completion date",
    answer: "project float",
    options: [
      "total float",
      "free float",
      "project float",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 48.",
  },
  {
    numb: "602m3p49a",
    question:
      "Lead time: amount of time a successor activity can be advanced with respect to a predecessor.",
    answer: "Finish-to-Start",
    options: [
      "Finish-to-Start",
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish",
    ],
    note: "Source: PROEA 602 module 3 slide 49.",
  },
  {
    numb: "602m3p49b",
    question:
      "Lag time: amount of time a successor activity will be delayed with respect to a predecessor.",
    answer: "Start-to-Start",
    options: [
      "Finish-to-Start",
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish",
    ],
    note: "Source: PROEA 602 module 3 slide 49.",
  },
  {
    numb: "602m3p51a",
    question:
      "Used to create output faster without changing the actual scope of a project.",
    answer: "schedule compression",
    options: [
      "critical path method (CPM)",
      "schedule compression",
      "what-if scenario analysis",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 51.",
  },
  {
    numb: "602m3p51b",
    question:
      "Add resources to critical path activities to shorten duration. (Increases costs.)",
    answer: "crashing",
    options: [
      "fast track",
      "crashing",
      "cut quality",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 51.",
  },
  {
    numb: "602m3p51c",
    question:
      "Remove dependencies in the critical path. (Can result in rework, increased risk, and extra communication.)",
    answer: "fast track",
    options: [
      "fast track",
      "crashing",
      "cut quality",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 51.",
  },
  {
    numb: "602m3p52",
    question:
      "Informal speculation about how a given situation might be handled.",
    answer: "what-if scenario analysis",
    options: [
      "critical path method (CPM)",
      "resource smoothing",
      "what-if scenario analysis",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 52.",
  },
  {
    numb: "602m3p53a",
    question:
      "Adjusting a project's start and end dates to accommodate limited resources.",
    answer: "resource leveling",
    options: [
      "critical path method (CPM)",
      "resource smoothing",
      "what-if scenario analysis",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 53.",
  },
  {
    numb: "602m3p53b",
    question:
      "Adjusting a project's activities to complete work within existing timelines.",
    answer: "resource smoothing",
    options: [
      "critical path method (CPM)",
      "resource smoothing",
      "critical chain method",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 53.",
  },
  {
    numb: "602m3p54",
    question:
      "considering the resource availabilities and their dependencies along all the task chain and adding buffers to the end of the chain to account for scarcity of resources in order to protect the project schedule from slipping.",
    answer: "critical chain method",
    options: [
      "critical path method (CPM)",
      "resource smoothing",
      "critical chain method",
      "resource leveling",
    ],
    note: "Source: PROEA 602 module 3 slide 54.",
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ],
  //  note: "Source: Made up question."
  // },
];
