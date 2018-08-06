const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.countOfWords = function (string) {
  return string.trim().split(/\s+/).length;


};

WordCounter.prototype.bindEvents = function() {
  PubSub.subscribe("InputVeiw:text-inputted", (evt) => {
    const inputtedText = evt.detail;
    const result = this.countOfWords(inputtedText);
    PubSub.publish("WordCounter:result", result);
  });
}

module.exports = WordCounter;
