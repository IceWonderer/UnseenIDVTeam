$(document).ready(function() {

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&page=1';
    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=0bf5587914a4404af70b0748372ba59f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';


    $.getJSON(url2,function(movies){
        console.log(movies);

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          }
         
        for(i = 9 ; i <= getRndInteger(15,15); i++){
            
            var IBG_backdrop_path = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].backdrop_path 
            var CoverImage = 'https://image.tmdb.org/t/p/w500/' + movies.results[i].poster_path
            
            var movieCard = `   <div class="movie-card movieFunc `+ movies.results[i] +`">
            <div class="movie-cover"><img src=`+ CoverImage +` class="movie-cover-spec"></div>
            <div class="movie-card-info-box">
                <h1>`+ movies.results[i].title +`</h1>
                <div class="star-icon starTwo"><img class="" src="../img/my-list-pg-img/star-icon.svg" height="20"></div>
                <h3>`+ movies.results[i].vote_average +`</h3>
                <div class="movie-length-grey movie-card-length">
                    <div class="movie-length-blue" id="blue-lenght1"></div>
                </div>
                <!--movie-length-grey-->
                <div class="remove-button remove-btn">Remove</div>
            </div>
            <!--movie-card-info-box-->
        </div>  `


            $(".right-side").append(movieCard);




            //MOVIE CARD HOVER
            $(".movie-card").hover(function() {
                $(this).find(".starTwo").hide(0)
                $(this).find(".movie-card-info-box h3").hide(0)
                $(this).find(".movie-card-length").hide(0)
                $(this).find(".movie-card-info-box h1").css({
                    "margin-left":"-50px",
                    "font-size": "36px",
                    "max-width": "450px",
                    "transition":"0.6s"})
                $(this).find(".remove-button").css({
                    "margin-top":"60px",
                    "color":"#232324",
                })

            }, function(){
                $(this).find(".starTwo").show(0)
                $(this).find(".movie-card-info-box h3").show(0)
                $(this).find(".movie-card-length").show(0)
                $(this).find(".movie-card-info-box h1").css({
                    "max-width": "300px",
                    "margin-left":"0px",
                    "font-size": "24px",
                    "transition":"0.6s"})
                $(this).find(".remove-button").css({
                    "margin-top":"-25px",
                    "color":"#729CEF",
                })

            });



            //REMOVE BUTTON
            $(".remove-btn").click(function(){
                $(this).closest(".movieFunc").slideUp(600)
            })




            //MOVIE PREVIEW
            $(".movie-card").click(function(){
                // $(this).find(".movie-info-container h1").append(movies.results[i].title)
                console.log(movies.results[i].title )
            })









            //IPAD
            var movieCardpd = `   <div class="movie-card-pd movieFunc `+ movies.results[i] +`">
            <div class="movie-cover-pd"><img src=`+ CoverImage +` class="movie-cover-spec"></div>
            <div class="movie-card-info-box-pd">
                <h1>`+ movies.results[i].title +`</h1>
                <div class="star-icon star2-pd"><img class="" src="../img/my-list-pg-img/star-icon.svg" height="20"></div>
                <h3>`+ movies.results[i].vote_average +`</h3>
                <div class="movie-length-grey movie-card-length-pd">
                    <div class="movie-length-blue-pd" id="blue-lenght1-pd"></div>
                </div>
                <!--movie-length-grey-->
                <div class="remove-button-pd remove-btn">Remove</div>
            </div>
        </div>  `


            $(".right-side-pd").append(movieCardpd);

            $(".movie-card-pd").click(function() {
                
            })



            //IPHONE
            var movieCardmb =  `   <div class="movie-card-mb movieFunc `+ movies.results[i] +`">
            <div class="movie-cover-mb"><img src=`+ CoverImage +` class="movie-cover-spec-mb"></div>
            <div class="movie-card-info-box-mb">
                <h1>`+ movies.results[i].title +`</h1>
                <div class="star-icon star2-mb"></div>
                <h3>`+ movies.results[i].vote_average +`</h3>
                <div class="movie-length-grey-mb movie-card-length-mb">
                    <div class="movie-length-blue-mb" id="blue-lenght1-mb"></div>
                </div>
                <div class="remove-button-mb remove-btn">Remove</div>
            </div>
        </div>  `


        $(".right-side-mb").append(movieCardmb);

        $(".movie-card-mb").click(function() {
            
        })



        
        }
    });


  

});//end of ready function