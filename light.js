var Light = function(id, color) {

  //get the target element to render the light into
  var elem = document.getElementById(id);
  elem.classList.add('light-background');

  //append a div into the target element
  var lightElem = document.createElement('div');
  lightElem.classList.add('light');
  lightElem.classList.add(color);
  elem.appendChild(lightElem);

  this.on = function() {
    lightElem.classList.add('on');
  };
  this.off = function() {
    lightElem.classList.remove('on');
  }
  this.blink = function() {
    greenLight.on();
    setTimeout(function() {
      greenLight.off();
    }, 3000);
    orangeLight.on();
    setTimeout(function() {
      orangeLight.off();
    }, 3000);
    redLight.on();
    setTimeout(function() {
      redLight.off();
    }, 3000);
  }

}

var greenLight = new Light('light', 'green');
var orangeLight = new Light('light', 'orange');
var redLight = new Light('light', 'red');
// greenLight.blink();
// orangeLight.blink();
// redLight.blink();

var blinkBtn = document.querySelector('.blinkBtn');
var goBtn = document.querySelector('.goBtn');
var warningBtn = document.querySelector('.warningBtn');
var stopBtn = document.querySelector('.stopBtn');

blinkBtn.addEventListener('click', function(){
    // let the light blink
    greenLight.blink();
    this.blink = function() {
      greenLight.on();
      setTimeout(function() {
        greenLight.off();
      }, 1000);
      orangeLight.blink();
      orangeLight.on();
      setTimeout(function() {
        orangeLight.off();
      }, 1000);
      redLight.blink();
      redLight.on();
      setTimeout(function() {
        redLight.off();
      }, 1000);
    }
});

goBtn.addEventListener('click', function(){
    greenLight.on();
    orangeLight.off();
    redLight.off();
});

warningBtn.addEventListener('click', function(){
    orangeLight.on();
    greenLight.off();
    redLight.off();
});

stopBtn.addEventListener('click', function(){
    redLight.on();
    greenLight.off();
    orangeLight.off();
});
