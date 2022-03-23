// $(document).ready(
//     function() {
//         $("h1").hide();
//     }
// )


$(document).ready(function() {
    $("h2").click(function() {
        $(this).addClass("dog")
    })

    $("p").click(function() {
        $(this).addClass("green")
    })

    $("h1").hover(function() {
        // $(this).css("background-color", "green");
        // $(this).toggleClass("background-color", "white");
    })

    $("h1").hover(function() {
        $(this).toggleClass("pink");
    })

})



// $(document).ready(function() {

// })