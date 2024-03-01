document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    
    // Listen for the 'ended' event
    video.addEventListener('ended', function () {
        // When the video ends, play it again
        video.play();
    });
  });

  /*let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slides img');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}*/
