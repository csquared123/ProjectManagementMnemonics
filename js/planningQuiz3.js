// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: "602m3p60a",
    question:
      "Expenses of doing business not readily linked with a specific function, but are necessary for general operation of the organization.",
    answer: "indirect costs",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 60.",
  },
  {
    numb: "602m3p61a",
    question:
      "Estimating used during the conceptual phase. Rough estimates.",
    answer: "top-down estimating",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 61.",
  },
  {
    numb: "602m3p60b",
    question:
      "Expenses readily linked with a specific function or project.",
    answer: "direct costs",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 60.",
  },
  {
    numb: "602m3p61b",
    question:
      "Estimating used for budgeting, scheduling, and resource requirements.",
    answer: "bottom-up estimating",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 61.",
  },
  {
    numb: "602m3p61c",
    question:
      "Estimating that is cheaper (0.1% to 0.2% total project cost) to do and less accurate (-20% to +60%).",
    answer: "top-down estimating",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 61.",
  },
  {
    numb: "602m3p61d",
    question:
      "Estimating that is more expensive (0.3% to 1.0% total project cost) to do and more accurate (-10% to +0%).",
    answer: "bottom-up estimating",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 61.",
  },
  {
    numb: "602m3p61e",
    question:
      "Estimating methods: one-point, analagous, parametric, heuristics, 3-point (PERT), reserve analysis",
    answer: "top-down estimating",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 61.",
  },
  {
    numb: "602m3p61e",
    question:
      "Estimating methods: use WBS, parametric",
    answer: "bottom-up estimating",
    options: [
      "direct costs",
      "indirect costs",
      "top-down estimating",
      "bottom-up estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 61.",
  },
  {
    numb: "602m3p63a",
    question:
      "rule of thumb, 80/20 rule",
    answer: "heuristics estimating",
    options: [
      "one-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 63.",
  },
  {
    numb: "602m3p62a",
    question:
      "one estimate per activity, based on expert judgement, hides uncertainty",
    answer: "one-point estimate",
    options: [
      "one-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 62.",
  },
  {
    numb: "602m3p62b",
    question:
      "done at activity or project level, expert judgement or historical information",
    answer: "analagous estimating",
    options: [
      "one-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 62.",
  },
  {
    numb: "602m3p63b",
    question:
      "uses statistical relationship between historical data and other variables",
    answer: "parametric estimating",
    options: [
      "three-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 63.",
  },
  {
    numb: "602m3p64a",
    question:
      "Program Evaluation Review Technique (PERT)",
    answer: "three-point estimate",
    options: [
      "three-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 64.",
  },
  {
    numb: "602m3p64b",
    question:
      "Estimators provide optimistic (O), pessimistic (P), and most likely (M) completion dates",
    answer: "three-point estimate",
    options: [
      "three-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 64.",
  },
  {
    numb: "602m3p64c",
    question:
      "Beta Distribution = (O+4M+P)/6, weighted avarage (more accurate)",
    answer: "three-point estimate",
    options: [
      "three-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 64.",
  },
  {
    numb: "602m3p64d",
    question:
      "Triangular Distribution = (O+M+P)/3, simple avarage (less accurate)",
    answer: "three-point estimate",
    options: [
      "three-point estimate",
      "analagous estimating",
      "parametric estimating",
      "heuristics estimating",
    ],
    note: "Source: PROEA 602 module 3 slide 64.",
  },
  {
    numb: "602m3p65a",
    question:
      "Reserve funds to accommodate project risk: part of performance measurement baseline, PM has full authority, funds allocated at activity level, reserves are calculated",
    answer: "contingency reserve",
    options: [
      "contingency reserve",
      "management reserve",
      "cone of uncertainty",
      "heuristic uncertainty",
    ],
    note: "Source: PROEA 602 module 3 slide 65.",
  },
  {
    numb: "602m3p65b",
    question:
      "Reserve funds to accommodate project risk: NOT part of performance measurement baseline, PM has NO authority, funds allocated at project level, reserves are fixed according or organizational norms",
    answer: "management reserve",
    options: [
      "contingency reserve",
      "management reserve",
      "cone of uncertainty",
      "heuristic uncertainty",
    ],
    note: "Source: PROEA 602 module 3 slide 65.",
  },
  {
    numb: "602m3p65c",
    question:
      "Reserve funds to accommodate project risk: for managing known-unknowns",
    answer: "contingency reserve",
    options: [
      "contingency reserve",
      "management reserve",
      "cone of uncertainty",
      "heuristic uncertainty",
    ],
    note: "Source: PROEA 602 module 3 slide 65.",
  },
  {
    numb: "602m3p66",
    question:
      "As a project progresses and scope becomes better defined, uncertainty diminishes",
    answer: "cone of uncertainty",
    options: [
      "contingency reserve",
      "management reserve",
      "cone of uncertainty",
      "heuristic uncertainty",
    ],
    note: "Source: PROEA 602 module 3 slide 66.",
  },
  {
    numb: "602m3p71",
    question:
      "What is involved in resource management?",
    answer: "All of these",
    options: [
      "planning people, money, and technology for a project",
      "scheduling people, money, and technology for a project",
      "allocating people, money, and technology for a project",
      "All of these",
    ],
    note: "Source: PROEA 602 module 3 slide 71.",
  },
  {
    numb: "602m3p72",
    question:
      "What is involved in resource management?",
    answer: "All of these",
    options: [
      "focus on resources in short supply",
      "apply assignment types that align to your business needs",
      "keep your most valuable resources productive and happy",
      "All of these",
    ],
    note: "Source: PROEA 602 module 3 slide 72.",
  },
  {
    numb: "602m3p78",
    question:
      "What is the correct order for phases in the Procurement Lifecycle?",
    answer: "Initiate/Plan (RFI and RFP), Select, Contract (negotiate), Monitor (reports, invoicing), Close (final payments, budget reconcilliation)",
    options: [
      "Close (final payments, budget reconcilliation), Initiate/Plan (RFI and RFP), Contract (negotiate), Select, Monitor (reports, invoicing)",
      "Initiate/Plan (RFI and RFP), Select, Contract (negotiate), Monitor (reports, invoicing), Close (final payments, budget reconcilliation)",
      "Initiate/Plan (RFI and RFP), Contract (negotiate), Select, Monitor (reports, invoicing), Close (final payments, budget reconcilliation)",
      "Initiate/Plan (RFI and RFP), Monitor (reports, invoicing), Contract (negotiate), Select, Close (final payments, budget reconcilliation)",
    ],
    note: "Source: PROEA 602 module 3 slide 78.",
  },
  {
    numb: "602m3p79a",
    question:
      "Seller receives a refund of the expenses incurred while providing a service or product, plus a fee representing seller profit.",
    answer: "cost-reimbursable",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p79b",
    question:
      "Seller agrees to perform the work at the negotiated contract value. aka lump-sum contract.",
    answer: "fixed-price",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p79c",
    question:
      "Buyer pays the seller a pre-negotiated hourly rate and full reimbursement for materials.",
    answer: "time and material (T&M)",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p79d",
    question:
      "FFP, FP-EPA, FPIF",
    answer: "fixed-price",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p79e",
    question:
      "CPFF, CPPC, CPAF",
    answer: "cost-reimbursable",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p79f",
    question:
      "Buyer's risk is high and the seller's risk is low.",
    answer: "cost-reimbursable",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p79g",
    question:
      "Buyer's risk is low and the seller's risk is high.",
    answer: "fixed-price",
    options: [
      "fixed-price",
      "cost-reimbursable",
      "time and material (T&M)",
      "net 30",
    ],
    note: "Source: PROEA 602 module 3 slide 79.",
  },
  {
    numb: "602m3p85a",
    question:
      "Testing the finished product. (random sampling, traceability, user acceptance testing)",
    answer: "quality control",
    options: [
      "quality assurance",
      "quality control",
      "quality",
      "grade",
    ],
    note: "Source: PROEA 602 module 3 slide 85.",
  },
  {
    numb: "602m3p85b",
    question:
      "Tools and processes in place to ensure a product is defect free. (equipment, training, process documentation)",
    answer: "quality assurance",
    options: [
      "quality assurance",
      "quality control",
      "quality",
      "grade",
    ],
    note: "Source: PROEA 602 module 3 slide 85.",
  },
  {
    numb: "602m3p86a",
    question:
      "The degree to which a set of inherent characteristics fulfill requirements.",
    answer: "quality",
    options: [
      "quality assurance",
      "quality control",
      "quality",
      "grade",
    ],
    note: "Source: PROEA 602 module 3 slide 86.",
  },
  {
    numb: "602m3p86b",
    question:
      "A category assigned to products having the same functional use, but different technical characteristics.",
    answer: "grade",
    options: [
      "quality assurance",
      "quality control",
      "quality",
      "grade",
    ],
    note: "Source: PROEA 602 module 3 slide 86.",
  },
  {
    numb: "602m3p91",
    question:
      "An uncertain event that may have a positive or negative effect on a project.",
    answer: "risk",
    options: [
      "risk",
      "risk register",
      "risk management process",
      "risk response",
    ],
    note: "Source: PROEA 602 module 3 slide 91.",
  },
  {
    numb: "602m3p92",
    question:
      "Identify risks, analyze and measure impact, decide which risks are unacceptable, mitigate or transfer unacceptable risks, contingency planning for risks that can't be managed, monitor and regularly review.",
    answer: "risk management process",
    options: [
      "risk",
      "risk register",
      "risk management process",
      "risk response",
    ],
    note: "Source: PROEA 602 module 3 slide 92.",
  },
  {
    numb: "602m3p96",
    question:
      "Use a probability (%) estimate and an impact ($) estimate and multiply them together to estimate a reserve for the risk.",
    answer: "risk quantitative analysis",
    options: [
      "risk qualitative analysis",
      "risk quantitative analysis",
      "risk register",
      "risk response",
    ],
    note: "Source: PROEA 602 module 3 slide 96.",
  },
  {
    numb: "602m3p95",
    question:
      "Rate likelihood (high, medium, low) and impact (low, medium, high) on a probability/impact ranking matrix.",
    answer: "risk qualitative analysis",
    options: [
      "risk qualitative analysis",
      "risk quantitative analysis",
      "risk register",
      "risk response",
    ],
    note: "Source: PROEA 602 module 3 slide 95.",
  },
  {
    numb: "602m3p97a",
    question:
      "Risk response: contractually transfer the loss exposure to a third party.",
    answer: "transfer",
    options: [
      "avoidance",
      "mitigation",
      "transfer",
      "acceptance",
    ],
    note: "Source: PROEA 602 module 3 slide 97.",
  },
  {
    numb: "602m3p97b",
    question:
      "Risk response: eliminate the cause.",
    answer: "avoidance",
    options: [
      "avoidance",
      "mitigation",
      "transfer",
      "acceptance",
    ],
    note: "Source: PROEA 602 module 3 slide 97.",
  },
  {
    numb: "602m3p97c",
    question:
      "Risk response: retain the risk and develop plans to cover the financial consequences.",
    answer: "acceptance",
    options: [
      "avoidance",
      "mitigation",
      "transfer",
      "acceptance",
    ],
    note: "Source: PROEA 602 module 3 slide 97.",
  },
  {
    numb: "602m3p97d",
    question:
      "Risk response: Reduce the impact and probability to an acceptable level.",
    answer: "mitigation",
    options: [
      "avoidance",
      "mitigation",
      "transfer",
      "acceptance",
    ],
    note: "Source: PROEA 602 module 3 slide 97.",
  },
  {
    numb: "602m3p98",
    question:
      "Sheet used to log risks, responsible parties, potential impacts, and mitigation strategies.",
    answer: "risk register",
    options: [
      "risk qualitative analysis",
      "risk quantitative analysis",
      "risk register",
      "risk response",
    ],
    note: "Source: PROEA 602 module 3 slide 98.",
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
