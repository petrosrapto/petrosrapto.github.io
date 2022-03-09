/* make the background image stretch all the way across the screen */

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

window.onload = function () {

var temp = []; // temperature dataPoints
var humi = []; // humidity dataPoints
var firstChart = new CanvasJS.Chart("firstChart", {
	title :{
		//text: "Temperature"
	},
	data: [{
		type: "line",
		dataPoints: temp
	}]
});

var secondChart = new CanvasJS.Chart("secondChart", {
  animationEnabled: true,
	title :{
		//text: "Humidity"
	},
	data: [{
		type: "line",
		dataPoints: humi
	}]
});

var xVal = 0;
var yTemp = 100;
var yHumi = 100;
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

/*function addData(data) {
	for (var i = 0; i < data.length; i++) {
		humi.push({
			x: i,
			y: data[i].humi
		});
	}
	secondChart.render();

}*/

var updateChart = function (count) {

	count = count || 1;
  /* expr1 || expr2 If expr1 can be converted to true, returns expr1; else, returns expr2
  Examples of expressions that can be converted to false are:
  null, NaN, 0, empty string ("" or '' or ``), undefined.*/

	for (var j = 0; j < count; j++) {
		yTemp = yTemp +  Math.round(5 + Math.random() *(-5-5));
    yHumi = yHumi +  Math.round(5 + Math.random() *(-5-5));
		temp.push({
			x: xVal,
			y: yTemp
		});
    humi.push({
      x: xVal,
      y: yHumi
    });
		xVal++;
	}

	if (temp.length > dataLength) {
		temp.shift();
	}

  if (humi.length > dataLength) {
		humi.shift();
	}

	firstChart.render();
  secondChart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);
// The setInterval() method calls a function or evaluates an expression at specified intervals (in ms).

//setInterval(function(){}, updateInterval);
//$.getJSON("output.json", addData);

}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
