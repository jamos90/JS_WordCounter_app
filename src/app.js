const InputView = require('./views/input_view.js');
const PubSub = require('./helpers/pub_sub.js');
const ResultView = require('./views/results_views.js');
const WordCounter = require('./models/word_counter.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const inputView = new InputView;
  inputView.bindEvents();

  const resultView = new ResultView;
  resultView.bindEvents();

  const wordCounter = new WordCounter;
  wordCounter.bindEvents();

});
