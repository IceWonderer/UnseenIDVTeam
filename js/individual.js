$(document).ready(function() {
    console.log("jQuery Added & ready (individual.js)");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=1';
    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

    $.getJSON(url2, function(result){
        console.log(result)

        movie_name = result.results.title;
        movie_cover = result.results.poster_path;
        movie_description = result.results.overview;

        movie_release = result.results.release_date;
        movie_lang = result.results.original_language;
        movie_rating = result.results.vote_average;


        $(".title-div").text(movie_name);
        $(".movie-cover").attr("src", movie_cover);







    })


})