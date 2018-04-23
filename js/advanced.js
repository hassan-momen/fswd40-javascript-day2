
function timeconvert(minutes)
{
 var result=minutes+" minutes = "+Math.round(minutes/60)+"hour(s) and "+minutes%60+" minute(s)";
 document.getElementById('timeconvert').innerHTML=result;
}

function yesterdaysDate(data){
 var d=new Date(data);
 var now=d.getTime();
 var yesterday=now-3600*1000*24;
 var ydate=new Date(yesterday);
 var year=ydate.getFullYear();
 var month=ydate.getMonth();
 var weekday=ydate.getDay();
 var day=ydate.getDate();
 var wday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 var mname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 var output=wday[weekday]+" "+mname[month]+" "+day+" "+year;

 console.log(output);
 document.getElementById('yesterday').innerHTML=output;	

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

