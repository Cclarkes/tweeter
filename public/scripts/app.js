$(document).ready(function() {

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
// And finally, the footer is shown below: delclarations and also the final amendment + return
  let $footer = $("<footer>").addClass("postDate");
      $footer.text(data.created_at);
      $tweet.append($header).append($body).append($footer);
  return ($tweet);
}

function renderTweets(tweets) {

  let tweetStream = $(".tweet-list");
  tweets.forEach(indices => {
    tweetStream.prepend(createTweetElement(indices));
    }
  )};

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

renderTweets(data)
}
);




$(() => {
  let $button = $("#/tweetButton")
  $button.on('submit', function (event) {
    event.preventDefault();
    $.ajax(".tweetButton",unshift(params.req.body)
    
  })
}