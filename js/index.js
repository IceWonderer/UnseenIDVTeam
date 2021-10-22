$(document).ready(function() {
    console.log("jQuery Added and Ready (index.js)");

    //LOGIN & REGISTER TOGGLE

    $(".login-slider-all").click(function() {
        $(".reg-all").slideUp(600)
        $(".login-box-all").slideDown(600)
    })

    $(".reg-slider-all").click(function() {
        $(".login-box-all").slideUp(600)
        $(".reg-all").slideDown(600)
    })

    //LOGIN AUTHENTICATION

 
    $(".submit-log").click(function() {

        var username = $(".username").val();
        var password = $(".password").val();


   url = "https://owmakerspace.co.za/users/data.json";

    $.getJSON(url, function(result){
        console.log(result.users)

        for(i = 0; i < result.users.length; i++){
            if(result.users[i].username === username){
             
                if(result.users[i].password === password){
                    
                    if(result.users[i].account === "active"){
                        window.location.href = "../index.html";
                        sessionStorage.setItem("username", username);
                    } else {
                        $(".auth-message").slideDown(200);
                        $(".auth-message").text("Your account has been suspended")
                    }

                } else {
                    $(".auth-message").slideDown(200);
                    $(".auth-message").text("Your Username or Password do not match")
                }


            } else {
                $(".auth-message").slideDown(200);
                $(".auth-message").text("Your Username or Password do not match");
            }
        }






    }); //end of http request

    }); //end of login click event

    $(".name_out").text(sessionStorage.getItem("username"));



    $(".profile-pic-box").click(function() {
       $(".options-block").show(600) 
    })

    $(".options-block").mouseleave(function(){
        $(this).hide(600)
    }) 
 

})