$(document).ready(function() {

    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
 ////////////////////////////////////////////////////////////////////////////////////////////////start of recommended 5
    $.getJSON(url2,function(movies){

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          }
         
        for(i = 0 ; i <= getRndInteger(4,4); i++){
            console.log("looped");
            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path 
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path
           
            

            $(".top-movies").append(
               "<div class = 'movie' ><img src='"+ CoverImage +"'alt=' 'class= 'topMovieImage'></div>"
            );
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////end of recommended 5


////////////////////////////////////////////////////////////////////////////////////////////////start of more movies
$.getJSON(url2,function(movies){

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
     
    for(i = 6; i <= getRndInteger(15,15); i++){
        console.log("looped");
        var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path 
        var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path
       
        

        $(".more-movies").append(
           "<div class = 'movie' ><img src='"+ CoverImage +"'alt=' 'class= 'topMovieImage'></div>"
        );
    }
});


////////////////////////////////////////////////////////////////////////////////////////////////end of more movies


//////////////////////////////////////////////////// IPAD JS start ///////////////////////////////////////////////////////////

 ////////////////////////////////////////////////////////////////////////////////////////////////start of recommended 5  PD
//  $.getJSON(url2,function(movies){

//     function getRndInteger(min, max) {
//         return Math.floor(Math.random() * (max - min) ) + min;
//       }
     
//     for(i = 0 ; i <= getRndInteger(4,4); i++){
//         console.log("looped");
//         var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path 
//         var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path
       
        

//         $(".top-movies-pd").append(
//            "<div class = 'movie-pd' ><img src='"+ CoverImage +"'alt=' 'class= 'topMovieImageipad'></div>"
//         );
//     }
// });
////////////////////////////////////////////////////////////////////////////////////////////////end of recommended 5  PD


////////////////////////////////////////////////////////////////////////////////////////////////start of more movies  PD
// $.getJSON(url2,function(movies){

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }
 
// for(i = 6; i <= getRndInteger(15,15); i++){
//     console.log("looped");
//     var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path 
//     var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path
   
    

//     $(".more-movies").append(
//        "<div class = 'movie' ><img src='"+ CoverImage +"'alt=' 'class= 'topMovieImage'></div>"
//     );
// }
// });


////////////////////////////////////////////////////////////////////////////////////////////////end of more movies PD
});