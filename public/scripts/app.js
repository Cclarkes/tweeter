$(document).ready(function() {
  $("#error1").hide();
  $("#error1").css("color", "red");
  $("#error2").hide();
  $("#error2").css("color", "red");

  function createTweetElement(data) {

    let $tweet = $("<article>").addClass("tweet");

  // Above the article is declared, while below we have the header declarations and appends made.

    let $header = $("<header>").addClass("Avatar");
    let $image= $("<img>").addClass("imgAvatar").attr("src", data.user.avatars.small);
    let $h3 = $("<h3>").text(data.user.name);
    let $p = $("<p>").addClass("userTag").text(data.user.handle);
      $header.append($image).append($h3).append($p);
      $tweet.append($header);

  // Below here is all the code for body declaration and appendments.

    let $body = $("<div>").addClass("tweetContent");
    let $p2 = $("<p>").text(data.content.text);
        $body.append($p2);

  // And finally, the footer is shown below: declarations and also the final amendment + return

    let $myIcons = 
      `<span>
        <i class="fas fa-flag-checkered" alt="flag"></i>
        <i class="fas fa-recycle" alt="retweet"></i>
        <i class="far fa-thumbs-up" alt="like"></i>
      </span>`

    let $footer = $("<footer>").addClass("postDate");
        $footer.text(data.created_at);
        $footer.append($myIcons);
        $tweet.append($header).append($body).append($footer);

    return ($tweet);
  }

  function renderTweets(tweets) {
    let tweetStream = $(".tweet-list");
    tweets.forEach(indices => {
      tweetStream.prepend(createTweetElement(indices));
      }
    )};

  function loadTweets() {
    $.ajax("/tweets", {
      method: 'get', 
      dataType: "json"
    })
    .then(function (tweetData) {
      renderTweets(tweetData);
    })
  }
  loadTweets();

  $(".tweetform").on('submit', function (event) {
    event.preventDefault();
    let $input = $(".newTweet");
    if($input.val().length > 140) {
      $("#error2").show(200);
    } else {
      $.ajax("/tweets", {
        method: "POST",
        data: $input.serialize(),
        statusCode: {
          400: function() {
            $("#error1").show(200); 
          }
        }
      })
      $(".counter").html(140),
      $(".newTweet").val(``);
    }
  loadTweets();
  })
// Below are both functions placed to hide the error messages.
  $(document).on("click", function() {
    $("#error1").hide(200);
  })
  $(document).on("click", function() {
    $("#error2").hide(200);
  })

  $(".new-tweet").hide();

  $("#composeTweet").on("click", function() {
    $(".new-tweet").slideToggle("complete", function() {
      $(".newTweet").focus();
    });
  });
})