#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessed",
        type: "number",
        message: "Please guess a number between 1 and 6: ",
    },
]);
// conditional statements
if (answer.userGuessed === randomNumber) {
    console.log("You guessed it right");
}
else {
    console.log("You guessed it wrong");
}
