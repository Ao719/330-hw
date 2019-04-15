// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var c_song = 6;
var vol = 2;

function init() {
	// Your code goes here
  var i;
  for (i=0; i<6; i++){
		volLevels[i]=document.getElementById('vl'+i);
	}

	for(i=0; i<3; i++){
		volLevels[i].style.backgroundColor="#9f5cc4";
	}
 
}

function volUp() {
	// Your code goes here
  if (vol<5) 
  {
    vol+=1;
    volLevels[vol].style.backgroundColor="#9f5cc4";
  }
}

function volDown() {
	// Your code goes here
  if(vol>=0)
  {
    volLevels[vol].style.backgroundColor="white";
    vol-=1;
  }
}

function mouseDown1()
{
  document.getElementById("p1").style.backgroundColor="#e6ccff";
}

function mouseUp1()
{
  document.getElementById("p1").style.backgroundColor="white";
}

function mouseDown2()
{
  document.getElementById("p2").style.backgroundColor="#e6ccff";
}

function mouseUp2()
{
  document.getElementById("p2").style.backgroundColor="white";
}

function switchPlay() {
	// Your code goes here
  if (document.getElementById('switch').innerHTML == 'play_arrow') {
    document.getElementById('switch').innerHTML = 'pause';
  } else {
    document.getElementById('switch').innerHTML = 'play_arrow';
  }

  var count = setInterval(myfunc, 1000);
  function myfunc() {
    var process_num = document.getElementById('process-bar').value;
    var n = secondsToMs(process_num);
    if (document.getElementById('switch').innerHTML == 'play_arrow') {
      clearInterval(count);
    } else {
      document.getElementById('process-bar').stepUp(1);
      document.getElementById('time-elapsed').innerHTML = n;
      if (process_num == 180) {
        nextSong();
      }
    }
  }
}


function nextSong() {
	// Your code goes here

  c_song+=1;
  if(c_song==10){
    c_song=0;
  }
  document.getElementById("player-song-name").innerHTML=tracklist[c_song];
  document.getElementById("process-bar").value=0;
  document.getElementById("time-elapsed").innerHTML='0:00';
}

function prevSong() {
	// Your code goes here
  if(c_song==0){
    c_song=9;
    document.getElementById("player-song-name").innerHTML=tracklist[c_song];
  }
  else{
    c_song-=1;
    document.getElementById("player-song-name").innerHTML=tracklist[c_song];
  }
  document.getElementById("process-bar").value=0;
  document.getElementById("time-elapsed").innerHTML='0:00';
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
