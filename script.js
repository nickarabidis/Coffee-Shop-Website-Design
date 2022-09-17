// ---HOME---


document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick= () =>{
        var src= images.getAttribute('src');
        document.querySelector('.main-home-image').src=src;
    };
});

// ---REVIEW---

 var swiper = new Swiper('.swiper-container', {
     spaceBetween: 20 ,
     loop:true,
     grabCursor : true,
     autoplay : {
         delay : 7500,
         disableOnInteraction : false,
     },
     pagination: {
         el:'.swiper-pagination',
         clickable: true
     },
     breakpoints : {
         0: {
             slidesPerView:1 ,
         },
         768 : {
             slidesPerView : 2,
         },
     },
 });

// ---RESPONSIVE---

let menu= document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

Window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};