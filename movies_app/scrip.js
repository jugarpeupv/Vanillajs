const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const NOTFOUNDIMG = "https://i.ytimg.com/vi/6kCSVT3r_Qg/hqdefault.jpg";


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


getMovies();

    async function getMovies() {
        const resp = await fetch(APIURL);
        const respData = await resp.json();
        showMovies(respData);

    }

    function showMovies(movies) {
        main.innerHTML="";
        movies.results.forEach((movie)=>{
            
            const {poster_path, vote_average, title,overview} = movie;            
                                                        
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie__container");
            movieEl.innerHTML=`
            <img src="${poster_path? IMGPATH+poster_path: NOTFOUNDIMG}" alt="${title}">
            <div class="movie__footer">
                <h3>${title}</h3>
                <span class="${getSpanClass(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
             ${overview}   
            </div>
            `;
            main.appendChild(movieEl);
        
    });
        
    }

    function getSpanClass(vote){
        if(vote>=7){
            return "span__green";
        } else if(vote<=5){
            return "span__red";
        }
    }

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();             
        const searchFilm = search.value;
        const resp = await fetch(SEARCHAPI+searchFilm);        
        const respData = await resp.json();

        if(respData){
            search.value="";
            showMovies(respData);
        }
      
    })