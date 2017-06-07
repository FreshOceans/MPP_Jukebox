// Display at least one song on the page when the page loads
// Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.

var jukebox = {
	myMusic: [],
	initialize: function(){
		console.log("== initialize ==");
		this.activateUserInterface();
		this.activateAudioButtons();
	},
	activateUserInterface: function(){
		console.log("== activateUserInterface ==");
		var self = this;
		var addButton = document.getElementById("addButton");
		addButton.addEventListener("click", function(){
			self.addNewSong();
		});
	},
	addNewSong: function(){
		console.log("== addNewSong ==");
		var self = this;
		console.log("this:", this);
		console.log("self:", self);
		var songName = document.getElementById("songName").value;
		var artist = document.getElementById("artist").value;
		var url = document.getElementById("url").value;
		// ===== Instance ====
		var nextSong = new jukebox.Song(songName, artist, url);
		this.myMusic.push(nextSong);
		console.log(this.myMusic);
		this.createMusicList();
		},
	// ===== Song Constructor =====
	Song: function(songName, artist, url){
		console.log("== Song ==");
		this.songName = songName;
		this.artist = artist;
		this.url = url;
	},
	createMusicList: function(){
		console.log("== createMusicList ==");
		var nextListItem = "";
			for (var i = 0; i < jukebox.myMusic.length; i++) {
				nextSong = jukebox.myMusic[i];
				nextTrack = nextSong.songName;
				nextListItem += "<li id='songName_" + i + "'>" + nextTrack + "</li>";
			};
			console.log(nextListItem);
		document.getElementById("galleryTitles").innerHTML = nextListItem;
	},
	// activateMusicList: function() {
	// 	console.log("== activateMusicList ==");
	// 	var listArray =
	// }



	// clearNewSong: function(){
	// 	console.log("== clearNewSong== ");
	//
	// },
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
		// currentTime = rewind (sec)
		var skipBtn = document.getElementById("skip");

		playBtn.addEventListener("click", function(){
			console.log("== playBtn ==");
			audio_player.play();
		});
		pauseBtn.addEventListener("click", function(){
			console.log("== pauseBtn ==");
			audio_player.pause();
		});

	}

}
jukebox.initialize();
