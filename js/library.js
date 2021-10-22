$(document).ready(function() {


    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=1';
    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

////////////////////////////////////////////////////////////////////////////////////////////////start of popular
    $.getJSON(url,function(popular){

        // var rdmHeader = Math.random(20)

        // $(".header-img").append(
        //     "<img src=''https://image.tmdb.org/t/p/w500/'"+ popular.results[rdmHeader].backdrop_path +"' id = 'headerImageBD'"
        // );

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          }
         
        for(i = 0 ; i <= getRndInteger(4,4); i++){
            console.log("looped");
            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].backdrop_path 
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].poster_path
           
            

            $(".top-movies-box").append(
               "<div class = 'top-movie' ><img src='"+ CoverImage +"'alt=' 'class= 'topMovieImage'></div>"
            );
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////end of popular

////////////////////////////////////////////////////////////////////////////////////////////////start of movie library
$.getJSON(url2,function(movies){
        console.log(movies);

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          }
         
        for(i = 6 ; i <= getRndInteger(15,15); i++){
            console.log("looped");
            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path 
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path
            
            $(".movie-container").append(
               "<div class = 'movie' ><img src='"+ CoverImage +"'alt=' 'class= 'topMovieImage'></div>"
            );
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////end of movie library
})