$(document).ready(function(){
    $(".burger-img").click(function() {
        $("#burger-nav").css("display", "block");
    });
    
    $("#burger-nav-close").click(function() {
        $("#burger-nav").css("display", "none");
    });
})