$(document).ready(function() {
    console.log("jQuery Added and Ready (index.js)");

    //LOGIN & REGISTER TOGGLE

    $(".login-slider-all").click(function() {
        $(".reg-all").hide(600)
        $(".login-box-all").show(600)
    })

    $(".reg-slider-all").click(function() {
        $(".login-box-all").hide(600)
        $(".reg-all").show(600)
    })


})