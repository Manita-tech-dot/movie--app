const btn = document.getElementById("btn");
//console.log(btn);
//const moviesearch = document.querySelector("search_bar");
//console.log(search_bar);
const apiKey = "cd906714";
const movielist = document.querySelector(".movielist");

async function getmoviedata(movieName) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
    );
    const data = await response.json();
    //console.log(data.Search);
    const movie = data.Search;

    for (let i = 0; i < movie.length; i++) {
      console.log(movie[i]);
      const card = document.createElement("div");
      card.className = "card";
      const title = document.createElement("h1");
      title.textContent = movie[i].Title;
      card.appendChild(title);

      const moviePoster = document.createElement("img");
      moviePoster.src = movie[i].Poster;
      card.appendChild(moviePoster);

      const releaseYear = document.createElement("h6");
      releaseYear.textContent = movie[i].Year;
      card.appendChild(releaseYear);
      movielist.appendChild(card);
    }
  } catch (err) {}
}

btn.addEventListener("click", () => {
  const inputmovie = document.querySelector("#movieName").value;
  //console.log(inputmovie);
  if (inputmovie === "") {
    alert("Please enter the movie name");
  } else {
    getmoviedata(inputmovie);
  }
});
