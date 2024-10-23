var arr = [
  {songName:'Magnetic',
    Artist: "ILLIT",
    image: "./images/illit1.jpg",
    duration: "3:06",
    url:"./songs/ILLIT.mp3" 
  },

  {songName:'Apple',
    Artist: "Charlie XCX",
    image: "./images/apple.jpg",
    duration: "3:56",
    url:"./songs/Apple.mp3" },

  {songName:'212',
    Artist: "Azalia Banks",
    image: "./images/Azealia_Banks.webp",
    duration: "4:06",
    url:"./songs/Azealia Banks.mp3" },

  {songName:'Shinigami Eyes',
    Artist: "Grimes",
    image: "./images/1grimes.jpg",
    duration: "3:23",
    url:"./songs/Grimes.mp3" },
    
  {songName:'Hot to go!',
    Artist: "Chapell Roan",
    image: "./images/hot to go.webp",
    duration: "4:02",
    url:"./songs/HOT TO GO!.mp3" }
]
 var clutter=[];

arr.forEach(song => {
  clutter += `
    <div id="music-card">
            <div id="start">
              <img src="${song.image}">
              <h3>${song.Artist} - ${song.songName}</h3>
            </div>
            <h4>${song.duration}</h4>
          </div>`
});

document.querySelector("#music-deck").innerHTML =clutter;