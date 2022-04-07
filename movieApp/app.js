const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgPath = "https://image.tmdb.org/t/p/w1280";

const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector('main');
const form = document.querySelector('#form');
const search = document.querySelector('.search');

let getMovies = async(url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    showMovies(data.results);

    
    return data;
}
getMovies(api);
function getClassByRate(vote){
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 5){
        return 'orange';
    }else{ 
        return 'red';
    }
}

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        
            <img src="${ imgPath + movie.poster_path}" alt="${movie.title}">

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${movie.overview}
            </div>
        `;
        main.appendChild(movieEl)
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchValue = search.value;
    if(searchValue) {
        getMovies(searchApi + searchValue);
        search.value = '';
    }
});