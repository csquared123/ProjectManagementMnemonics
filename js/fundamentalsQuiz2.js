// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: "601m3p47a",
    question:
      "focuses on adapting quickly to changing scope and project reality",
    answer: "Adaptive Project Management",
    options: [
      "Predictive (Traditional) Project Management",
      "Adaptive Project Management",
      "Neither",
      "Both",
    ],
    note: "Source: PROEA 601 module 3 slide 47.",
  },
  {
    numb: "601m3p47b",
    question:
      "focuses on planning and analyzing the projected future in-depth for anticipated risks",
    answer: "Predictive (Traditional) Project Management",
    options: [
      "Predictive (Traditional) Project Management",
      "Adaptive Project Management",
      "Neither",
      "Both",
    ],
    note: "Source: PROEA 601 module 3 slide 47.",
  },
  {
    numb: "601m3p47c",
    question:
      "becomes challenging to change the direction of the project if something goes wrong",
    answer: "Predictive (Traditional) Project Management",
    options: [
      "Predictive (Traditional) Project Management",
      "Adaptive Project Management",
      "Neither",
      "Both",
    ],
    note: "Source: PROEA 601 module 3 slide 47.",
  },
  {
    numb: "601m3p47d",
    question:
      "provides more flexibility in the path to the end goal, which accommodates changing requirements along the way",
    answer: "Adaptive Project Management",
    options: [
      "Predictive (Traditional) Project Management",
      "Adaptive Project Management",
      "Neither",
      "Both",
    ],
    note: "Source: PROEA 601 module 3 slide 47.",
  },
  {
    numb: "601m3p47e",
    question:
      "relies on an early phase analysis and a detailed breakup of features and tasks for the entire development process",
    answer: "Predictive (Traditional) Project Management",
    options: [
      "Predictive (Traditional) Project Management",
      "Adaptive Project Management",
      "Neither",
      "Both",
    ],
    note: "Source: PROEA 601 module 3 slide 47.",
  },
  {
    numb: "601m3p48a",
    question: "Straightforward and monotasking; resource-driven",
    answer: "Critical Chain Project Management (CCPM)",
    options: [
      "Agile",
      "Waterfall",
      "Critical Path Method (CPM)",
      "Critical Chain Project Management (CCPM)",
    ],
    note: "Source: PROEA 601 module 3 slide 48.",
  },
  {
    numb: "601m3p48b",
    question: "flexible and people-centered; change-driven",
    answer: "Agile",
    options: [
      "Agile",
      "Waterfall",
      "Critical Path Method (CPM)",
      "Critical Chain Project Management (CCPM)",
    ],
    note: "Source: PROEA 601 module 3 slide 48.",
  },
  {
    numb: "601m3p48c",
    question: "linear and sequential; plan-driven",
    answer: "Waterfall",
    options: [
      "Agile",
      "Waterfall",
      "Critical Path Method (CPM)",
      "Critical Chain Project Management (CCPM)",
    ],
    note: "Source: PROEA 601 module 3 slide 48.",
  },
  {
    numb: "601m3p48d",
    question: "detailed and dependency-oriented; time-driven",
    answer: "Critical Path Method (CPM)",
    options: [
      "Agile",
      "Waterfall",
      "Critical Path Method (CPM)",
      "Critical Chain Project Management (CCPM)",
    ],
    note: "Source: PROEA 601 module 3 slide 48.",
  },
  {
    numb: "601m3p48e",
    question:
      "manageable and controllable; product-driven; projects requiring careful control",
    answer: "PRINCE2",
    options: ["Agile", "Waterfall", "Critical Path Method (CPM)", "PRINCE2"],
    note: "Source: PROEA 601 module 3 slide 48.",
  },
  {
    numb: "601m3p48f",
    question: "process-based; experience-driven",
    answer: "PMI/PMBOK",
    options: ["Agile", "PMI/PMBOK", "Critical Path Method (CPM)", "PRINCE2"],
    note: "Source: PROEA 601 module 3 slide 48.",
  },
  {
    numb: "601m3p50a",
    question: "What does PMBOK stand for?",
    answer: "Project management body of knowledge",
    options: [
      "Project manager book of keys",
      "Project management body of knowledge",
      "Post mortum basics for monitoring",
      "Project maintenance by open keeping",
    ],
    note: "Source: PROEA 601 module 3 slide 50.",
  },
  {
    numb: "601m3p50a",
    question: "How many knowledge areas are part of PMBOK?",
    answer: "10",
    options: ["5", "10", "49", "50"],
    note: "Source: PROEA 601 module 3 slide 50.",
  },
  {
    numb: "601m3p50b",
    question: "How many process groups are part of PMBOK?",
    answer: "5",
    options: ["5", "10", "49", "50"],
    note: "Source: PROEA 601 module 3 slide 50.",
  },
  {
    numb: "601m3p50c",
    question: "How many processes are part of PMBOK?",
    answer: "49",
    options: ["5", "10", "49", "50"],
    note: "Source: PROEA 601 module 3 slide 50.",
  },
  {
    numb: "601m3p50d",
    question: "How many processes are part of the Initiating phase?",
    answer: "2",
    options: ["1", "2", "10", "12"],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50e",
    question: "How many processes are part of the Planning phase?",
    answer: "24",
    options: ["1", "2", "10", "24"],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50f",
    question: "How many processes are part of the Executing phase?",
    answer: "10",
    options: ["1", "2", "10", "12"],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50g",
    question: "How many processes are part of the Monitoring & Controlling phase?",
    answer: "12",
    options: ["1", "2", "10", "12"],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50h",
    question: "How many processes are part of the Closing phase?",
    answer: "1",
    options: ["1", "2", "10", "12"],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50i",
    question:
      "Which project management knowledge areas are part of the Initiating phase?",
    answer: "Integration, Stakeholder",
    options: [
      "Integration",
      "Integration, Stakeholder",
      "Integration, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
      "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    ],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50j",
    question:
      "Which project management knowledge areas are part of the Planning phase?",
    answer: "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    options: [
      "Integration",
      "Integration, Stakeholder",
      "Integration, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
      "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    ],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50k",
    question:
      "Which project management knowledge areas are part of the Executing phase?",
    answer: "Integration, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    options: [
      "Integration",
      "Integration, Stakeholder",
      "Integration, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
      "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    ],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50l",
    question:
      "Which project management knowledge areas are part of the Monitoring & Controlling phase?",
    answer: "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    options: [
      "Integration",
      "Integration, Stakeholder",
      "Integration, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
      "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    ],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p50m",
    question:
      "Which project management knowledge areas are part of the Closing phase?",
    answer: "Integration",
    options: [
      "Integration",
      "Integration, Stakeholder",
      "Integration, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
      "Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder",
    ],
    note: "Source: PROEA 601 module 3 slide 51.",
  },
  {
    numb: "601m3p49",
    question:
      "What is a framework?",
    answer: "a basic structure underlying a system, concept, or text",
    options: [
      "a basic structure underlying a system, concept, or text",
      "a series of actions or steps taken in order to achieve a particular end",
      "weighing the finished product against the features, performance, and values promised at project start",
      "what is included and not included in any given project, giving clear boundaries and statement of work.",
    ],
    note: "Source: PROEA 601 module 3 slide 49.",
  },
  {
    numb: "601m3p53",
    question:
      "What is a framework?",
    answer: "a series of actions or steps taken in order to achieve a particular end",
    options: [
      "a basic structure underlying a system, concept, or text",
      "a series of actions or steps taken in order to achieve a particular end",
      "weighing the finished product against the features, performance, and values promised at project start",
      "what is included and not included in any given project, giving clear boundaries and statement of work.",
    ],
    note: "Source: PROEA 601 module 3 slide 53.",
  },
  {
    numb: "601m3p55",
    question:
      "Process groups must be completed in sequential order. One phase must be complete before the next one can start.",
    answer: "False",
    options: [
      "True",
      "False",
      "",
      "",
    ],
    note: "Source: PROEA 601 module 3 slide 55.",
  },
  {
    numb: "601m3p56a",
    question:
      "What happens in the Execution process group.",
    answer: "complete the work as defined in the plan",
    options: [
      "define a new project or phase",
      "define the course of action to meet objectives of the project or phase",
      "complete the work as defined in the plan",
      "finalize all activities across all process groups",
    ],
    note: "Source: PROEA 601 module 3 slide 56.",
  },
  {
    numb: "601m3p56b",
    question:
      "What happens in the Monitoring & Controlling process group.",
    answer: "track progress and performance and make corrective actions if needed",
    options: [
      "define a new project or phase",
      "define the course of action to meet objectives of the project or phase",
      "track progress and performance and make corrective actions if needed",
      "finalize all activities across all process groups",
    ],
    note: "Source: PROEA 601 module 3 slide 56.",
  },
  {
    numb: "601m3p56c",
    question:
      "What happens in the Initiation process group.",
    answer: "define a new project or phase",
    options: [
      "define a new project or phase",
      "define the course of action to meet objectives of the project or phase",
      "track progress and performance and make corrective actions if needed",
      "finalize all activities across all process groups",
    ],
    note: "Source: PROEA 601 module 3 slide 56.",
  },
  {
    numb: "601m3p56d",
    question:
      "What happens in the Planning process group.",
    answer: "define the course of action to meet objectives of the project or phase",
    options: [
      "define a new project or phase",
      "define the course of action to meet objectives of the project or phase",
      "track progress and performance and make corrective actions if needed",
      "finalize all activities across all process groups",
    ],
    note: "Source: PROEA 601 module 3 slide 56.",
  },
  {
    numb: "601m3p58a",
    question:
      "What is involved in the Integration Management knowledge area?",
    answer: "coordination and cooperation",
    options: [
      "developing a realistic timeline",
      "identiy resources that will be needed outside of the project team",
      "identifying, developing, and managing the human element",
      "coordination and cooperation",
    ],
    note: "Source: PROEA 601 module 3 slide 58.",
  },
  {
    numb: "601m3p58b",
    question:
      "What is involved in the Scope Management knowledge area?",
    answer: "defines what is included and not included",
    options: [
      "defines what is included and not included",
      "identiy resources that will be needed outside of the project team",
      "identifying, developing, and managing the human element",
      "coordination and cooperation",
    ],
    note: "Source: PROEA 601 module 3 slide 58.",
  },
  {
    numb: "601m3p58c",
    question:
      "What is involved in the Schedule/Time Management knowledge area?",
    answer: "developing a realistic timeline",
    options: [
      "defines what is included and not included",
      "identiy resources that will be needed outside of the project team",
      "developing a realistic timeline",
      "coordination and cooperation",
    ],
    note: "Source: PROEA 601 module 3 slide 58.",
  },
  {
    numb: "601m3p59a",
    question:
      "What is involved in the Cost Management knowledge area?",
    answer: "establishing a budget and estimating costs",
    options: [
      "establishing a budget and estimating costs",
      "identiy resources that will be needed outside of the project team",
      "developing a realistic timeline",
      "coordination and cooperation",
    ],
    note: "Source: PROEA 601 module 3 slide 59.",
  },
  
  {
    numb: "601m3p59b",
    question:
      "What is involved in the Quality Management knowledge area?",
    answer: "weighing the finished product against the features, performance, and values promised at project start",
    options: [
      "establishing a budget and estimating costs",
      "identiy resources that will be needed outside of the project team",
      "developing a realistic timeline",
      "weighing the finished product against the features, performance, and values promised at project start",
    ],
    note: "Source: PROEA 601 module 3 slide 59.",
  },
  
  {
    numb: "601m3p59c",
    question:
      "What is involved in the Resource Management knowledge area?",
    answer: "identifying, developing, and managing the human element of the project",
    options: [
      "establishing a budget and estimating costs",
      "identiy resources that will be needed outside of the project team",
      "identifying, developing, and managing the human element of the project",
      "weighing the finished product against the features, performance, and values promised at project start",
    ],
    note: "Source: PROEA 601 module 3 slide 59.",
  },
  
  {
    numb: "601m3p60a",
    question:
      "What is involved in the Communication Management knowledge area?",
    answer: "manage communications internally and externally",
    options: [
      "establishing a budget and estimating costs",
      "identiy resources that will be needed outside of the project team",
      "manage communications internally and externally",
      "weighing the finished product against the features, performance, and values promised at project start",
    ],
    note: "Source: PROEA 601 module 3 slide 60.",
  },
  
  {
    numb: "601m3p60b",
    question:
      "What is involved in the Risk Management knowledge area?",
    answer: "identify threats and opportunities and plan responses",
    options: [
      "identify threats and opportunities and plan responses",
      "identiy resources that will be needed outside of the project team",
      "manage communications internally and externally",
      "weighing the finished product against the features, performance, and values promised at project start",
    ],
    note: "Source: PROEA 601 module 3 slide 60.",
  },
  
  {
    numb: "601m3p60c",
    question:
      "What is involved in the Procurement Management knowledge area?",
    answer: "identiy resources that will be needed outside of the project team",
    options: [
      "identify threats and opportunities and plan responses",
      "identiy resources that will be needed outside of the project team",
      "manage communications internally and externally",
      "weighing the finished product against the features, performance, and values promised at project start",
    ],
    note: "Source: PROEA 601 module 3 slide 60.",
  },
  
  {
    numb: "601m3p61",
    question:
      "What is involved in the Stakeholder Management knowledge area?",
    answer: "understand who can influence the project and who has authority to allocate resources",
    options: [
      "identify threats and opportunities and plan responses",
      "identiy resources that will be needed outside of the project team",
      "manage communications internally and externally",
      "understand who can influence the project and who has authority to allocate resources",
    ],
    note: "Source: PROEA 601 module 3 slide 61.",
  },
  
  {
    numb: "601m3p62",
    question:
      "What pre-project work is done before any of the process groups?",
    answer: "needs assessment, business case",
    options: [
      "objectives, quality deliverables, performance",
      "scope & budget, work breakdown structure (WBS), communication plan",
      "needs assessment, business case",
      "project charter, identify stakeholders",
    ],
    note: "Source: PROEA 601 module 3 slide 61.",
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
