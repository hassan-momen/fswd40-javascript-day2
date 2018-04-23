
function timeconvert(minutes)
{
 var result=minutes+" minutes = "+Math.round(minutes/60)+"hour(s) and "+minutes%60+" minute(s)";
 document.getElementById('timeconvert').innerHTML=result;
}

function yesterdaysDate(){

}

function dynamicBackground(){
 var red=Math.floor(Math.random()*16);
 var green=Math.floor(Math.random()*16);
 var blue=Math.floor(Math.random()*16);
 var value=red*256+green*16+blue;
 var bcolor="#"+value.toString(16);	
 document.body.style.backgroundColor=bcolor;
 console.log("background "+bcolor);
}