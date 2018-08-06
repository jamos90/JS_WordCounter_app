const InputVeiw = require('./views/input_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const inputView = new InputVeiw;
  inputView.bindEvents();
});
