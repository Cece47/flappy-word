//index of common words
var index =
  ["the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"];

index = filterArray(index);

var randomWord = getRandomWord();

var btn = document.querySelector('.input-form');

btn.addEventListener('submit', processGuess);

function processGuess(e) {
  e.preventDefault();
  e.stopPropagation();

  var letterGuess = document.querySelector('.guess');

  alert(letterGuess.value);
}
//filtering words
function filterArray (flappyWords){
  var filteredWords = [];
 for(var i=0; i < flappyWords.length; i++) {
  var selectedWord = flappyWords[i];
   if (selectedWord.length > 2){
     filteredWords.push(selectedWord);
   }
 }
  return filteredWords;
}
//using filtered words to select word randomly
function getRandomWord (){
  var randomIndex = Math.floor(Math.random() * index.length);
return index[randomIndex];
}
//splitting the letters out of the word to compare
var splitArray = randomWord.split("");
console.log(splitArray);

var blank = [];

function createDash(arr){
  var dashArray = [];

  for (var i=0; i < arr.length; i++) {
     dashArray.push('_');
   }
  document.querySelector(".computer-graphics").textContent = dashArray.join(' ');
}

console.log(createDash(splitArray));

// function compareWords (){
// var words = parseInt(letterGuess.value);
// console.log (words);
// alert(compare(words, flappyWords));
// }

// function displayGuess {

// };

// function
//var hangmanWords = {
  //insert all the words here - filter out all //one-letter and two-letter words
//};

//hints hints hints!!
//1. sanatization 2. choose random word 3. display letter count underline thingys 4. get guesses from user 5. detect if guess is in the word 6. display the letter on the screen at the correct positions

//data structures: - array of strings (words), - store word as array of chars, - store the dashes as an array,

//showing an array or hash of letters already guessed

//document.querySelector('form').addEventListener('submit', //function(e))

//function chooseRandomWord(){
  //var index = Math.floor
