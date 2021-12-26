/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__img, .new__container, .footer__container`)
sr.reveal(`.home__data`, {delay: 500})
sr.reveal(`.giving__content, .gift__card`,{interval: 100})
sr.reveal(`.celebrate__data, .message__form, .footer__img1`,{origin: 'left'})
sr.reveal(`.celebrate__img, .message__img, .footer__img2`,{origin: 'right'})

/* lấy phần tử modal */
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

btn2.onclick = function() {
    modal2.style.display = "block";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

  btn3.onclick = function() {
    modal3.style.display = "block";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

  btn4.onclick = function() {
    modal4.style.display = "block";
  }
  span4.onclick = function() {
    modal4.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  }

  btn5.onclick = function() {
    modal5.style.display = "block";
  }
  span5.onclick = function() {
    modal5.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal5) {
      modal5.style.display = "none";
    }
  }

  btn6.onclick = function() {
    modal6.style.display = "block";
  }
  span6.onclick = function() {
    modal6.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal6) {
      modal6.style.display = "none";
    }
  }

  btn7.onclick = function() {
    modal7.style.display = "block";
  }
  span7.onclick = function() {
    modal7.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal7) {
      modal7.style.display = "none";
    }
  }