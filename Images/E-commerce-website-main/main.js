// show loadig while loading the condent 
window.addEventListener('load',function(){
  setTimeout(()=>{
document.getElementById('loader').style.display = "none";
document.getElementById('loading_content').style.display = "block";
  },200)
})


// Top Close js 
 const closeIcon = document.getElementById('close_icon');
 const topHeader = document.getElementById('top_header');
 const borderBottom = document.querySelector('.border_bottom');

 closeIcon.addEventListener('click', () => {
   topHeader.style.display = 'none'; 
   topHeader.style.padding = '0'; 
   borderBottom.style.border = 'none';
 });


//  search icon show hide 
 let searchIcon = document.querySelector('#search');
 let searchBox = document.getElementById('search_box');
 let closeBtn = document.getElementById('close_search_icon')
 
 searchIcon.onclick = () => {
   searchBox.classList.toggle('open');
 };

 closeBtn.onclick = () => {
  searchBox.classList.toggle('open');
 }


//  Onclick Show and hide menu links
let menuBar = document.querySelector('.menu_bar');
let navLink = document.querySelector('.nav_links');
let cross = document.querySelector('.bx-menu');

menuBar.onclick = () =>{
  if (navLink.style.opacity === '0'  || navLink.style.opacity === '') {
    navLink.style.opacity = '1';
    navLink.style.visibility ="visible";
    cross.classList.add('bx-x');
    cross.classList.remove('bx-menu');
    cross.classList.add('flip');
  }
  else{
    navLink.style.opacity = '0';
    navLink.style.visibility ="hidden";
    cross.classList.add('bx-menu');
    cross.classList.remove('bx-x');
    cross.classList.remove('flip');
  }
  
}

// Swiper js slider home slider 
var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// trending section slider Js
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".trending_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  },
  breakpoints: {
    0: { // For screen sizes smaller than 640px
      slidesPerView: 1,
      spaceBetween: 10, // You can adjust this
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});

  
// Active link in the trending section
let trendingLinks = document.querySelectorAll('.trending_links li a'); // Select <a> elements inside the <li>
trendingLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all links
    trendingLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    link.classList.add('active');
  });
});


// Testnomial section  sider 
var swiper = new Swiper(".testinomial_slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


 // Get the current year
 const currentYear = new Date().getFullYear();
  
 // Insert the current year into the span with id "year"
 document.getElementById('year').textContent = currentYear;


//  top scroll JS
 let topBar = document.querySelector('.top_bar');

 window.addEventListener('scroll',()=>{
if(window.scrollY > 150)
{
  topBar.style.display ="flex";
}
else{
  topBar.style.display= "none";
}
 });


//  onclick scroll to top 
 topBar.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
 });


 // Get the navbar element
const navbar = document.getElementById("navbar");

// Add or remove the 'sticky' class when scrolling
window.addEventListener("scroll", function() {
  if (window.scrollY > 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


// *******  page navigation color change ******* 

// Get the current page URL
const currentPage = window.location.pathname;
console.log(currentPage); // Debug the current page path

// Select the cart icon link
const cartIcon = document.querySelector('.bx-cart');
if (cartIcon) {
  if (currentPage.includes('cart.html')) {
    // Add the 'active_cart' class to make the icon red
    cartIcon.classList.add('active_cart');
  } else {
    cartIcon.classList.remove('active_cart');
  }
}

// Handle the contact page navigation
const contactPage = document.getElementById('contact');
if (contactPage) {
  if (currentPage.includes('contact.html')) {
    contactPage.classList.add('contact');
  } else {
    contactPage.classList.remove('contact');
  }
}

// Handle the home page navigation
const homePage = document.getElementById('home');
if (homePage) {
  if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '/index.html') {
    homePage.classList.add('home');
  } else {
    homePage.classList.remove('home');
  }
}
// Handle the men page navigation
const menPage = document.getElementById('menLink');
if (menPage) {
  if (currentPage.includes('men.html')) {
    menPage.classList.add('menActive');
  } else {
    menPage.classList.remove('menActive');
  }
}

// Handle the women page navigation
const womenPage = document.getElementById('womenLink');
if (womenPage) {
  if (currentPage.includes('women.html')) {
    womenPage.classList.add('womenActive');
  } else {
    womenPage.classList.remove('womenActive');
  }
}

const productDetail = document.getElementById('ProductDetailLink');
if (productDetail) {
  if (currentPage.includes('productDetail.html')) {
    productDetail.classList.add('productDetailActive');
  } else {
    productDetail.classList.remove('productDetailActive');
  }
}


const baby = document.getElementById('baby');
if (baby) {
  if (currentPage.includes('baby.html')) {
    baby.classList.add('babyActive');
  } else {
    baby.classList.remove('babyActive');
  }
}


