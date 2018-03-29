
/* $ global variables */

var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( "#content" );

function generatePosts( posts ){
    var $postsLists = $( "<ul>" );
    var $postItems = $postsLists
        .slice( 0, 11 )
        /* .filter(
            ( post ) => post.id < 11
        )*/
        .map(
            ( post ) => $( "<li>" ).text( post.title )
        );

    return $postsLists.append( $postItems );
}

function appendPosts( posts ){
    var $posts = generatePosts( posts );

    $content.append( $posts );
}

getPosts.then( appendPosts );
/* GeneratePost(posts)     {
  post.filter(posts()=>  post.id<11).map(posts()=> $("<li>").text(post.title));
};

getPosts.then( ( (posts) =>  ) => console.log( posts[0] ) );
//getPosts.$( "<ol>" ).text( filter( posts[0] ) );
GeneratePost(posts); */
