const WordCounter = function () {

};

WordCounter.prototype.countOfWords = function (string) {
  const wordCount = string.trim().split(/\s+/).length;
  console.log(wordCount);
};

WordCounter.prototype.bindEvents = function() {
  PubSub.subscribe("InputVeiw:text-inputted", () => {

  });
}

module.exports = WordCounter;
