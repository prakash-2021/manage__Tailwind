tailwind.config = {
    theme: {
      extend: {
        colors:{
            'bright-red': 'hsl(12, 88%, 59%)',
            'dark-blue': 'hsl(228, 39%, 23%)',
            'dark-grayish-blue': 'hsl(227, 12%, 61%)',
            'very-dark-blur': 'hsl(233, 12%, 13%)',
            'very-pale-red': 'hsl(13, 100%, 96%)',
            'very-light-gray': 'hsl(0, 0%, 98%)',
          },
          container: {
            center: true,
            screens: {
              sm: '600px',
              md: '728px',
              lg: '984px',
              xl: '1200px',
            },
          },
      }
    }
  }

  document.getElementById('swiper-pagination').classList.add('bottom-auto');
  let emailBox = document.getElementById('emailBox');
  let emailText = document.getElementById('emailText');
  let emailBtn = document.getElementById('emailBtn');
  emailText.classList.add('hidden');
  emailBtn.addEventListener('click', function(){
    let inputValue = emailBox.value;
    
    if(inputValue.includes("@")){
      emailBox.value = "";
      emailText.classList.add('hidden');
      emailBox.style.border = "0px solid hsl(12, 88%, 59%)"
    }
    else{
      emailText.classList.remove('hidden');
      emailBox.style.border = "2px solid hsl(12, 88%, 59%)"
      emailBox.style.color = "hsl(12, 88%, 59%)"
    }
  })




  let hamIcon = document.getElementById('hamIcon');
  let navLinks = document.getElementById('navLinks');
  let overlay = document.getElementById('overlay');
  

  hamIcon.addEventListener('click', function(){
    let mySrc = hamIcon.getAttribute('src');
    
    if(navLinks.style.display === "none" && mySrc === '../images/icon-hamburger.svg'){
      navLinks.style.display = "block";
      overlay.style.background = "linear-gradient(hsla(223, 20%, 93%, 0.4), hsla(210, 1%, 40%, 0.8))";
      hamIcon.setAttribute('src','../images/icon-close.svg');
    }
    else{
      
      navLinks.style.display = "none"
      overlay.style.background = "none"
      hamIcon.setAttribute('src','../images/icon-hamburger.svg');
    }
  })







  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  });




  