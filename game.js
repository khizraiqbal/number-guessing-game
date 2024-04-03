#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userguessnumber",
        type: "number",
        message: "please guess a correct number 1-6",
    },
]);
if (answers.userguessnumber === randomnumber) {
    console.log("congratulation! you have choosen right number");
}
else {
    console.log("sorry the guess is wrong");
}
