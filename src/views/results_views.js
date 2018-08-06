
const ResultView = function () {

}

 ResultView.prototype.bindEvents = function (){
   PubSub.subscribe('WordCounter:result', (evt) => {
     const result = evt.detail;
   });

   ResultView.prototype.updateView = function(result) {
     const resultElement = document.querySelector('#result');
     if (result !== ' '){
       `Your word count is: ${result}`;
     }


   }
 }
