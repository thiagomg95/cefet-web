var spec = require('specificity'),

    SpecificatorTabajara = function(inputEl, outputAEl, outputBEl,
      outputCEl, buttonEl) {
      this.inputEl = inputEl;
      this.outputAEl = outputAEl;
      this.outputBEl = outputBEl;
      this.outputCEl = outputCEl;
      this.buttonEl = buttonEl;
    };

// attaches the event handlers
SpecificatorTabajara.prototype.start = function() {
  var specificator = this;
  this.buttonEl.onclick = function() {
    specificator.calculate();
  };
};

SpecificatorTabajara.prototype.calculate = function() {
  // gets the value from the input
  var input = this.inputEl.value,
      result = spec.calculate(input)[0],
      specificity;

  if (result && result.specificity) {
    result = result.specificity.split(',');
  } else {
    result = [0, 0, 0, 0];
  }

  // sets the value of the 3 outputs
  this.outputAEl.innerHTML = result[1];
  this.outputBEl.innerHTML = result[2];
  this.outputCEl.innerHTML = result[3];
};


module.exports = SpecificatorTabajara;