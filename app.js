var min = 0;
var mid = 0;
var max = 0;
var pause;
var jmin = document.getElementById('min');
var jmid = document.getElementById('mid');
var jmax = document.getElementById('max');
function start(){
pause = setInterval(function (){
min++
jmin.innerHTML = min
  if
     (min > 29)
     {
      mid++
      jmid.innerHTML = mid
      min = 0
	if (mid > 60)
	{
	max++
	jmax.innerHTML = max
	mid = 0
	}
     }
},50);
document.getElementById('start').disabled = true;
}

function rok(){
   clearInterval(pause);
   document.getElementById('start').disabled = false;
}

function reset(){
   min = 0;
   mid = 0;
   max = 0;
   jmin.innerHTML = min;
   jmid.innerHTML = mid;
   jmax.innerHTML = max;

}


























