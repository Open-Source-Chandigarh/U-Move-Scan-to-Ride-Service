const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
var links=document.querySelectorAll(".header .navbar .navbar-list li")
var loader = document.getElementById('loading');
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
}
const removeNavbar = () => {
    nav_header.classList.remove("active");
}

links.forEach((li) => {
  li.addEventListener("click", removeNavbar);
});
mobile_nav.addEventListener("click", () => toggleNavbar());
function loader_off(){
    loader.style.display='none';

}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyeqRCyDCUkcQHm78ZHnvDy9vekLsILnhHFcr1JV4wyMaGamAF2TcujryZq8cbh1rgP/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response),form.reset())
      .catch(error => console.error('Error!', error.message))
  })
