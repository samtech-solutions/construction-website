let navbar = document.querySelector(".header .navbar");
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('.active');
};

window.onload= () =>{
    navbar.classList.remove('.active'); 
};