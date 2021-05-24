let timer;
let minute = 4;
let seconds = 239
let milliseconds = minute * 60 * 100
let textSec = "00"
let display = document.getElementById("display")
display.innerHTML = minute + ':00' + '.00'
let statSec = 59
let statMil = 100
var countdownAudio = new Audio('audio/countdown.mp3'); //untuk audio countdown

function start() {
	
    if (seconds != 239) stop()
    timer = setInterval(function() {
        if (seconds == 180) start2()
        milliseconds--; 
        temp3 = milliseconds
        if (statMil != 0) statMil--
        else {
            statMil = 99
            seconds--
            if (statSec != 0) { 
                statSec-- 
            }
            else statSec = 59
        }
        temp = seconds
        temp4 = statMil
        temp2 = statSec
        
        if (statMil < 10) textMil = '0' + statMil
        else textMil = statMil

        if (statSec < 10) textSec = '0' + statSec
        else textSec = statSec
        
        display.innerHTML = Math.floor(seconds/60) + ':' + textSec + '.' + textMil
        
        if (milliseconds == 0) {
            clearInterval(timer)
            pause()
        }
		//display popup count up in...
		if (seconds == 183) {
				modal.style.display = "block";
        popup()
				span.onclick = function() {
					modal.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == modal) {
					modal.style.display = "none";
					}
				}
      }
    //audio beep
    if (seconds == 182){
      countdownAudio.play();
      }
    },10)
}

function stop() {
    pause()
    clearInterval(timer)
    seconds = temp
    statSec = temp2
    milliseconds = temp3
    statmil = temp4
}

function cancel() {
    clearInterval(timer)
    display.innerHTML = minute + ':00' + '.00'
    minute = 4
    seconds = 239
    milliseconds = minute * 60 * 100
    statSec = 59
    statMil = 100
}



// POP UP 1-2-3 SAAT COUNTDOWN MENIT KE 3 SEBELUM MULAI COUNTUP
let countupTimer;


function popup() {
	let timeleft = 3;
	if (seconds != 3) clearInterval(countupTimer)
	countupTimer = setInterval(function(){
			if(timeleft <= 0){
				document.getElementById("tigadetik").innerHTML = "Count up started";
				clearInterval(countupTimer);
      } else {
				document.getElementById("tigadetik").innerHTML = timeleft + " seconds left";
			}
			timeleft = timeleft - 1;
			}, 1000);
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  popup()
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



