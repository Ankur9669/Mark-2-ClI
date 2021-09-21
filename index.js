 var scanner = require("readline-sync");
const chalk = require("chalk");
console.log(chalk.blue("Welcome to Ankur's Quiz"));
let playerName = scanner.question("What is your name: ");
console.log(chalk.green("Welcome " + playerName));
let score = 0;
let highScores = 
[
    {
        name : "Ankur",
        score: 5
    },
    {
        name : "Sam",
        score: 0
    },
];
let questionOne = 
{
    question: "What item is used to restore a wounded Z fighter to full health? ",
    answer1: "1. Z Sword",
    answer2: "2. Senzu Bean",
    answer3: "3. Saiyan Hair",
    answer4: "4. Time Capsule",
    answer: "Senzu Bean"
};
let questionTwo = 
{
    question: "What's the highest Super Saiyan level attained by Vegeta in DBZ? ",
    answer1: "1. Super Saiyan Level 1",
    answer2: "2. Super Saiyan Level 2",
    answer3: "3. Super Saiyan Level 3",
    answer4: "4. Other",
    answer: "Super Saiyan Level 3"
};
let questionThree = 
{
    question: "Which of the following attacks is Vegeta known to perform?",
    answer1: "1. Gallick Gun",
    answer2: "2. Kame Hame Ha",
    answer3: "3. Special Beam Cannon",
    answer4: "4. Masenko",
    answer: "Gallick Gun"
};
let questionFour = 
{
    question: " Which DBZ character is Buu's best friend?",
    answer1: "1. Hercule",
    answer2: "2. Goku",
    answer3: "3. Vegeta",
    answer4: "4. Chi Chi",
    answer: "Hercule"
};
//Creating an array of questions
let questionBank = [questionOne, questionTwo, questionThree, questionFour];
for (let i = 0; i < questionBank.length; i++)
{
    let questionToAsk = questionBank[i].question;
    console.log(chalk.yellow(questionToAsk));
    console.log(chalk.magenta(questionBank[i].answer1));
    console.log(chalk.cyan(questionBank[i].answer2));
    console.log(chalk.yellow(questionBank[i].answer3));
    console.log(chalk.cyan(questionBank[i].answer4));
    let answerEnteredByUser = scanner.question("Enter your answer in words: ");
    let answerOfTheQuestion = questionBank[i].answer;

    if(checkUserAnswer(answerOfTheQuestion, answerEnteredByUser) == true)
    {
        score++;
        console.log(chalk.green("Woh Correct Answer"));
    }
    else
    {
        console.log(chalk.red("OOps Incorrect Answer"));
    }
}
console.log(chalk.green("Score is: " + score));
if(score >= highScores[1].score)
{
    console.log(chalk.green("Congrats You are a High Scorer: "));
    highScores[1].name = playerName;
    highScores[1].score = score;
}

function checkUserAnswer(correctAnswer, answerEnteredByTheUser)
{
    let a1 = correctAnswer.toLowerCase();
    let a2 = answerEnteredByTheUser.toLowerCase();

    if(a1.localeCompare(a2) == 0)
    {
        return true;
    }
    return false;
}