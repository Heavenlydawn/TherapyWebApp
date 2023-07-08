   // Get the elements
   const navToggle = document.querySelector(".bars");
   const navMenu = document.querySelector(".links");
   // Add event listener to the toggle button
   navToggle.addEventListener("click", () => {
     // Toggle the 'active' class on the menu
     navMenu.classList.toggle("active");
   });