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
    "https://www.youtube.com/embed/" + videoID + "?autoplay=1&controls=0";
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
    "https://www.youtube.com/embed/" + videoID + "?autoplay=1&controls=0";
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

if (time < 12) {
  document.querySelector("body").style.backgroundImage =
    "url(https://rare-gallery.com/uploads/posts/1227279-morning.jpg";
} else {
  document.querySelector("body").style.backgroundImage =
    "url(https://cdn.wallpapersafari.com/88/85/d4PJmW.jpg)";
}
