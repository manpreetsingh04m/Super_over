// Strike Buttons 
var strikeButton=document.querySelector('#strike');

// Reset Button
var resetButton=document.querySelector('#reset');

// Team Score
var team1Score_tag=document.getElementById('score_team1');
var team2Score_tag=document.getElementById('score_team2');

// Team  Wicket 
var team1Wicket_tag=document.getElementById('wicket_team1');
var team2Wicket_tag=document.getElementById('wicket_team2');

// Audio Generated
var strikeAudio = new Audio("http://bit.ly/so-ball-hit");
var gameoverAudio = new Audio("http://bit.ly/so-crowd-cheer");

// Variable
var team1Score=0;
var team2Score=0;
var team1Wicket=0;
var team2Wicket=0;
var team1BallsFaced=0;
var team2BallsFaced=0;
var turn =1;

var possibleOutcome=[0,1,2,3,4,6,"W"];

strikeButton.addEventListener("click",strikeButtonClicked)
function strikeButtonClicked(){
// Audio Play
strikeAudio.pause()
strikeAudio.currentTime = 0;
strikeAudio.play()
// Random Values
var randomness=Math.random();
var random1=randomness*possibleOutcome.length
var randomIndex=Math.floor(random1)
var randomVariable=possibleOutcome[randomIndex];
// India batting
if (turn==1){
  // Add ball by using ++
  team1BallsFaced++;
  // Use query selector for accessing the div tag so run could be update on the basis of random randomVariable
var ball=document.querySelector(`#team1sup div:nth-child(${team1BallsFaced})`)
// Add inner HTML to add the random variable 
ball.innerHTML=randomVariable
if(randomVariable=="W"){
  team1Wicket++;
}
else{
  team1Score+=randomVariable;
}
if(team1BallsFaced==6||team1Wicket==2){
  turn=2;
}
updateScore()
}
// PAK Batting
if (turn==2){
  // Add ball by using ++
  team2BallsFaced++;
  // Use query selector for accessing the div tag so run could be update on the basis of random randomVariable
var ball=document.querySelector(`#team2sup div:nth-child(${team2BallsFaced})`)
// Add inner HTML to add the random variable 
ball.innerHTML=randomVariable
if(randomVariable=="W"){
  team2Wicket++;
}
else{
  team2Score+=randomVariable;
}
if(team2BallsFaced==6||team2Wicket==2){
  turn=3;
  setTimeout(() =>{
  gameover();
  },10)
}
updateScore()
}
}
function updateScore() {
  team1Score_tag.innerHTML = team1Score;
  team2Score_tag.innerHTML = team2Score;
  team1Wicket_tag.innerHTML = team1Wicket;
  team2Wicket_tag.innerHTML = team2Wicket;
}
function gameover(){
  if(team1Score>team2Score){
    alert("INDIA WON")
  }
  else if(team2Score>team1Score){
    alert ("PAKISTAN WON");
  }
  else{
    alert("DRAW GAME!");
  }
  gameoverAudio.play();
  document.querySelectorAll(".ball").forEach(e=>{
    if(e.innerHTML==""){
    e.innerHTML="X";
    e.style.backgroundColor='grey'
  }
  })
  
}




resetButton.addEventListener("click",resetfunction)
function resetfunction(){
  window.location.reload()
}