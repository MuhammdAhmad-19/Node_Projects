#! /usr/bin/env node

import inquirer from "inquirer"; // import inquirer. First you need to download "npm i inquirer"

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "number",
    name: "firstnumber",
  },
  {
    message: "Enter second number",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "Select one of these operators",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Mulitplication", "Division"],
  },
]);

//conditional statements

if (answer.operator === "Addition") {
  // perform addition opeeration
  console.log(`Your value is: ${answer.firstnumber + answer.secondnumber}`);
} else if (answer.operator === "Subratction") {
  // perform subtarction opeeration
  console.log(`Your value is: ${answer.firstnumber - answer.secondnumber}`);
} else if (answer.operator === "Multiplication") {
  // perform multiplication opeeration
  console.log(`Your value is: ${answer.firstnumber * answer.secondnumber}`);
} else if (answer.operator === "Division") {
  // perform division opeeration
  console.log(`Your value is: ${answer.firstnumber / answer.secondnumber}`);
} else {
  console.log("Error");
}
