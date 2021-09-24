let destinationsToBePicked = ["Door County", "Milwaukee", "Madison", "Green Bay"]

let restaurants = ["Mcdonald's", "Chili's", "Chick-fil-a", "Olive Garden"]

let transportion = ["Bus", "BMW", "Porsche", "Bike"]

let entertainment = ["Movie", "Skydiving", "Circus", "Club"]


function randomChoice(someArray) {
    let randomIndex = Math.floor(Math.random() * someArray.length);
    return someArray[randomIndex];
}

function confirmingChoices() {
    let chosenDest = randomChoice(destinationsToBePicked);
    let chosenRest = randomChoice(restaurants);
    let chosenTrans = randomChoice(transportion);
    let chosenEnt = randomChoice(entertainment);
    let choice = confirm("You will be going to " + chosenRest + " in " + chosenDest + " by " + chosenTrans + " and after your entertainment will be " + chosenEnt);
    if (choice == true) {
        console.log("you will be going to " + chosenRest + " in " + chosenDest + " by " + chosenTrans + " and after you will " + chosenEnt)

    } else {
        confirmingChoices();
    }
}

confirmingChoices();

