//var myHardwork= prompt('Welcome to NSSF ');
//alert('Hello welcome to URA');
const menu=document.querySelector('#mobile__menu');
const menulinks=document.querySelector('.navbar__menu');
const navLogo=document.querySelector('#navbar__logo');
const mobileMenu=()=>{
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}
//menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos =window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth >960 && scrollPos< 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight'); 
        servicesMenu.classList.remove('highlight');
        return  
    }else if(window.innerWidth > 960 && scrollPos< 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return   
    }
    if((elem && window.innerWIdth < 960 && scrollPos< 600) || elem){
        elem.classList.remove('highlight');
    }
}
window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

