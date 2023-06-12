// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: "601const1",
    question:
      "What is the classic triple constraint?",
    answer: "scope, time, cost",
    options: [
      "stakeholders, communication, engagement",
      "risk, quality, resources",
      "capability, value, scope",
      "scope, time, cost",
    ],
    note: "Source: https://www.pmi.org/learning/library/triple-constraint-erroneous-useless-value-8024",
  },
  {
    numb: "601const2",
    question:
      "What is the ehanced six constraint model?",
    answer: "cost, risk, benefit, quality, scope, time",
    options: [
      "risk, quality, resources, capability, value, scope",
      "cost, risk, benefit, quality, scope, time",
      "initiating, planning, executing, monitoring, controlling, closing",
      "scope, schedule, cost, quality, resource, communication",
    ],
    note: "Source: https://www.pmi.org/learning/library/six-constraints-enhanced-model-project-control-7294.",
  },
  {
    numb: "601m6p97",
    question:
      "What is progressive elaboration?",
    answer: "The project plan is continuously updated as new information is available.",
    options: [
      "Begin with the end in mind.",
      "The project plan is continuously updated as new information is available.",
      "Itemized definition of the outcome of the project",
      "Derived from information provided by stakeholders",
    ],
    note: "Source: PROEA 601 module 6 slide 97.",
  },
  {
    numb: "601m6p100",
    question:
      "What should be included in a communication plan?",
    answer: "Answer who, what, why, when, where/how",
    options: [
      "Answer who, what, why, when, where/how",
      "focus mostly on the CEO",
      "that is the responsibility of the project sponsor",
      "that is not part of project planning",
    ],
    note: "Source: PROEA 601 module 6 slide 100.",
  },
  {
    numb: "601m6p101",
    question:
      "What should be included in a communication plan?",
    answer: "identify audience, message type, delivery method, schedule, messaging source",
    options: [
      "that is the responsibility of the project sponsor",
      "focus mostly on the CEO",
      "identify audience, message type, delivery method, schedule, messaging source",
      "that is not part of project planning",
    ],
    note: "Source: PROEA 601 module 6 slide 101.",
  },
  {
    numb: "601m6p102",
    question:
      "What are some important considerations when communicating with stakeholders?",
    answer: "Understand individual stakeholder key interests, preferred communication method, and appropriate communication frequency.",
    options: [
      "None. Communicate with everyone the same way.",
      "Provide everyone the same information at the same time.",
      "Focus on the most important stakeholder.",
      "Understand individual stakeholder key interests, preferred communication method, and appropriate communication frequency.",
    ],
    note: "Source: PROEA 601 module 6 slide 102.",
  },
  {
    numb: "601m6p107a",
    question: "In terms of project scope, what does SOW mean?",
    answer: "scope of work",
    options: [
      "scope of work",
      "submit overall workflow",
      "switch over to work schedule",
      "schedule only weekdays",
    ],
    note: "Source: PROEA 601 module 6 slide 107.",
  },
  {
    numb: "601m6p107b",
    question: "Who determines project scope?",
    answer: "stakeholders",
    options: [
      "project manager",
      "stakeholders",
      "company CEO",
      "scope does not need to be determined",
    ],
    note: "Source: PROEA 601 module 6 slide 107.",
  },
  {
    numb: "601m6p108",
    question: "The scope of work should be as clear as possible.",
    answer: "True",
    options: [
      "True",
      "False",
      "",
      "",
    ],
    note: "Source: PROEA 601 module 6 slide 108.",
  },
  {
    numb: "601m6p109",
    question: "What is true about requirements.",
    answer: "Requirements are a group of tasks or conditions that must be completed to finish the project successfully and can include product features, quality, services or even processes.",
    options: [
      "Requirements are a group of tasks or conditions that must be completed to finish the project successfully and can include product features, quality, services or even processes.",
      "Requirements are only associated with software development.",
      "Defining requirements is optional.",
      "Only the CEO should review and approve requirements.",
    ],
    note: "Source: PROEA 601 module 6 slide 109.",
  },
  {
    numb: "601m6p110",
    question: "What is the difference between SOW and requirements.",
    answer: "SOW outlines the effort reqired for deliverables, while requirements are contiditons that must be present in a product, service, or result.",
    options: [
      "None. SOW and reqirements are synonyms.",
      "They both outline the effort required.",
      "SOW outlines the effort reqired for deliverables, while requirements are contiditons that must be present in a product, service, or result.",
      "Requirements outline the effort required for deliverables, while SOW are conditions that must be present in a product, service, or result.",
    ],
    note: "Source: PROEA 601 module 6 slide 110.",
  },
  {
    numb: "601m6p111",
    question: "What is scope creep?",
    answer: "The uncontrolled expansion of project scope without adjustments to time, cost, and resources.",
    options: [
      "Any change in product requirements.",
      "Changes in product requirements with corresponding changes in time, cost, and resources.",
      "Changing due dates due to weekends and holidays.",
      "The uncontrolled expansion of project scope without adjustments to time, cost, and resources.",
    ],
    note: "Source: PROEA 601 module 6 slide 111.",
  },
  {
    numb: "601m6p113",
    question: "In the context of project management, what is gold plating?",
    answer: "Addition of features for increasing perceived value that weren't requested by the customer.",
    options: [
      "Any change in product requirements.",
      "Addition of features for increasing perceived value that weren't requested by the customer.",
      "Delivering requirements ahead of schedule.",
      "The uncontrolled expansion of project scope without adjustments to time, cost, and resources.",
    ],
    note: "Source: PROEA 601 module 6 slide 113.",
  },
  {
    numb: "601m6p114",
    question: "What are project assumptions?",
    answer: "Any factor relating to a project that is considered to be true, real, or certain without proof.",
    options: [
      "Any factor relating to a project that is considered to be true, real, or certain without proof.",
      "Addition of features for increasing perceived value that weren't requested by the customer.",
      "Delivering requirements ahead of schedule.",
      "The uncontrolled expansion of project scope without adjustments to time, cost, and resources.",
    ],
    note: "Source: PROEA 601 module 6 slide 113.",
  },
  {
    numb: "601m6p114",
    question: "What are project constraints?",
    answer: "General limitations that you need to account for during the project lifecycle.",
    options: [
      "Any factor relating to a project that is considered to be true, real, or certain without proof.",
      "Addition of features for increasing perceived value that weren't requested by the customer.",
      "General limitations that you need to account for during the project lifecycle.",
      "The uncontrolled expansion of project scope without adjustments to time, cost, and resources.",
    ],
    note: "Source: PROEA 601 module 6 slide 113.",
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
