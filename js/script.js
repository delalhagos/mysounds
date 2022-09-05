const myMusicList = [
    "American Honey - Current Joys",
    "Way it Goes - Hippocampus",
    "I Don't Want to Talk - Wallows",
    "Northern Boy - The Academic",
    "Cherry - Harry Styles",
    "Cemetery - COIN",
    "My Type - Saint Motel",
    "cold/mess - Prateek Kuhad",
    "Everybody Talks - Neon Trees",
    "Cough Syrup - Young the Giant",
];
  
  const mixList = document.querySelector(".my-songs");
  const button = document.querySelector(".show-list");
  const total = document.querySelector(".text");
  
  //create the remove/hide functionality when clicking the button
  button.addEventListener("click", function () {
      mySongs(myMusicList);
      mixList.classList.remove("hide");
      button.classList.add("hide");
  })
  
  total.innerText = `My current top ${myMusicList.length} songs 🎧`;
  
  // function that turns array into html list elements
  const mySongs = function(songs) {
      // this is how we are able to access each string in the list we made
      songs.forEach(function (song, index) {
          let li = document.createElement("li");
          li.classList.add("song");
          li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
  
          mixList.append(li);
      })
  }
