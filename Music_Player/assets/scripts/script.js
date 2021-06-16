const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let songIndex = 0;

// Songs info
const songs = [
  {
    title: 'Tum Saath Ho',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/tum saath.jfif',
    discPath: 'assets/music/Tum Saath Ho.mp3',
    duration: '5:41',
  },
  {
    title: 'Jaan Ban Gaye',
    artist: 'Vishal Mishra',
    coverPath: 'assets/images/jaan ban.jfif',
    discPath: 'assets/music/Jaan Ban Gaye.mp3',
    duration: '3:43',
  },
  {
    title: 'Shayad',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/shayad.jpg',
    discPath: 'assets/music/Shayad.mp3',
    duration: '3:10',
  },
  {
    title: 'Hawayein',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/hawaa.jfif',
    discPath: 'assets/music/hawayein.mp3',
    duration: '4:49',
  },
  {
    title: 'Jaan Nisaar',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/jaan nissarr.jfif',
    discPath: 'assets/music/Jaan Nisaar.mp3',
    duration: '4:10',
  },
  {
    title: 'New vs Old 2',
    artist: 'Raj Barman feat. Deepshikha',
    coverPath: 'assets/images/New vs Old 2.jfif',
    discPath: 'assets/music/New vs Old 2.mp3',
    duration: '6:48',
  },
  {
    title: 'O Sudh Budh Khoyi',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/O Sudh Budh Khoyi.jfif',
    discPath: 'assets/music/O Sudh Budh Khoyi.mp3',
    duration: '4:10',
  },
  {
    title: 'New vs Old 3',
    artist: 'Raj Barman feat. Deepshikha',
    coverPath: 'assets/images/New vs Old 3.jfif',
    discPath: 'assets/music/New vs Old 3.mp3',
    duration: '6:44',
  },
  {
    title: 'Haan Hasi Ban Gaye',
    artist: 'Amit Mishra',
    coverPath: 'assets/images/hasi.jfif',
    discPath: 'assets/music/Haan Hasi Ban Gaye.mp3',
    duration: '4:32',
  },
  {
    title: 'Dekha Hazaro Dafaa',
    artist: 'Arijit Singh, Plak Muchhal',
    coverPath: 'assets/images/dekha.jfif',
    discPath: 'assets/music/Dekha Hazaro Dafaa.mp3',
    duration: '3:30',
  },
  {
    title: 'Bol Do Na Zara',
    artist: 'Armaan Malik',
    coverPath: 'assets/images/Bol Do Na Zara.jfif',
    discPath: 'assets/music/Bol Do Na Zara.mp3',
    duration: '4:53',
  },
  {
    title: 'Safarnama',
    artist: 'Lucky Ali',
    coverPath: 'assets/images/Safarnama.jfif',
    discPath: 'assets/music/Safarnama.mp3',
    duration: '4:11',
  },
  {
    title: 'Tera Yaar Hoon Main',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/yaarr.jfif',
    discPath: 'assets/music/Tera Yaar Hoon Main.mp3',
    duration: '4:24',
  },
  {
    title: 'Tujhme Khoya Rahu Main',
    artist: 'Arijit Singh',
    coverPath: 'assets/images/Tujhme Khoya Rahu Main.jfif',
    discPath: 'assets/music/Tujhme Khoya Rahu Main.mp3',
    duration: '4:44',
  },
  {
    title: 'Zindagi Kuch Toh Bata',
    artist: 'Jubin Nautiyal',
    coverPath: 'assets/images/Zindagi Kuch Toh Bata.jfif',
    discPath: 'assets/music/Zindagi Kuch Toh Bata.mp3',
    duration: '4:19',
  },
];

// Load song initially
loadSong(songs[songIndex]);

// Load the given song
function loadSong(song) {
  cover.src = song.coverPath;
  disc.src = song.discPath;
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia() {
  if (disc.paused) {
    disc.play();
  } else {
    disc.pause();
  }
}

// Update icon
function updatePlayPauseIcon() {
  if (disc.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}

// Go to next song
function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to previous song when previous button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to next song when next button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
progressContainer.addEventListener('click', setProgress);
