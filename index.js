// Define constants and query selectors
const mobileNavButton = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
const links = document.querySelectorAll(".header .navbar .navbar-list li");
const loader = document.getElementById('loading');
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeqRCyDCUkcQHm78ZHnvDy9vekLsILnhHFcr1JV4wyMaGamAF2TcujryZq8cbh1rgP/exec';
const form = document.forms['submit-to-google-sheet'];

// Function to toggle the navigation
const toggleNavbar = () => {
  navHeader.classList.toggle("active");
};

// Function to hide the navigation
const removeNavbar = () => {
  navHeader.classList.remove("active");
};

// Event listeners for link clicks
links.forEach((li) => {
  li.addEventListener("click", removeNavbar);
});

// Event listener for mobile nav button
mobileNavButton.addEventListener("click", toggleNavbar);

// Function to turn off the loader
function turnOffLoader() {
  loader.style.display = 'none';
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);
      form.reset();
    })
    .catch((error) => {
      console.error('Error!', error.message);
    });
});
