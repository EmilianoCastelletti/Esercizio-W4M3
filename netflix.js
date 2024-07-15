const filmList = [
    {Title:"Unorthodox" ,Genere:["Drama", "TvShow", "Bello"], img:"./assets/imgs/movies/1.png"},
    {Title:"Afterlife" ,Genere:["Comedy", "TvShow", "NewUpdate", "Bello", "Visto"], img:"./assets/imgs/movies/2.png"},
    {Title:"Vis a Vis" ,Genere:["Thriller", "TvShow", "Brutto"], img:"./assets/imgs/movies/3.png"},
    {Title:"ThePlace" ,Genere:["Thriller", "Movie", "Bello"], img:"./assets/imgs/movies/4.png"},
    {Title:"SummerTime" ,Genere:["Drama", "TvShow", "Brutto"], img:"./assets/imgs/movies/5.png"},
    {Title:"I delitti di Valhalla" ,Genere:["Thriller", "TvShow", "Bello"], img:"./assets/imgs/movies/6.png"},
    {Title:"L'altra Grace" ,Genere:["Thriller", "TvShow", "Brutto"], img:"./assets/imgs/movies/7.png"},
    {Title:"Virgin River" ,Genere:["Drama", "TvShow", "Bello", "Visto"], img:"./assets/imgs/movies/8.png"},
    {Title:"The english game" ,Genere:["Drama", "Movie", "Bello"], img:"./assets/imgs/movies/9.png"},
    {Title:"Il metodo Kominsky" ,Genere:["Comedy", "Movie", "Bello", "Visto"], img:"./assets/imgs/movies/10.png"},
    {Title:"Patto d'amore" ,Genere:["Drama", "Movie", "Brutto"], img:"./assets/imgs/movies/11.png"},
    {Title:"Casa Flores" ,Genere:["Comedy", "TvShow", "Brutto"], img:"./assets/imgs/movies/12.png"},
    {Title:"Collateral Beauty" ,Genere:["Drama", "Movie", "Bello", "Visto"], img:"./assets/imgs/movies/13.png"},
    {Title:"Selfe-Made" ,Genere:["Drama", "TvShow", "Bello"], img:"./assets/imgs/movies/14.png"},
    {Title:"Freud" ,Genere:["Drama", "Movie", "Bello", "Visto"], img:"./assets/imgs/movies/15.png"},
    {Title:"Grace and Freanky" ,Genere:["Comedy", "TvShow", "Brutto"], img:"./assets/imgs/movies/16.png"},
    {Title:"Lasciati andare" ,Genere:["Comedy", "Movie", "Brutto"], img:"./assets/imgs/movies/17.png"},
    {Title:"Dogman" ,Genere:["Thriller", "Movie", "Bello", "Visto"], img:"./assets/imgs/movies/18.png"} 
];

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = movie.img;
    img.alt = movie.Title;

    card.appendChild(img); 

    return card; 
}

function displayMovies() {
    const sectionBelli = document.getElementById('sectionBelliCards');
    const sectionBrutti = document.getElementById('sectionBruttiCards');
    const sectionVisti = document.getElementById('sectionVistiCards');

    // Pulisci le sezioni
    sectionBelli.innerHTML = '';
    sectionBrutti.innerHTML = '';
    sectionVisti.innerHTML = '';

    filmList.forEach(movie => {
        const movieCard = createMovieCard(movie);
        if (movie.Genere.includes('Bello')) {
            sectionBelli.appendChild(movieCard);
        } else if (movie.Genere.includes('Brutto')) {
            sectionBrutti.appendChild(movieCard);
        } else if (movie.Genere.includes('Visto')) {
            sectionVisti.appendChild(movieCard);
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    displayMovies();
});
