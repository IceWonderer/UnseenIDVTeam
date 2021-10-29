//$(document).ready(function() {
//console.log("jQuery Added & ready (individual.js)");

//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//const id = urlParams.get("id");

//const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=1';
//const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

//$.getJSON(url2, function(result){
//console.log(result)

// movie_name = result.results[i].title;
// movie_cover = result.results[i].poster_path;
// movie_description = result.results[i].overview;

// movie_release = result.results[i].release_date;
// movie_lang = result.results[i].original_language;
// movie_rating = result.results[i].vote_average;


// $(".title-div").text(movie_name);
// $(".movie-cover").attr("src", movie_cover);

$(document).ready(function() {
    console.log("jQuery Added & ready (individual.js)");

    /*API*/
    const api_key = '0bf5587914a4404af70b0748372ba59f';

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');



    //dynamic http request
    console.log(id)
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&language=en-US&append_to_response=videos,credits,images";



    $.getJSON(url, function(result) {
        console.log(result.title);

        var movieName = result.title;
        var ranking = result.vote_average;
        var summary = result.overview;
        var dateReleased = result.release_date
        var time = result.runtime;
        var imgsrc = 'https://image.tmdb.org/t/p/w500/' + result.poster_path

        //individual image 
        $(".individual-img").attr("src", imgsrc)

        //review movie name 
        $(".title-div").text(movieName);

        //review description
        $(".synopsis .movie-desc").text(summary);

        //output genres

        for (i = 0; i < result.genres.length; i++) {
            $(".genre").append(
                "<div class='btnMovieGenre'>" + result.genres[i].name + "</div>"

            )
        }

        $(".date").text(dateReleased);

        //Duration

        var minutes = time;

        //hours and minutes 
        if (time === 0) {
            $('.amountHours').text('Time not shown');
            $('amountMin').text('');
        } else {
            var timeHours = Math.floor(time / 60);
            var timeMinutes = minutes % 60;

            $('.amountHours').text(timeHours + " Hour");
            $('.amountMin ').text(timeMinutes + " Minutes");

        }

        $(".numReview").text(ranking);

        //trailer
        $(".header-img").append(
            "<iframe width='100%' height='465' src='https://www.youtube.com/embed/" + result.videos.results[0].key + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        )

        //cast
        $("list").append(
            "" + result.credits.crew[0].name + ""
        )
        for (i = 1; i < result.credits.crew.length; i++) {
            $(".list").append(
                "," + result.credits.crew[i].name + ""
            )
        }








    })


})