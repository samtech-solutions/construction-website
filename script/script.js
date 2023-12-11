let navBar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form'); 

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};

window.onscroll = () =>{
    navBar.classList.remove('active'); 
};
window.onscroll = () =>{
    searchForm.classList.remove('active'); 
};