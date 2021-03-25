// Global Constants
const initialClueHoldTime = 1000;  // How long to hold each clue's light/sound for the first round
const finalClueHoldTime = 200;  // How long to hold each clue's light/sound for the final round
const cluePauseTime = 333;  // How long to pause in between clues
const nextClueWaitTime = 1000;  // How long to wait before starting playback of the clue sequence
const patternLength = 4;  // How long of a pattern to generate
const numButtons = 6;  // Number of buttons available

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // Must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = initialClueHoldTime;
var numMistakes = 0;

function startGame() {
  // Initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = initialClueHoldTime;
  generateRandomPattern(patternLength);
  numMistakes = 0;
  
  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame() {
  // Reset game variables
  gamePlaying = false;
  
  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  console.log("clue hold time: " + clueHoldTime + "ms");
  guessCounter = 0;
  let delay = nextClueWaitTime;  // Set delay to initial wait time
  for (let i = 0; i <= progress; i++) {  // For each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);  // Set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= (initialClueHoldTime-finalClueHoldTime) / pattern.length;  // Assumes pattern has at least 2 buttons
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Great job!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  // Game logic
  if (btn != pattern[guessCounter]) {
    numMistakes++;
    if (numMistakes == 3) {
      loseGame();
    }
    else {
      guessCounter = 0;
      alert("Incorrect, restart the whole pattern. You have made " + numMistakes + " mistakes so far.");
    }
  }
  else if (guessCounter != progress) {
    guessCounter++;
  }
  else if (progress < pattern.length-1) {
    progress++;
    playClueSequence();
  }
  else {
    winGame();
  }
}

function generateRandomPattern(len) {
  pattern = [];
  for (let i = 0; i < len; i++) {
    pattern.push(getRandomInt(numButtons));
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 587.3,
  6: 698.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
