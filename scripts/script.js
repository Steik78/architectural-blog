/******************************Start scroll to section modern*********************************/
var modern = document.querySelector('#modern')
modern.addEventListener('click', function(){
      window.scroll(0, 910);
})
 
/******************************End scroll to section modern*********************************/
/******************************Start scroll to section vintage*********************************/
var vintage = document.querySelector('#vintage')
vintage.addEventListener('click', function(){
      window.scroll(0, 1780);
})
 
/******************************End scroll to section vintage*********************************/
/******************************Start scroll to section news*********************************/
var news = document.querySelector('#news')
news.addEventListener('click', function(){
      window.scroll(0, 2750);
})
 
/******************************End scroll to section news*********************************/
/****************************************************************/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow-list");
  var dots = document.getElementsByClassName("dot-list");
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
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
/*********************************************************************/
var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("architectural-list");
  var dots = document.getElementsByClassName("dot-list-white");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active1";
}


/**********************Start btn up*************************/ 
window.onscroll = function() {
  myFunction()
};
var btn_up = document.querySelector('.btn_up')            
function myFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      btn_up.classList.add('show_btn_up')   
  }else if(document.body.scrollTop < 900 || document.documentElement.scrollTop < 900){
      btn_up.classList.remove('show_btn_up')
  }
}
 


 
function up() {
  var t;
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
/**********************End btn up*************************/            