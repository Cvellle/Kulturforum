
var slider = document.getElementsByClassName('slider');
var dropbtn = document.querySelectorAll(".dropbtn");

dropbtn.forEach(el => el.addEventListener('mouseenter', toggleSlider));

function toggleSlider(){
	if (!event.target.matches('.slider')) {  
    var th = this.nextElementSibling.firstElementChild;
  
    if (th.classList.contains('opened')) {
        th.classList.remove('opened');
        th.classList.add('closed');
      
    } else {
        th.classList.remove('closed');
        th.classList.add('opened');
      
        $(this).parent().siblings().children().children().removeClass("opened");
        $(this).parent().siblings().children().children().addClass("closed");
	$(this).parent().siblings().children().children().style.backgroundColor = "black";
    }

  }

}


window.onmouseover = function(event) {
	event.stopPropagation();
	capture:false;
   if (!event.target.matches('.dropdowncont, .slider')) {   	   
    var i;
    for (i = 0; i < slider.length; i++) {
      var openDropdown = slider[i];
      if (openDropdown.classList.contains('opened')) {
        openDropdown.classList.remove('opened')
        openDropdown.classList.add('closed');
      }
    }
  }
}


var sliderTrack = document.querySelectorAll('.slider>a');

function keepSlider(event) {
	event.stopPropagation();
	this.parentNode.classList.remove('closed');
    this.parentNode.classList.add('opened');
}

sliderTrack.forEach(sl=>sl.addEventListener('mouseenter', keepSlider));




const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener("click", closeNav);

function openNav() {
    document.getElementById("canvas").style.width = "100%";
}
function closeNav() {
    document.getElementById("canvas").style.width = "0%";
}
  

  
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
  
  currentSlide += 1;
	if (currentSlide >= slides.length) {
		currentSlide=0;
	}
  
	slides[currentSlide].className = 'slide showing';
    
}

var playing = true;
var pauseButton = document.getElementById('pause');


function playSlideshow(){
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(nextSlide,3500);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

