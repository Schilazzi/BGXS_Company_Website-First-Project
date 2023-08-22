
//-------------------------site logo for returing home---------------------------
// this is the shortcut for returning to the header section/ home page when the is somewhen within the page
 
 const siteLogo = document.getElementById('Site_logo');
 const headerSection = document.getElementById('header');


 siteLogo.addEventListener('click', (event) => {
   event.preventDefault();
   // Scroll smoothly to the header section
   headerSection.scrollIntoView({ behavior: 'smooth' });
 });

 
 const contactUs = document.querySelector('.contact-button');
 const contactSection = document.getElementById('Contact');

 contactUs.addEventListener('click', (event) => {
  event.preventDefault();
  // Scroll smoothly to the header section
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

const featuredProjects = document.querySelector('.featured-button');
const featuredSection = document.getElementById('featured_projects');

featuredProjects.addEventListener('click', (event) => {
 event.preventDefault();
 // Scroll smoothly to the featured section
 featuredSection.scrollIntoView({ behavior: 'smooth' });
});



 //grid icon links to page section
  document.addEventListener('DOMContentLoaded', function() {
        const gridIcons = document.querySelectorAll('.grid a');
        

        gridIcons.forEach((gridIcon) => {
            gridIcon.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedId = gridIcon.getAttribute('href');
            const targetSecId = document.querySelector(selectedId);
            
            if (targetSecId) {
              targetSecId.scrollIntoView({ behavior: 'smooth' });
          }
      
        });
    });
  });
    




// -------------------sidebar--------------------------
// This focuses on the opening of the sidear when the hamburger menu is clicked
// Also closes the sidebar if user click outside the sidebar

const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open");
});
});

overlay.addEventListener("click", () => {
navBar.classList.remove("open");
});

// -------------------sidebar Menu links--------------------------
// When clicking on the sidebar menu this will navigate to the coressponding section in the page and close the sidebar simultaneously.



document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('#sidebarMenu a');
  const sidebar = document.querySelector('.sidebar');

  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = menuItem.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });

        sidebar.addEventListener("click", () => {
          navBar.classList.remove("open");
          });
      }
    });
  });
});                                           

//-------------------------------------------------
//smooth transistion to external link with the page
//-------------------------------------------------

function redirectToHome() {
  document.body.style.opacity = '0'; // Set the body opacity to 0 for the fade-out effect

  // Wait for the transition to complete
  setTimeout(function() {
    try {
      window.location.href = 'Video Editing.html'; // Redirect to homesamp.html
    } catch (error) {
      console.error('Error redirecting to Video Editing.html:', error);
    }
  }, 100); // Adjust the duration (in milliseconds) based on your desired transition time

  // Set body opacity back to 1 after the transition completes
  setTimeout(function() {
    document.body.style.opacity = '1';
  }, 500); // Adjust the duration (in milliseconds) based on your desired fade-in time
}

document.addEventListener('DOMContentLoaded', function() {
  let clickMeButton = document.getElementById('call_button');

  if (clickMeButton) {
    clickMeButton.addEventListener('click', function(event) {
      event.preventDefault();
      redirectToHome();
    });
  }
});



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