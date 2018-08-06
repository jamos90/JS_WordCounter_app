const InputVeiw = require('./views/input_view.js');
const PubSub = require('./helpers/pub_sub.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const inputView = new InputVeiw;
  inputView.bindEvents();

});
