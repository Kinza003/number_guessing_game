import inquirer from "inquirer";
// 1) Computer will generate a random number.
// 2) User input for guessing number.
// 3) Compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber == randomNumber) {
    console.log("Congragulations! you guessed right number.");
}
else {
    console.log("Oops! you guessed wrong number.");
}
