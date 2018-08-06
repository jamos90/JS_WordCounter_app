const PubSub = require('../helpers/pub_sub.js');


const ResultView = function () {

}

 ResultView.prototype.bindEvents = function (){
   PubSub.subscribe('WordCounter:result', (evt) => {
     const result = evt.detail;
     this.updateView(result);
   });

   ResultView.prototype.updateView = function(result) {
     const resultElement = document.querySelector('#result');
     if (result !== ''){
       resultElement.textContent =`Your word count is: ` + result;
     }
     else {
       resultElement.textContent = "You did not input any text!"
     }
   }
 }

 module.exports = ResultView;
