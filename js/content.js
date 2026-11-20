const guides = [
  {
    id: 'budgeting', number: '01', title: 'Budgeting basics', readTime: '5 min read',
    summary: 'Give your money a plan before the week starts.',
    kicker: 'Know where it goes',
    intro: 'A budget is not a punishment. It is a simple way to decide what your money needs to do before you spend it.',
    sections: [
      { heading: 'Start with what comes in', text: 'Write down the money you expect to receive this week or month. For a student, this might be upkeep, a part-time job, or another regular source. Use the amount you can reasonably count on, not money you hope to receive.' },
      { heading: 'Separate needs from wants', text: 'Needs are expenses you must cover, such as transport to lectures, meals, data needed for coursework, and essential supplies. Wants can still matter, but they are easier to adjust. Look at your last few days of spending: small purchases can add up quickly.' },
      { heading: 'Make room for saving', text: 'Choose an amount to put aside before you start spending, even if it is small. Then divide what remains among your categories. A useful budget reflects your real situation, not someone else’s percentages.' },
      { heading: 'Check and adjust', text: 'At the end of each week, compare your plan with what happened. If transport cost more than expected, change the next budget. The goal is not to get every number right immediately; it is to learn from your spending.' }
    ],
    takeaway: 'Try it today: list three necessary expenses and one expense you could reduce this week.',
    questions: [
      { question: 'What should you use as the starting point for your budget?', choices: ['Money you hope to receive', 'Money you can reasonably expect', 'Your friend’s allowance'], answer: 1, why: 'A useful budget starts with dependable income rather than hoped-for money.' },
      { question: 'Which is most likely a need for attending lectures?', choices: ['Transport to campus', 'An extra streaming subscription', 'An unplanned shopping trip'], answer: 0, why: 'Getting to lectures is an essential expense for many students.' },
      { question: 'What should you do if your actual spending differs from your plan?', choices: ['Stop budgeting', 'Hide the difference', 'Review and adjust the next budget'], answer: 2, why: 'Regular review makes your budget more realistic over time.' }
    ]
  },
  {
    id: 'saving', number: '02', title: 'Saving & investing', readTime: '5 min read',
    summary: 'Start small, ask questions, and understand the risk.',
    kicker: 'Build a little breathing room',
    intro: 'Saving and investing both involve setting money aside, but they serve different purposes. Knowing the difference helps you make safer choices.',
    sections: [
      { heading: 'Save for short-term needs', text: 'Savings are useful for planned purchases and unexpected costs. You might save for textbooks, an emergency journey, or replacing a damaged charger. Keep money for urgent needs somewhere you can access it when required.' },
      { heading: 'Create a repeatable habit', text: 'You do not need a large amount to begin. Pick a realistic amount and a schedule, such as a small sum every week. A habit that you can maintain is more valuable than a dramatic plan that lasts only a few days.' },
      { heading: 'Understand investing', text: 'Investing means putting money into something with the hope of earning a return. Returns are not guaranteed. Investment values can fall, and some products may lock your money away for a period. Never invest money you need immediately for food, fees, or transport.' },
      { heading: 'Check before you commit', text: 'Ask who runs the product, what fees apply, how you can withdraw, and what could cause you to lose money. Be cautious with promises of unusually high or guaranteed returns. Look for information from an appropriate regulated institution before deciding.' }
    ],
    takeaway: 'Try it today: choose one small savings goal and decide when you will review your progress.',
    questions: [
      { question: 'Which money should generally remain easy to access?', choices: ['Emergency savings', 'Money you can afford to lose', 'A long-term speculative investment'], answer: 0, why: 'Emergency savings are most useful when you can reach them quickly.' },
      { question: 'Which claim is a warning sign?', choices: ['Returns can change', 'Guaranteed huge profits with no risk', 'Fees are explained clearly'], answer: 1, why: 'Very high guaranteed returns with no risk are a serious warning sign.' },
      { question: 'What is a sensible first step for saving?', choices: ['Borrow to save', 'Wait until you are wealthy', 'Set a small repeatable amount'], answer: 2, why: 'Consistency is often more practical than starting with an unrealistic amount.' }
    ]
  },
  {
    id: 'debt', number: '03', title: 'Loans & debt', readTime: '5 min read',
    summary: 'Know the full cost before you borrow.',
    kicker: 'Borrow with your eyes open',
    intro: 'A loan can help in some situations, but it creates an obligation to repay. Before accepting one, understand what you will owe and when.',
    sections: [
      { heading: 'Look beyond the amount received', text: 'The money you receive is not always the amount you repay. Interest, service charges, late fees, and other costs can increase the total. Ask for the full repayment amount in writing and read the terms before agreeing.' },
      { heading: 'Check the repayment date', text: 'A loan is more risky when the repayment date falls before you have dependable income. Think about fees, food, and transport that must still be paid. Never assume you will be able to borrow again to cover the first loan.' },
      { heading: 'Protect your personal information', text: 'Do not give a lender your PIN, one-time password, or access to your phone. Be wary of apps asking for unnecessary permissions or using threats to collect payments. Verify that a provider is legitimate using appropriate official sources.' },
      { heading: 'If repayment becomes difficult', text: 'Do not ignore the problem. Contact the lender early, ask for a written explanation of the balance, and discuss available arrangements. Keep records of communications and payments. Ask a trusted qualified adviser for help if necessary.' }
    ],
    takeaway: 'Try it today: before any borrowing decision, write down the amount received, total due, and repayment date.',
    questions: [
      { question: 'What matters most when comparing loans?', choices: ['Only the amount received', 'The total repayment amount and conditions', 'How quickly the advert appears'], answer: 1, why: 'Interest, fees, and timing affect the real cost of borrowing.' },
      { question: 'What should you never share with a lender?', choices: ['Your repayment questions', 'The loan amount', 'Your mobile money PIN or OTP'], answer: 2, why: 'PINs and one-time passwords should never be shared.' },
      { question: 'If you may miss a payment, what is a reasonable first step?', choices: ['Contact the lender early', 'Borrow secretly from another lender', 'Ignore all messages'], answer: 0, why: 'Early contact can help you understand legitimate options.' }
    ]
  },
  {
    id: 'goals', number: '04', title: 'Financial goals', readTime: '5 min read',
    summary: 'Turn “I should save” into something you can follow.',
    kicker: 'Make your next step clear',
    intro: 'A financial goal works best when you know exactly what you are working toward and can see your progress.',
    sections: [
      { heading: 'Name the goal', text: 'Instead of saying “I want to manage money better,” choose a clear target, such as saving for next semester’s study materials. Write down why the goal matters and how much it is expected to cost.' },
      { heading: 'Set a realistic date', text: 'A deadline helps you work backward. Divide the total target by the number of weeks left to find a possible weekly saving amount. If that amount is too high, lower the target, extend the date, or find another realistic approach.' },
      { heading: 'Balance different priorities', text: 'Students often have short-term goals, such as transport for next week, and longer-term goals, such as equipment for a course. Do not let a distant goal use money you need for essential spending today.' },
      { heading: 'Track progress without pressure', text: 'Check your progress regularly. Some weeks will be harder than others. If you fall behind, revise the amount or timeline rather than abandoning the goal. Small adjustments are part of good planning.' }
    ],
    takeaway: 'Try it today: write one goal with a target amount, deadline, and weekly action.',
    questions: [
      { question: 'Which goal is easiest to track?', choices: ['Spend better someday', 'Save UGX 60,000 for books in 6 weeks', 'Be rich soon'], answer: 1, why: 'A clear amount and deadline make progress measurable.' },
      { question: 'What if your weekly saving target is unrealistic?', choices: ['Revise the amount or deadline', 'Skip essential meals', 'Give up on all goals'], answer: 0, why: 'A goal should fit essential needs and real income.' },
      { question: 'What is a useful way to monitor a goal?', choices: ['Never check it', 'Compare yourself to everyone else', 'Review progress regularly'], answer: 2, why: 'Regular reviews show whether the plan needs adjusting.' }
    ]
  },
  {
    id: 'fraud', number: '05', title: 'Spot mobile money fraud', readTime: '6 min read',
    summary: 'Recognise pressure tactics before you send money.',
    kicker: 'Pause. Check. Protect.',
    intro: 'Mobile money is useful for daily student life, but fraudsters can imitate familiar services and create a false sense of urgency.',
    sections: [
      { heading: 'Watch for urgent requests', text: 'A scammer may claim that your account will be blocked, you have won a prize, or money was sent to you by mistake. They may pressure you to act immediately. Urgency is a reason to slow down, not speed up.' },
      { heading: 'Never reveal secret codes', text: 'Keep your mobile money PIN, passwords, and one-time passwords private. A caller or message asking for them is a serious warning sign, even if they claim to represent an operator, a bank, or a campus office.' },
      { heading: 'Verify through a separate channel', text: 'Do not rely on a number or link supplied in a suspicious message. Open your mobile money app independently or contact the provider through its verified official support channel. Check recipient details carefully before confirming any payment.' },
      { heading: 'What to do if something goes wrong', text: 'Stop communicating with the suspected scammer. Contact your mobile money provider immediately through an official channel to report the transaction and ask about available remedies. Save transaction references and screenshots, and report the incident to the relevant authorities where appropriate.' }
    ],
    takeaway: 'Try it today: tell a friend one red flag and one safe way to verify a payment request.',
    questions: [
      { question: 'A caller says your wallet will be blocked unless you share an OTP. What should you do?', choices: ['Share the OTP quickly', 'End the call and contact verified support', 'Send the OTP to a friend first'], answer: 1, why: 'Never share an OTP; verify claims through official support.' },
      { question: 'What is a common fraud warning sign?', choices: ['An unexplained urgent payment demand', 'A printed receipt', 'Checking the recipient name'], answer: 0, why: 'Pressure to act immediately is a common fraud tactic.' },
      { question: 'After a suspected fraudulent transfer, what should you do?', choices: ['Delete all evidence', 'Wait several weeks', 'Report promptly through official channels'], answer: 2, why: 'Prompt reporting and transaction records may support investigation.' }
    ]
  }
];

const dailyTips = [
  'Write down what you spend today, even the smallest amount.',
  'Before buying something extra, check whether your essentials are covered.',
  'Set a weekly transport allowance based on your actual trips.',
  'Treat your emergency savings as money for genuine surprises.',
  'Make a shopping list before heading to the market or shop.',
  'Compare prices when the same item is sold in different places.',
  'A budget can change when your circumstances change.',
  'Saving a small amount regularly is still progress.',
  'Avoid borrowing just to keep up with someone else’s lifestyle.',
  'Ask about the total repayment amount before agreeing to a loan.',
  'Check your mobile money recipient details before confirming.',
  'Never share your mobile money PIN with anyone.',
  'A promise of huge returns with no risk deserves extra scrutiny.',
  'Keep a little money aside for unexpected academic expenses.',
  'Look for subscriptions you no longer use.',
  'Plan data purchases around your actual coursework needs.',
  'Give a savings goal a name and a deadline.',
  'Separate money for school needs from money for entertainment.',
  'Review your spending at the end of each week.',
  'Ask for a written explanation of loan fees and charges.',
  'Do not click payment links in unexpected messages.',
  'Verify suspicious calls using an official support channel.',
  'Think about how long an investment locks up your money.',
  'Do not invest money needed for rent, food, or transport.',
  'Keep records of important transactions.',
  'If a purchase can wait, revisit it tomorrow.',
  'Put your savings goal somewhere you will see it.',
  'When income changes, adjust your budget before spending.',
  'Talk openly with a trusted person before making a big financial decision.',
  'Avoid using a new loan to hide difficulty paying an old one.',
  'Check for fees before transferring or withdrawing money.',
  'Record irregular expenses, such as printing and study materials.',
  'A financial goal should fit your real income.',
  'Take a moment to read the terms before accepting an offer.',
  'Know the difference between a need and a want without judging yourself.',
  'Save receipts or transaction messages for later reference.',
  'If a message creates panic, stop and verify it independently.',
  'Plan ahead for the weeks when your allowance may arrive late.',
  'Think about your budget before agreeing to a group contribution.',
  'Celebrate steady progress, not only big amounts.'
];
