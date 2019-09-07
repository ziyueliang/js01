//In the space below each problem, write the code to answer. This page connects to index.html


/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

// get weekday
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var week = "Today is "+weekday[new Date().getDay()]+".";

// get time
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds :seconds;
  var strTime = hours + ':' + minutes +':'+seconds +' ' + ampm;
  return strTime;
}
var time = "Current Time : "+formatAMPM(new Date)+".";

// get answer1
var answer1Total= week +"<br>"+ time;

function answer1(){
  document.getElementById("answer1").innerHTML=answer1Total;
  console.log(week);
  console.log(time);
}
answer1();

// 2. Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "answer2"

//get mm-dd-yyyy mm/dd/yyyy dd/mm/yyyy
function formatDate1(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return month + '-' + day + '-' + year;
}
function formatDate2(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return month + '/' + day + '/' + year;
}
function formatDate3(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return day + '/' + month + '/' + year;
}

// get answer2
var answer2Total = formatDate1(new Date)+"<br>"+formatDate2(new Date)+"<br>"+formatDate3(new Date);
function answer2(){
  document.getElementById("answer2").innerHTML=answer2Total;
  console.log(formatDate1(new Date));
  console.log(formatDate2(new Date));
  console.log(formatDate3(new Date));
}
answer2();

$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
    // to do
  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';
  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };


});
