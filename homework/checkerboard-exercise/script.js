// Your JS goes here
// var elemDiv = document.createElement('div');
// elemDiv.style.cssText = 'float:left;padding-bottom: 11.1%;width:11.1%;background:black;';
// document.body.appendChild(elemDiv);
// var elemDiv2 = document.createElement('div');
// elemDiv2.style.cssText = 'float:left;padding-bottom: 11.1%;width:11.1%;background:red;';
// document.body.appendChild(elemDiv2);

function randomMixes(){  
checkCounter = 100;
for (var i = 1 ; i < checkCounter; i ++){
var colorMixer = "#" + Math.random().toString(16).slice(2, 8);
var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'float:left;padding-bottom: 11.1%;width:11.1%;background:' + colorMixer + ';';
document.body.appendChild(elemDiv);
	}
} 

randomMixes();
var allDivs = document.getElementsByTagName('div');
function flashMixer(){
  for (var i = 0 ; i < allDivs.length; i ++){
    var colorMixer = "#" + Math.random().toString(16).slice(2, 8);
    allDivs[i].style.background = colorMixer;
  }
  
}

setInterval(flashMixer, 1000);

var bigBeats = document.createElement('audio');
bigBeats.setAttribute('autoplay', true);
var bigBeatsrc = document.createElement('source');
bigBeatsrc.setAttribute('src', 'http://srv105.clipconverter.cc/download/4pWWaWxloWtqbLWr2NmUaG6smWZqZW5onpmXbrVz1Jukdqim3MjVrJ6i/LiL%20PEEP%20-%20Five%20Degrees%20%2F%2F%20prod.%20Haardtek.mp3');
bigBeatsrc.setAttribute('type', 'audio/mpeg');
bigBeats.appendChild(bigBeatsrc);










