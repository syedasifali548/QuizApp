var total = 3;
var score = 0;
// var scr = document.getElementsByClassName("score")
// console.log(scr)

function start(){
 location.href = "result.html"
  var tr = document.getElementById("tr");
  
// Get data
const q1 =document.forms["quiz"]["q1"].value;
const q2 =document.forms["quiz"]["q2"].value;
const q3 =document.forms["quiz"]["q3"].value;
// var FinalAnswer =document.getElementsByClassName("FinalAns");
// console.log(FinalAnswer)
for( var i=1;i<=total;i++){
    if(eval('q' +i)==null || eval('q'+i)=="")
    {
        alert("You have missed question" + i)
        
        
    }
}
const ans =['d','b','d'];

for( var i=1;i<=total;i++){
    if(eval('q'+i)==ans[i-1])
    {
        score++;
    }
}
 alert("Your total score is:" + score)
tr.innerHTML = score.value;
console.log(score)
return false;
}



// counter
var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML="Your Time Left:" + count +" seconds";
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);
