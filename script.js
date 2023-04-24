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

const player = document.querySelector("iframe");
const timeBtn = document.querySelectorAll("[data-time]");
const moodBtn = document.querySelectorAll("[data-mood]");

function insertVideo(e) {
  //   var btn = e.target;
  //   var btnName = btn.dataset.time;
  var rightVideo = videos.filter((video) => video.time === e);
  var randomIndex = Math.floor(Math.random() * rightVideo.length);
  var selectedVideo = rightVideo[randomIndex];
  var videoID = selectedVideo.link;
  var videoURL =
    "https://www.youtube.com/embed/" +
    videoID +
    "?autoplay=1&controls=0&enablejsapi=1";
  player.src = videoURL;
}

timeBtn.forEach(
  (btn) =>
    (btn.onclick = function () {
      insertVideo(this.dataset.time);
    })
);

function insertVideo2(e) {
  var rightVideo = videos.filter((video) => video.mood === e);
  var randomIndex = Math.floor(Math.random() * rightVideo.length);
  var selectedVideo = rightVideo[randomIndex];
  var videoID = selectedVideo.link;
  var videoURL =
    "https://www.youtube.com/embed/" +
    videoID +
    "?autoplay=1&controls=0&enablejsapi=1";
  player.src = videoURL;
}

moodBtn.forEach(
  (btn) =>
    (btn.onclick = function () {
      insertVideo2(this.dataset.mood);
    })
);

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
    "https://wallpaperwaifu.com/wp-content/uploads/2021/01/lofi-coffee-shop-night-thumb.jpg";
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
  var currentTimeDisplay = hrs + ":" + mins;
  timeDisplay.innerHTML = currentTimeDisplay;
}

setInterval(updateTimeDisplay, 10);
