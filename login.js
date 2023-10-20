const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
  var loader = document.getElementById('loading');
  mobile_nav.addEventListener("click", () => toggleNavbar());
function loader_off(){
    loader.style.display='none';

}