// making choices

const choices = ['rock', 'paper', 'scissor'];

// making user choices 

const userChoices = choices;

// making computer choices

function computerChoices() {
    return choices[Math.floor(Math.random() * choices.length)]
}

// onClicking images 

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');


// storing scores for the pc and user

let userScore = 0;
function changeUserScore(uscore) {
    document.getElementById("your-score").innerHTML = uscore;
}
let pcScore = 0;
function changePcScore(pscore) {
    document.getElementById("comp-score").innerHTML = pscore;
}
// things which will be initially hidden 

document.getElementById('next').style.display = 'none';
document.querySelector('.hurray-page').style.display = 'none';
document.querySelector('.middle-4').style.display = 'none';
document.querySelector('.middle-3').style.display = 'none';
document.querySelector('.middle-2').style.display = 'none';


// code for playing the game

rock.addEventListener("click", function () {
    const userChoices = 'rock'
    const computerChoice = computerChoices();
    document.getElementById('playing-section').style.display = 'none';
    // userrock.classList.remove("hidden");
    if ((userChoices === computerChoice)) {
        //   pcrock.classList.remove("hidden");
        //   tie();
        document.getElementById('tiePage').style.display = 'flex';
    } else if (
        (userChoices === "rock" && computerChoice === "paper") ){
       /* (userChoices === "rock" && computerChoice === "scissors") ||
        (userChoices === "paper" && computerChoice === "rock") ||
        (userChoices === "scissors" && computerChoice === "paper"))*/ 
        //   pcpaper.classList.remove("hidden");
        //   pcpaper.classList.add("rounded-gradient-borders");
        //   lose();
        document.getElementById('lostPage').style.display = 'flex';
        pcScore++;
        changePcScore(pcScore);
    } else {
        //   pcscissor.classList.remove("hidden");
        //   userrock.classList.add("rounded-gradient-borders");
        //   win();
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});

paper.addEventListener("click", function () {
    console.log("clicked");
    const userChoices = 'paper'
    const computerChoice = computerChoices();
    document.getElementById('playing-section').style.display = 'none';

    // afterclick();
    // userpaper.classList.remove("hidden");
    if ((userChoices === computerChoice)) {
        // pcpaper.classList.remove("hidden");
        // tie();
        document.getElementById('tiePage').style.display = 'flex';
    } else if ((userChoices === "paper" && computerChoice === "scissor")) {
        // pcscissor.classList.remove("hidden");
        // pcscissor.classList.add("rounded-gradient-borders");
        // lose();
        document.getElementById('lostPage').style.display = 'flex';
        pcScore++;
        changePcScore(pcScore);
    } else {
        // win();
        // userpaper.classList.add("rounded-gradient-borders");
        // pcrock.classList.remove("hidden");
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});

scissor.addEventListener("click", function () {
    const userChoices = 'scissor'
    const computerChoice = computerChoices();
    document.getElementById('playing-section').style.display = 'none';
    // pc = computerPlay();
    // afterclick();
    // userscissor.classList.remove("hidden");
    if (userChoices === computerChoice) {
        // pcscissor.classList.remove("hidden");
        // tie();
        document.getElementById('tiePage').style.display = 'flex';
    } else if ((userChoices === "scissor" && computerChoice === "rock")) {
        // lose();
        document.getElementById('lostPage').style.display = 'flex';
        pcScore++;
        changePcScore(pcScore);
        // pcrock.classList.remove("hidden");
        // pcrock.classList.add("rounded-gradient-borders");
    } else {
        // win();
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
        // pcpaper.classList.remove("hidden");
        // userscissor.classList.add("rounded-gradient-borders");
    }
});

/* code for closing the rules section and again displayed when rules button is clicked */

function closeRules() {
    document.querySelector('.rules-sec').style.display = 'none';
}
function ShowRules() {
    document.querySelector('.rules-sec').style.display = 'block';
}

// code for next button 
function nextSection() {
    document.getElementById('wonPage').style.display = 'none';
    document.getElementById('playing-section').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('score-section').style.display = 'none';
    document.getElementById('hurray-section').style.display = 'flex'
}

//code for main page after clicking on play again button of every page
function showMainPage() {
    // Hide unnecessary sections
    document.getElementById('wonPage').style.display = 'none';
    document.getElementById('lostPage').style.display = 'none';
    document.getElementById('tiePage').style.display = 'none';

    // Show the scorecard and playing section
    document.getElementById('score-section').style.display = 'flex';
    document.getElementById('playing-section').style.display = 'flex';

    // hiding the hurray page
    document.getElementById('hurray-section').style.display = 'none'

    // Show the rules button
    document.getElementById('rules').style.display = 'inline-block';
}
