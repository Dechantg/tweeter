/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  const $tweetsContainer = $('.main-container');
  
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.append($tweet);
  }
}

const createTweetElement = function(tweet) {
  
  //move over article and formatting from index.html

  const $article = $('<article>').addClass('tweets-article');

  const $header = $('<div>').addClass('tweet-header');

  //extract tweeter avatar, username, and tweet handle
  const $userAvatar = $('<img>').addClass('user-avatar').attr('src', tweet.user.avatars);
  const $userName = $('<h2>').text(tweet.user.name);
  const $userHandle = $('<h3>').text(tweet.user.handle);
  $header.append($userAvatar, $userName, $userHandle);

  // add tweet text
  const $textContent = $('<p>').text(tweet.content.text).addClass('tweet-text');
  
  // add date and icons in footer. convert date to day only
  const $footer = $('<div>').addClass('tweet-footer');

  // Use $.timeago to display the time ago information
  const $timeAgo = $('<div>').text($.timeago(new Date(tweet.created_at)));

  const $icons = $('<div>');
  const $flagIcon = $('<i>').addClass('fas fa-flag icon');
  const $repeatIcon = $('<i>').addClass('fas fa-retweet icon');
  const $heartIcon = $('<i>').addClass('fas fa-heart icon');
  $icons.append($flagIcon, $repeatIcon, $heartIcon);

  $footer.append($timeAgo, $icons);

  $article.append($header, $textContent, $footer);

  return $article;
};

const loadTweets = function(tweet) {



}




$(document).ready(function() {
  $('.tweets-article').hover(
    function() {

      // Add the shadow class on hover
      $(this).addClass('shadowed'); 

      
    },
    function() {

      // Remove the shadow class when the mouse leaves
      $(this).removeClass('shadowed'); 

    }
  );

  
  renderTweets(data);
});