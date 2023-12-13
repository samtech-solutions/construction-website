
let navBar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form'); 
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active'); 
    searchForm.classList.remove('active'); 
    contactInfo.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');  
    contactInfo.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
    navBar.classList.remove('active'); 
    searchForm.classList.remove('active'); 
};

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
};
window.onscroll = () =>{
    navBar.classList.remove('active'); 
    searchForm.classList.remove('active'); 
    contactInfo.classList.remove('active');
};



    