$(document).ready(function()  {

var wins=0;
var losses=0;
var userTotal=0;
var computerPick=0;
var crys1=0;
var crys2=0;
var crys3=0;
var crys4=0;

//set what a new game looks like. assign values to each crystal and the computers selection randomly. assign values to the crystal via the id in their associated spans.

//On clicking a crystal, it starts a new game.
$(".crystal").on("click", newGame());



function newGame() {

$("#userTotal").empty();
userTotal=0;
computerPick=0;
crys1="";
crys2="";
crys3="";
crys4="";

//run math functions to select random numbers for each min and max of the number range. 
computerPick= Math.floor(Math.random() * (120-19)) + 19;
$("#computerPick").text(computerPick);

crys1= Math.floor(Math.random() * (12-1))+1;
crys2= Math.floor(Math.random() * (12-1))+1;
crys3= Math.floor(Math.random() * (12-1))+1;
crys4= Math.floor(Math.random() * (12-1))+1;
}

//add the values of each crystal when clicked and determine win conitions. alert when you win or lose. Add the totals to the designated id in the html. run the newGame function to revert to the original settings.

$("#crys1").click(function(){
  userTotal= userTotal + crys1;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
    wins++;
    parseInt(wins);
    $("#wins").text(`Wins: ${wins}`);
    newGame()}
  else if(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
    losses++;
    parseInt(losses);
    $("#losses").text(`Losses: ${losses}`);
    newGame()}
  
});

$("#crys2").click(function(){
  userTotal= userTotal + crys2;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
    wins++;
    parseInt(wins);
    $("#wins").text(`Wins: ${wins}`);
    newGame()}
  else if(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
    losses++;
    parseInt(losses);
    $("#losses").text(`Losses: ${losses}`);
    newGame()}
});

$("#crys3").click(function(){
  userTotal= userTotal + crys3;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
    wins++;
    parseInt(wins);
    $("#wins").text(`Wins: ${wins}`);
    newGame()}
  else if(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
    losses++;
    parseInt(losses);
    $("#losses").text(`Losses: ${losses}`);
    newGame()}
});

$("#crys4").click(function(){
  userTotal= userTotal + crys4;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
    wins++;
    parseInt(wins);
    $("#wins").text(`Wins: ${wins}`);
    newGame()}
  else if(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
    losses++;
    parseInt(losses);
    $("#losses").text(`Losses: ${losses}`);
    newGame()}
});


});

