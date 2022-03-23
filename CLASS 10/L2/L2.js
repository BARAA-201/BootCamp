$(Document).ready(function() {

    getPosts();
})
$("#post-form").submit(function(e) {
    e.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var url = $("#post-form").attr("action");
    console.log(title);
    console.log(body);
    console.log(url);

    try {
        $.ajax({
            url: url,
            type: "post",
            data: {
                title: title,
                body: body
            }
        }).done(function(data) {
            console.log(data)
            $("#post-status").html("Post sent");
            $("#post-status").css("color", "green");




        }).fail(function(err) {
            console.log(err);
            throw "Error code" + err
        })
    } catch (err) {

    } finally {

    }
})




function getPosts() {
    $.ajax({

            url: "https://jsonplaceholder.typicode.com/posts"
        }).done(function(data) {
            // console.log(data);
            $.map(data, function(post, i) {
                console.log(post);
                $("#posts-container").append("<h2>" + post.title + "</h3><p>" + post.body + "</p>")
            })
        })
        // .fail(function(e) {
        //     console.log(e)
        // })
}