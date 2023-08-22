

// -------------------sidebar--------------------------
// This focuses on the opening of the sidear when the hamburger menu is clicked
// Also closes the sidebar if user click outside the sidebar

const navBar = document.querySelector("nav"),
menuBtns = document.querySelectorAll(".menu-icon"),
overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
menuBtn.addEventListener("click", () => {
 navBar.classList.toggle("open");
});
});

overlay.addEventListener("click", () => {
navBar.classList.remove("open");
});



//fading in the video in the background

document.addEventListener('DOMContentLoaded', function() {
    var heroSection = document.getElementById('header');
    heroSection.classList.add('fade-in');
  });


//disabeling right click

document.getElementById('bg-video').addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
//---------------------------------------------
//---------------------------------------------


//--------------------------------------
// MESSENGER API POP UP
//----------------------------------------

// Your Chat Plugin code -->

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "106592624696896");
chatbox.setAttribute("attribution", "biz_inbox");

// Your SDK code -->

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v17.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



  
  
