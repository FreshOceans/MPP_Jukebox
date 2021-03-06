// Display at least one song on the page when the page loads
// Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.
// document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var jukebox = {
	myMusic: [],
		// { songName: "Intro" , artist: "The XX" , url: "Music/intro.mp3", image: "Images/xx.png" },
		// { songName: "Doin It Right" , artist: "Daft Pink" , url: "Music/DP.mp3", image: "Images/ram.jpg" }

	initialize: function(){
		console.log("== initialize ==");
		this.activateUserInterface();
		this.activateAudioButtons();
		this.activateQuedSong();
	},
	// ====== Enable User Interaction ======
	activateUserInterface: function(){
		console.log("== activateUserInterface ==");
		var self = this;
		var addButton = document.getElementById("addButton");
		var clearButton = document.getElementById("clearButton")
		addButton.addEventListener("click", function(){
			self.addNewSong();
		});
		clearButton.addEventListener("click", function() {
			self.clearForm();
		});
	},
	activateAudioButtons: function(){
		console.log("== activateAudioButtons ==");
		var self = this;
		console.log("self:", self);
		var audio_player = document.getElementById("audio_player");
		console.log(audio_player);
		// audio_player.volume = 1;
		var playBtn = document.getElementById("play");
		var pauseBtn = document.getElementById("pause");
		var rewindBtn = document.getElementById("rewind");
		var skipBtn = document.getElementById("skip");

		playBtn.addEventListener("click", function(){
			console.log("== playBtn ==");
			audio_player.play();
		});
		pauseBtn.addEventListener("click", function(){
			console.log("== pauseBtn ==");
			audio_player.pause();
		});
		rewindBtn.addEventListener("click", function(){
			console.log("== rewindBtn ==");
			audio_player.currentTime = 0.
		});
	},
	// ======= Clear Method for Song Form ======
	clearForm: function() {
		console.log("== clearForm ==");
		document.getElementById("songForm").reset();
	},
	// ====== Song Que on load ======
	activateQuedSong: function() {
		console.log("== activateQuedSong ==");
		$('#play').on('click', function(e){
			$("#audio_player").attr("src","music/feather.mp3").trigger('play');
			$('#songImage').css('backgroundImage','url(images/nujabes.jpg)');
		})
	},
	// ====== Adding new Song to List ======
	addNewSong: function(){
		console.log("== addNewSong ==");
		var self = this;
		console.log("this:", this);
		console.log("self:", self);
		var songName = document.getElementById("songName").value;
		var artist = document.getElementById("artist").value;
		var url = document.getElementById("url").value;
		// ===== Song Instance ====
		var nextSong = new jukebox.Song(songName, artist, url);
		this.myMusic.push(nextSong);
		console.log(this.myMusic);
		this.createMusicList();
		this.activateMusicList();
		},
	// ====== Creating Music List ======
	createMusicList: function(){
		console.log("== createMusicList ==");
		var nextListItem = "";
			for (var i = 0; i < jukebox.myMusic.length; i++) {
				nextSong = jukebox.myMusic[i];
				nextTrack = nextSong.songName;
				nextListItem += "<li id='songName_" + i + "'>" + nextTrack + "</li>";
			};
			console.log(nextListItem);
		document.getElementById("songTitles").innerHTML = nextListItem;
	},
	// ======= Creating Clickable Song ======
	activateMusicList: function() {
		console.log("== activateMusicList ==");
		var listArray = document.getElementById("songTitles").getElementsByTagName("li");
		console.log(listArray);
		for (var i = 0; i < listArray.length; i++) {
			nextListItem = listArray[i];
			console.log(nextListItem);
			nextListItem.addEventListener("click", jukebox.displaySelectedSong);
		};
	},
	// ====== Click on List =====
	displaySelectedSong: function(event) {
		console.log("== displaySelectedSong ==");
		var songNameId = event.currentTarget.id;
		var songNameIndex = songNameId.indexOf("_") + 1;
		var songIndex = songNameId.substring(songNameIndex);
		var selectSong = jukebox.myMusic[songIndex];
		var musicTags = document.getElementById("selectedSong").getElementsByTagName("p");
		musicTags[0].innerText = selectSong.songName;
		musicTags[1].innerText = selectSong.artist;
		musicTags[2].innerText = selectSong.url;
		musicTags[3].innerText = selectSong.image;
		var audio_player = document.getElementById("audio_player");
		audio_player.src = selectSong.url;
		document.getElementById("audio_player").play();
		var songImage = document.getElementById("songImage");
		var imgStr = "url('" + selectSong.image + "')";
		songImage.style.backgroundImage = imgStr;
	},
	// ===== Song Constructor =====
	Song: function(songName, artist, url){
		console.log("== Song ==");
		this.songName = songName;
		this.artist = artist;
		this.url = url;
	}
	// displayProgressBar: function() {
	// 	console.log("== displayProgressBar ==");
	//
	// },
};

jukebox.initialize();

// console.log(event.currentTarget.id);
// console.log(songNameIndex);
// console.log(songIndex);
// console.log(selectSong);
// console.log(musicTags);
// console.log("audio_player.src:", audio_player.src);
// console.log("audio_player:", audio_player);
// console.log("songImage:", songImage);
// console.log("imgStr:", imgStr);
