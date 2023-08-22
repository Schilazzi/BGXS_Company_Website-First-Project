/*document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    for (const link of navLinks) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });*/
  
  /*document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetLink = link.getAttribute('href');
        const targetSection = document.querySelector(targetLink);
        
        if (targetSection){
        targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });*/

  document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('nav a');
        const logoLink = document.querySelector('.logo a'); // Get the logo link

        function scrollToSection(event, targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        navLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
            const targetSection = document.querySelector(link.getAttribute('href'));
            scrollToSection(event, targetSection);
            });
        });

        // Add smooth scroll to the logo link
        logoLink.addEventListener('click', function (event) {
            const targetSection = document.querySelector(logoLink.getAttribute('href'));
            scrollToSection(event, targetSection);
        });
   });

  