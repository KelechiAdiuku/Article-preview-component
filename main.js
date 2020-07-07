/*

Social Share Links:

Facebook: https://www.facebook.com/sharer.php?u=[post-url]
Twitter: https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest: https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse
*/
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");

function init() {
      const pinterestImg = document.querySelector(".left");
      let postUrl = encodeURI(document.location.href);
      let postTitle = encodeURI("Hi everyone, please check this out: ");
      let postImg = encodeURI(pinterestImg.src);

      facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
      );


      twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
      );

      pinterestBtn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?media=
        ${postImg}&url=${postUrl}&description=${postTitle}`
      );

}

init();
