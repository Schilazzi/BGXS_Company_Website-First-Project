

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


  
  
