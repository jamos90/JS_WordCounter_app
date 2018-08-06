const PubSub = require('../helpers/pub_sub.js');

const InputText = function () {

}

  InputText.prototype.bindEvents = function (){
    const input = document.querySelector('#text');
    input.addEventListener('input', (evt) =>{
      const inputtedText = evt.target.value;
      PubSub.publish("InputVeiw:text-inputted", inputtedText);
    });

  }

  module.exports = InputText;
