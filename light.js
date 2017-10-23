var Light = function(id, color) {

  var elem = document.getElementById(id);
  elem.classList.add('light-background');

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
    setInterval(function() {

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
    }, 2000)

  }
}

var greenLight = new Light('light', 'green');
var orangeLight = new Light('light', 'orange');
var redLight = new Light('light', 'red');

var blinkBtn = document.querySelector('.blinkBtn');
var goBtn = document.querySelector('.goBtn');
var warningBtn = document.querySelector('.warningBtn');
var stopBtn = document.querySelector('.stopBtn');

blinkBtn.addEventListener('click', function() {

  greenLight.blink();
  orangeLight.blink();
  redLight.blink();

});

goBtn.addEventListener('click', function() {
  greenLight.on();
  orangeLight.off();
  redLight.off();
});

warningBtn.addEventListener('click', function() {
  orangeLight.on();
  greenLight.off();
  redLight.off();
});

stopBtn.addEventListener('click', function() {
  redLight.on();
  greenLight.off();
  orangeLight.off();
});
