const WordCounter = function () {

};

WordCounter.prototype.countOfWords = function (string) {
  const wordCount = string.trim().split(/\s+/).length;
  console.log(wordCount);
};

WordCounter.prototype.bindEvents = function() {
  PubSub.subscribe("InputVeiw:text-inputted", (evt) => {
    const inputtedText = evt.detail;
    const result = this.countOfWords(inputtedText);
    PubSub.publish("WordCounter:result", result);
  });
}

module.exports = WordCounter;
