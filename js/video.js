var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector('#volume').innerHTML = (100* video.volume) + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Change Volume");
	console.log(this.value);
	video.volume = (this.value) / 100;
	let vol = document.querySelector('#volume').innerHTML = (100* video.volume) + '%';
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate = video.playbackRate -.10;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	video.playbackRate = video.playbackRate +.10;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");
	video.currentTime = video.currentTime + 5;
	if (video.currentTime >= video.duration){
		console.log("Restart");
		video.currentTime = video.currentTime - video.duration;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		console.log("Mute On");
		let mute = document.querySelector('#mute').innerHTML = 'Unmute';
	}
	else {
		video.muted = false;
		console.log("Mute Off");
		let mute = document.querySelector('#mute').innerHTML = 'Mute';
	}
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	var a = document.getElementById("old");  
	a.className = "oldTime"; 
	console.log(a.className); 
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	var a = document.getElementById("original");  
	a.className = "placeholder"; 
	console.log(a.className); 
});

