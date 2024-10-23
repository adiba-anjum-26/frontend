var arr = [
  {
    songName: 'Magnetic',
    Artist: "ILLIT",
    image: "./images/illit1.jpg",
    duration: "3:06",
    url: "./songs/ILLIT.mp3"
  },

  {
    songName: 'Apple',
    Artist: "Charlie XCX",
    image: "./images/apple.jpg",
    duration: "3:56",
    url: "./songs/Apple.mp3"
  },

  {
    songName: '212',
    Artist: "Azalia Banks",
    image: "./images/Azealia_Banks.webp",
    duration: "4:06",
    url: "./songs/Azealia Banks.mp3"
  },

  {
    songName: 'Shinigami Eyes',
    Artist: "Grimes",
    image: "./images/1grimes.jpg",
    duration: "3:23",
    url: "./songs/Grimes.mp3"
  },

  {
    songName: 'Hot to go!',
    Artist: "Chapell Roan",
    image: "./images/hot to go.webp",
    duration: "4:02",
    url: "./songs/HOT TO GO!.mp3"
  }
]

var musicDeck = document.querySelector("#music-deck");
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var forward = document.querySelector("#forward");

var audio = new Audio();
var selectedSong = 0;

function mainFunc() {
  var songList = [];

  arr.forEach(function (song, index) {
    songList += `
    <div class="music-card" id="${index}">
            <div id="start">
              <img src="${song.image}">
              <h3>${song.Artist} - ${song.songName}</h3>
            </div>
            <h4>${song.duration}</h4>
          </div>`
  });

  musicDeck.innerHTML = songList;
  audio.src = arr[selectedSong].url;
}

mainFunc();

musicDeck.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  mainFunc();
  audio.play();
  play.innerHTML = '<i class="ri-pause-fill"></i>';
  clicked = 1;
  document.querySelector("#left").style.backgroundImage = `url("${arr[selectedSong].image}")`
});

var clicked = 0;

play.addEventListener("click", function () {
  if (clicked === 0) {
    play.innerHTML = '<i class="ri-pause-fill"></i>';
    mainFunc();
    audio.play();
    clicked = 1;
  } else {
    play.innerHTML = '<i class="ri-play-fill"></i>';
    mainFunc();
    audio.pause();
    clicked = 0;
  }
})

forward.addEventListener("click", function () {
  if (selectedSong < arr.length-1) {
    selectedSong++;
    mainFunc();
    audio.play();
    play.innerHTML = '<i class="ri-pause-fill"></i>';
    clicked = 1;
    document.querySelector("#left").style.backgroundImage = `url("${arr[selectedSong].image}")`
  }else{
    mainFunc();
    audio.play();
    play.innerHTML = '<i class="ri-pause-fill"></i>';
    clicked = 1;
    document.querySelector("#left").style.backgroundImage = `url("${arr[selectedSong].image}")`
  }
})

back.addEventListener("click", function () {
  if (selectedSong === 0) {
    mainFunc();
    audio.play();
    play.innerHTML = '<i class="ri-pause-fill"></i>';
    clicked = 1;
    document.querySelector("#left").style.backgroundImage = `url("${arr[selectedSong].image}")`
  } else {
    selectedSong--;
    mainFunc();
    audio.play();
    play.innerHTML = '<i class="ri-pause-fill"></i>';
    clicked = 1;
    document.querySelector("#left").style.backgroundImage = `url("${arr[selectedSong].image}")`
  }
})
