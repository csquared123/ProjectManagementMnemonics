// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: "601m1p5",
    question: "What does PMI stand for?",
    answer: "Project Management Institute",
    options: [
      "Preparation, Mastry, and Instruction",
      "Project Management Institute",
      "Progressive Management Industry",
      "Project Maintenance Instructions"
    ],
    note: "Source: PROEA 601 module 1 slide 5."
  },
    {
    numb: "601m1p5a",
    question: "What does CAPM stand for?",
    answer: "Certified Associate of Project Management",
    options: [
      "Constructive Actions of Project Management",
      "Certified Areas of Project Management",
      "Concentrated Actions of Project Maintenance",
      "Certified Associate of Project Management"
    ],
    note: "Source: PROEA 601 module 1 slide 5."
  },
    {
    numb: "601m1p5b",
    question: "What does PMP stand for?",
    answer: "Project Management Professional",
    options: [
      "Project Management Professional",
      "Principles of Managing Projects",
      "Project Maintenance Process",
      "Practice Makes Perfect"
    ],
    note: "Source: PROEA 601 module 1 slide 5."
  },
    {
    numb: "601m1p7a",
    question: "How many years of experience do you need to take the CAPM exam?",
    answer: "Completed instruction hours only",
    options: [
      "1",
      "2",
      "3",
      "Completed instruction hours only"
    ],
    note: "Source: PROEA 601 module 1 slide 7."
  },
    {
    numb: "601m1p7b",
    question: "How many years of experience do you need to take the PMP exam?",
    answer: "3",
    options: [
        "1",
        "2",
        "3",
        "Completed instruction hours only"
    ],
    note: "Source: PROEA 601 module 1 slide 7."
  },
  {
  numb: "601m2p16",
  question: "What is the median salary increase for those with a PMP certificiation?",
  answer: "25%",
  options: [
    "0",
    "10%",
    "25%",
    "45%"
  ],
  note: "Source: PROEA 601 module 2 slide 16."
},
{
numb: "601m2p20",
question: "What values are part of the PMI Code of Ethics?",
answer: "honesty, responsibility, respect, fairness",
options: [
  "balance between scope, schedule, and budget",
  "achieve a high return on investment (ROI)",
  "PMI does not have a Code of Ethics",
  "honesty, responsibility, respect, fairness"
],
note: "Source: PROEA 601 module 2 slide 20."
},
{
numb: "601m2p24",
question: "What is the definition of a project?",
answer: "a temporary endeavor with a beginning and an end and it must be used to create a unique product, service or result",
options: [
  "a temporary endeavor with a beginning and an end and it must be used to create a unique product, service or result",
  "business as usual which is part of normal business operations",
  "performing an instantaneous response to an unanticipated event",
  "something that doesn’t have purpose or an objective"
],
note: "Source: PROEA 601 module 2 slide 24."
},
{
numb: "601m2p26a",
question: "According to PMI, what is a Portfolio?",
answer: "A collection of programs or projects that are grouped to achieve an organization’s strategic business objectives. (Investment)",
options: [
  "A collection of programs or projects that are grouped to achieve an organization’s strategic business objectives. (Investment)",
  "A group of related projects that have a common objective.",
  "A set of activities to meet the projects objectives.",
  "That is not something project managers need to understand."
],
note: "Source: PROEA 601 module 2 slide 26."
},
{
numb: "601m2p26b",
question: "According to PMI, what is a Project?",
answer: "A set of activities to meet the projects objectives.",
options: [
  "A collection of programs or projects that are grouped to achieve an organization’s strategic business objectives. (Investment)",
  "A group of related projects that have a common objective.",
  "A set of activities to meet the projects objectives.",
  "That is not something project managers need to understand."
],
note: "Source: PROEA 601 module 2 slide 26."
},
{
numb: "601m2p26c",
question: "According to PMI, what is a Program?",
answer: "A group of related projects that have a common objective.",
options: [
  "A collection of programs or projects that are grouped to achieve an organization’s strategic business objectives. (Investment)",
  "A group of related projects that have a common objective.",
  "A set of activities to meet the projects objectives.",
  "That is not something project managers need to understand."
],
note: "Source: PROEA 601 module 2 slide 26."
},
{
numb: "601m2p27",
question: "According to PMI, what is Project Management?",
answer: "the discipline of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria.",
options: [
  "A collection of programs or projects that are grouped to achieve an organization’s strategic business objectives. (Investment)",
  "A group of related projects that have a common objective.",
  "A set of activities to meet the projects objectives.",
  "the discipline of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria."
],
note: "Source: PROEA 601 module 2 slide 27."
},
{
numb: "601m2p28",
question: "In the context of Project Management, what does PMO stand for?",
answer: "Project Management Office",
options: [
  "Prime Market Orientation",
  "Promises Mean Obligations",
  "Professional Maintenance Organization",
  "Project Management Office"
],
note: "Source: PROEA 601 module 2 slide 28."
},
{
numb: "601m2p29a",
question: "Which type of organizational structure is grouped by job type?",
answer: "Functional",
options: [
  "Functional",
  "Projectized",
  "Matrix",
  "Composite"
],
note: "Source: PROEA 601 module 2 slide 29."
},
{
numb: "601m2p29b",
question: "Which type of organizational structure is has employees report to multiple leaders?",
answer: "Matrix",
options: [
  "Functional",
  "Projectized",
  "Matrix",
  "Composite"
],
note: "Source: PROEA 601 module 2 slide 29."
},
{
numb: "601m2p33",
question: "What are some of the responsibilities of a Project Manager?",
answer: "All of the above.",
options: [
  "Apply project management technical knowledge.",
  "Apply knowledge of the application area to manage technical challenges.",
  "Apply general management skills to successfully manage and control process   responsibilities",
  "All of the above."
],
note: "Source: PROEA 601 module 2 slide 33."
},
{
numb: "601m2p36",
question: "What is the responsibility of a Project Sponsor?",
answer: "Responsible for the overall success of the project including ensuring the business case is valid, maintaining appropriate organizational priority, and proper control mechanisms are set.",
options: [
  "Apply knowledge of the project environment to assess the impact of the project on the organization.",
  "Apply interpersonal skills to successfully manage responsibilities of the resources.",
  "Apply general management skills to successfully manage and control process responsibilities",
  "Responsible for the overall success of the project including ensuring the business case is valid, maintaining appropriate organizational priority, and proper control mechanisms are set."
],
note: "Source: PROEA 601 module 2 slide 36."
},
{
numb: "601m2p37a",
question: "Who is responsible for the day-to-day management of the project?",
answer: "Project Manager",
options: [
  "Project Manager",
  "Project Sponsor",
  "Project Team",
  "Project Management Office"
],
note: "Source: PROEA 601 module 2 slide 37."
},
{
numb: "601m2p37b",
question: "Who is responsible for approving projects and determining scope and budget?",
answer: "Project Sponsor",
options: [
  "Project Manager",
  "Project Sponsor",
  "Project Team",
  "Project Management Office"
],
note: "Source: PROEA 601 module 2 slide 37."
},
{
numb: "601m2p38",
question: "Who is responsible for executing tasks and producing deliverables of a project?",
answer: "Project Team",
options: [
  "Project Manager",
  "Project Sponsor",
  "Project Team",
  "Project Management Office"
],
note: "Source: PROEA 601 module 2 slide 38."
},
{
numb: "601m2p41a",
question: "Which leadership style is concerned with managing risks, planning work, and assuring quality?",
answer: "Proactive task management",
options: [
  "Proactive task management",
  "Proactive people management",
  "Reactive task management",
  "Reactive people management"
],
note: "Source: PROEA 601 module 2 slide 41."
},
{
    numb: "601m2p41b",
    question: "Which leadership style is concerned with managing people-related issues and interpersonal conflict?",
    answer: "Reactive people management",
    options: [
      "Proactive task management",
      "Proactive people management",
      "Reactive task management",
      "Reactive people management"
    ],
    note: "Source: PROEA 601 module 2 slide 41."
    },
    {
    numb: "601m2p41c",
    question: "Which leadership style is concerned with resolving urgent issues and handling defects?",
    answer: "Reactive task management",
    options: [
      "Proactive task management",
      "Proactive people management",
      "Reactive task management",
      "Reactive people management"
    ],
    note: "Source: PROEA 601 module 2 slide 41."
    },
    {
    numb: "601m2p41d",
    question: "Which leadership style is concerned with building relationships, team empowerment, and providing vision and direction?",
    answer: "Proactive people management",
    options: [
      "Proactive task management",
      "Proactive people management",
      "Reactive task management",
      "Reactive people management"
    ],
    note: "Source: PROEA 601 module 2 slide 41."
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