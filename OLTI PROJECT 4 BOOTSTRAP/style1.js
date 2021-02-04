var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}$('li').click(function(e) {
  // Prevent default action (e.g. jumping to top of page)
  e.preventDefault();
  // Create a variable with the link found in the list-item
  var link = $(this).children('a');      
  // Animate the document
  $('html,body').animate({
    // Gets the href from the link ('slideX') and scrolls to it on the page.
    scrollTop: $(link.attr('href')).offset().top
    // 'slow'(600ms) can be replaced by 'fast'(200ms) or a number in ms.
    // The default is 400ms
  }, 'slow');
})