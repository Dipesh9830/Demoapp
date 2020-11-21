const Question = require('../models/questions');
const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("D");

exports.getUsers = (req, res, next) => {
    users.fetchAll()
      .then(([rows, fieldData]) => {
        res.render('/', {
          prods: rows,
          pageTitle: 'All Questions',
          path: '/questions'
        });
      })
      .catch(err => console.log(err));
  };

let questions = [
  {
  question1 : "Reason for starting a company:",
  choiceA : "Had a great idea",
  choiceB :"Targeting a problem that needs solving",
  choiceC   : "Need a change from current position",
  choiceD   : "Want to make money",
  },
  {
  question2: "What is your industry",
  choiceA:"Mobile",
 choiceB:"Telecom",
 choiceC:"Semiconductors",
 choiceD :"Wearables"
  },{
  question3: "What is your experience in this industry:",
  choiceA:"No experience",
  choiceB:"Some experience (< 5 years)",
  choiceC:"Semiconductors",
  choiceD :"Wearables",
  },
  {
    question4: "Tell us about your product:",
    choiceA:"B2B",
   choiceB:"B2C",
   choiceC:"Government",
   choiceD :"Non-profit",
  },
  {
    question5: "What is your exit strategy:",
    choiceA:"Build to sell",
   choiceB:"Take public",
   choiceC:"Build a long term corporation",
   choiceD :"Have not thought about it yet",
  },
  {
    question6: "If your product has been released, what traction do you have:",
    choiceA:"Only have beta testers",
    choiceB:"Too soon to tell",
    choiceC:"Limited traction",
    choiceD :"Meeting expectations/projections",
  },
    
]
  