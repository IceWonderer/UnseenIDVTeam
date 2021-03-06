$(document).ready(function() {


    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=1';


    ////////////////////////////////////////////////////////////////////////////////////////////////start of popular
    $.getJSON(url, function(popular) {

        // var rdmHeader = Math.random(20)

        // $(".header-img").append(
        //     "<img src=''https://image.tmdb.org/t/p/w500/'"+ popular.results[rdmHeader].backdrop_path +"' id = 'headerImageBD'"
        // );

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        for (i = 0; i <= getRndInteger(4, 4); i++) {

            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].backdrop_path
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].poster_path



            $(".top-movies-box").append(
                ` <a href=../pages/individual_movie.html?id=` + popular.results[i].id + `><div class = 'top-movie' ><img src=` + CoverImage + ` 'alt=' 'class= 'topMovieImage'>
               <div class="movie-overlay">
               <h1>` + popular.results[i].title + `</h1>
               <h2>` + popular.results[i].vote_average + `<img class="fav-star" src="../img/my-list-pg-img/star-icon.svg" height="20"></h2>
           </div>
               </div></a> `
            );


            $(".top-movie").hover(function() {
                $(this).find(".movie-overlay").show();
            }, function() {
                $(this).find(".movie-overlay").hide();
            })
        }
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////end of popular

    ////////////////////////////////////////////////////////////////////////////////////////////////start of movie library
    for (var i = 1; i < 10; i++) {
        const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=" + i;
        $.getJSON(url2, function(movies) {
            console.log(movies);

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

            for (i = 0; i < 21; i++) {


                var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path
                var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path

                $(".movie-container").append(
                    `  <a href=individual_movie.html?id=` + movies.results[i].id + `><div  class = 'movie  ${movies.results[i].genre_ids[0]}'   ><img src=` + CoverImage + ` 'alt=' 'class= 'topMovieImage'>
                    <div class="movie-overlay">
                    <h1>` + movies.results[i].title + `</h1>
                    <h2>` + movies.results[i].vote_average + `<img class="fav-star" src="../img/my-list-pg-img/star-icon.svg" height="20"></h2>
                </div>
                    </div></a> `

                    // "  <a href='individual_movie.html?id=" + movies.results[i].id + "'><div class = 'movie  " + movies.results[i].genre_ids[0] + " ' ><img src='" + CoverImage + "'alt=' 'class= 'topMovieImage'></div></a>"

                );

                $(".movie").hover(function() {
                    $(this).find(".movie-overlay").show();
                }, function() {
                    $(this).find(".movie-overlay").hide();
                })


            }
        });


    }

    ////////////////////////////////////////////////////////////////////////////////////////////////end of movie library 

    ////////////////////////////////////////////////////  IPAD   ////////////////////////////////////////////

    $.getJSON(url, function(popular) {


        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        for (i = 0; i <= getRndInteger(3, 3); i++) {
            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].backdrop_path
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].poster_path

            $(".top-movies-box-pd").append(
                ` <a href=../pages/individual_movie.html?id=` + popular.results[i].id + `><div class = 'top-movie-pd' ><img src=` + CoverImage + ` 'alt=' 'class= 'topMovieImage-pd'></div></a> `
            );
        }
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////start of movie library PD
    for (var i = 1; i < 10; i++) {
        const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=" + i;
        $.getJSON(url2, function(movies) {
            console.log(movies);

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

            for (i = 0; i < 21; i++) {


                var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path
                var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path

                $(".movie-container-pd").append(
                    `  <a href=individual_movie.html?id=` + movies.results[i].id + `><div  class = 'movie-pd  ${movies.results[i].genre_ids[0]}'   ><img src=` + CoverImage + ` 'alt=' 'class= 'topMovieImage-pd'>
                    </div></a> `

               
                );

            }
        });


    }
    ////////////////////////////////////////////////////////////////////////////////////////////////end of movie library PD

    ////////////////////////////////////////////////////////////////////////////////////////////////start of movie library Phone
    $.getJSON(url, function(popular) {


        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        for (i = 6; i <= getRndInteger(11, 11); i++) {

            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].backdrop_path
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + popular.results[i].poster_path

            $(".top-movies-box-mb").append(
                ` <a href=../pages/individual_movie.html?id=` + popular.results[i].id + `><div class = 'top-movie-mb' ><img src=` + CoverImage + ` 'alt=' 'class= 'topMovieImage-mb'></div></a> `
            );
        }
    });


    for (var i = 1; i < 10; i++) {
        const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=" + i;
        $.getJSON(url2, function(movies) {
            console.log(movies);

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

            for (i = 0; i < 21; i++) {


                var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path
                var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path

                $(".movie-container-mb").append(
                    `  <a href=individual_movie.html?id=` + movies.results[i].id + `><div  class = 'movie-mb  ${movies.results[i].genre_ids[0]}'   ><img src=` + CoverImage + ` 'alt=' 'class= 'topMovieImage-mb'>
                    </div></a> `

               
                );

            }
        });


    }
    ////////////////////////////////////////////////////////////////////////////////////////////////end of movie library Phone
});