var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime < video.duration-5){
		video.currentTime = video.currentTime+5;
	}
	else{
		video.currentTime=0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	let vol = document.querySelector("#myVideo");
	if(vol.muted){
		document.getElementById("mute").innerHTML= "Mute"
		video.muted=false
		console.log("Mute");
	}
	else{
		document.getElementById("mute").innerHTML="Unmute"
		video.muted=true
		console.log("Unmute");
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function(){
	var vol = this.value/100;
	video.volume = vol;
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = this.value+"%";
});

document.querySelector("#old").addEventListener("click", function(){
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function(){
	video.classList.remove("oldTime");
});
