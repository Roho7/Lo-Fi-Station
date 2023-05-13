var videos = [
  {
    name: "Evening Jazz 1",
    link: "NJuSStkIZBg",
    mood: "relax",
    time: "evening",
  },
  {
    name: "Morning Lofi 1",
    link: "1fueZCTYkpA",
    mood: "relax",
    time: "morning",
  },
  {
    name: "Morning Lofi 2",
    link: "EJU90JyRxIA",
    mood: "relax",
    time: "morning",
  },
  {
    name: "Morning Lofi 3",
    link: "gnZImHvA0ME",
    mood: "groove",
    time: "morning",
  },
  {
    name: "Morning Lofi 3",
    link: "-EY97tZAkNY",
    mood: "study",
    time: "evening",
  },
  {
    name: "Evening Groove 1",
    link: "v97Nu7mvYw4",
    mood: "groove",
    time: "evening",
  },
  {
    name: "Evening Study 1",
    link: "0L38Z9hIi5s",
    mood: "study",
    time: "evening",
  },
  {
    name: "Study Morning 1",
    link: "c3suauAz0zQ",
    mood: "study",
    time: "morning",
  },
  {
    name: "Morning Groove 1",
    link: "fhdX3Wcxwas",
    mood: "groove",
    time: "morning",
  },
  {
    name: "Evening Groove 2",
    link: "yYzKC7sEISg",
    mood: "groove",
    time: "evening",
  },
  {
    name: "Morning relax 2",
    link: "JwftmUv3T7M",
    mood: "relax",
    time: "morning",
  },
];

const player = document.querySelectorAll("iframe");
const timeBtn = document.querySelectorAll("[data-time]");
const moodBtn = document.querySelectorAll("[data-mood]");

var tag = document.createElement("script"); //inject youtube API script

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  console.log("ready to play"); // loads the API
}

function onPlayerReady(event) {
  event.target.playVideo(); // plays the video when the API is ready
}

// * ------------------- FOR PLAYING VIDEO BY TIME ----------------
var ytPlayer;
function playVideo(e) {
  if (ytPlayer) {
    ytPlayer.destroy();
  }

  var rightVideo = videos.filter((video) => video.time === e);
  var randomIndex = Math.floor(Math.random() * rightVideo.length);
  var selectedVideo = rightVideo[randomIndex];

  ytPlayer = new YT.Player("player", {
    height: "15%",
    width: "15%",
    videoId: selectedVideo.link,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

timeBtn.forEach(
  (btn) =>
    (btn.onclick = function () {
      playVideo(this.dataset.time);
    })
);

// * ------------------- FOR PLAYING VIDEO BY MOOD ----------------
function playVideo2(e) {
  if (ytPlayer) {
    ytPlayer.destroy();
  }

  var rightVideo = videos.filter((video) => video.mood === e);
  var randomIndex = Math.floor(Math.random() * rightVideo.length);
  var selectedVideo = rightVideo[randomIndex];

  ytPlayer = new YT.Player("player", {
    height: "150%",
    width: "150%",
    videoId: selectedVideo.link,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

moodBtn.forEach(
  (btn) =>
    (btn.onclick = function () {
      playVideo2(this.dataset.mood);
    })
);

// ! ============ CHANGE VOLUME =================================
const volumeSlider = document.getElementById("myRange");

volumeSlider.oninput = function () {
  console.log("vol change");
  ytPlayer.setVolume(this.value);
  ytPlayer.unmute();
};

// ! ============ BG COLOR SHIFT =================
var today = new Date();
var time = today.getHours();

if (time > 4 && time < 12) {
  document.querySelector("body").style.backgroundImage =
    "url(https://rare-gallery.com/uploads/posts/1227279-morning.jpg";
} else if (time >= 12 && time < 16) {
  document.querySelector("body").style.backgroundImage =
    "url(https://wallpapercave.com/wp/wp10969231.jpg)";
} else if (time >= 16 && time < 20) {
  document.querySelector("body").style.backgroundImage =
    "url(https://cdn.wallpapersafari.com/88/85/d4PJmW.jpg)";
} else if (time >= 20) {
  document.querySelector("body").style.backgroundImage =
    "url(https://wallpaperwaifu.com/wp-content/uploads/2021/01/lofi-coffee-shop-night-thumb.jpg)";
} else if (time >= 0 && time < 4) {
  document.querySelector("body").style.backgroundImage =
    "url(https://wallpapercave.com/wp/wp5805430.jpg)";
}

// !=============== SHOW TIME ===============

const timeDisplay = document.querySelector(".time");

function updateTimeDisplay() {
  var currentTime = new Date();
  var hrs = currentTime.getHours();
  var mins = currentTime.getMinutes();

  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  var currentTimeDisplay = hrs + ":" + mins;
  timeDisplay.innerHTML = currentTimeDisplay;
}

setInterval(updateTimeDisplay, 10);

// !============ POMODORO ====================
const pomoCount = document.querySelector(".pomo-timer");
const timerBox = document.querySelector(".pomo-container");
const pomoBtn = document.querySelector(".pomo-btn");
const breakAudio = document.querySelector(".break-audio");
const pomoAudio = document.querySelector(".pomo-audio");
const pomoTxt = document.querySelector(".pomo-txt");

let countdownInterval;

function startPomo() {
  pomoTxt.innerHTML = "Pomodoro";
  pomoCount.innerHTML = 20;
  countdownInterval = setInterval(() => {
    let count = parseInt(pomoCount.innerText);

    if (count === 0) {
      clearInterval(countdownInterval);
      startBreak();
      breakAudio.play();
    } else {
      pomoCount.innerHTML = count - 1;
    }
  }, 60000);
}

function startBreak() {
  pomoTxt.innerHTML = "Take a break";
  pomoCount.innerHTML = 5;
  breakInterval = setInterval(() => {
    let count = parseInt(pomoCount.innerHTML);
    if (count === 0) {
      pomoAudio.play();
      clearInterval(breakInterval);
      startPomo();
    } else {
      pomoCount.innerHTML = count - 1;
    }
  }, 60000);
}
pomoBtn.addEventListener("click", function () {
  if (countdownInterval) {
    pomoBtn.innerHTML = `<i class="fa-solid fa-stopwatch-20"></i>`;
    clearInterval(countdownInterval);
    countdownInterval = null;
    timerBox.style.display = "none";
  } else {
    timerBox.style.display = "block";
    pomoBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    startPomo();
  }
});

// !--------------------------- HIDE PLAYER -------------------------------------

const showHome = document.querySelector(".show-home");
const video = document.querySelector(".player-container");
showHome.addEventListener("click", () => {
  if (video.style.opacity != "0") {
    video.style.opacity = "0";
  } else {
    video.style.opacity = "1";
  }
});

// function insertVideo2(e) {
//   var rightVideo = videos.filter((video) => video.mood === e);
//   var randomIndex = Math.floor(Math.random() * rightVideo.length);
//   var selectedVideo = rightVideo[randomIndex];
//   var videoID = selectedVideo.link;
//   var videoURL =
//     "https://www.youtube.com/embed/" +
//     videoID +
//     "?autoplay=1&controls=0&enablejsapi=1";
//   player.src = videoURL;
// }
