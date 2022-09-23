//established objects within arrays, will depend on budget
const expendibleIncome = [
    {
        meal: "restaurant meal",
        entertainment: "video game",
        budget: "high",

    },
    {
        meal: "fast food meal",
        entertainment: "movie ticket",
        budget: "medium",

    },
    {
        meal: "homecooked meal",
        entertainment: "YouTube video",
        budget: "low",

    },
];


  

//The amount of expendible income I have will determine what I can afford.

const budget = function () {
    let value = (Math.random()*200);
    let budget = "";
    if (value <= 200 && value >= 100) {
        budget = "high"
    } else if (value<=99 && value >=50) {
        budget = "medium"
    } else {
        budget = "low"
    }
    return budget;
};
// formula will randomize value and provide "budget", which I can use in the next forumula
const budgetDecisions = function (budget) {

    let budgetDecisions = "";
    for (let budgetLevel = 0; budgetLevel < expendibleIncome.length; budgetLevel++){
        if (budget === expendibleIncome[budgetLevel].budget) {
            budgetDecisions = expendibleIncome[budgetLevel];
        }

    }
    return budgetDecisions;
};
//loop will use budget value in order to provide budgetDecisions value


document.querySelector('button').addEventListener('click', function () {
    expendibleIncome.forEach(function (budget){
        budgetDecisions(budget)
    });

//     let finalBudgetValue = budget();
// let finalBudgetDecision = budgetDecisions(finalBudgetValue);

// (`You have a ${finalBudgetValue} budget, you can afford to eat a ${finalBudgetDecision.meal} and you can afford a ${finalBudgetDecision.entertainment} for entertainment.`);
})

