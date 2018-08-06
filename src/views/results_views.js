const PubSub = require('../helpers/pub_sub.js');


const ResultView = function () {

}

 ResultView.prototype.bindEvents = function (){
   PubSub.subscribe('WordCounter:result', (evt) => {
     const result = evt.detail;
     this.updateView(result);
   });

   ResultView.prototype.updateView = function(result) {
     const resultElement = document.querySelector('#wordcounter-form');
     resultElement.addEventListener('submit', (event) => {
       event.preventDefault();
       const results = document.querySelector('#result');

     if (result !== ''){
       results.textContent =`Your word count is: ` + result;
     }
     else {
       results.textContent = "You did not input any text!"
     }
   });
   }
 }

 module.exports = ResultView;
