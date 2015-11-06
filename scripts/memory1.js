/*
 * CS 22 A - JavaScript for Programmers
 * Memory Matching Game - Template
 */
'use strict';

// The array below contains the images'file names 
// with the corresponding alt attribute
// Your implementation should work with any such sources array provided
// Do not duplicate the information in this array elsewhere in the program.
var sources = [
  {
    file: 'circle.gif',
    alt: 'red circle'
  },
  {
    file: 'square.gif',
    alt: 'green square'
  },
  {
    file: 'rectangle.gif',
    alt: 'pink rectangle'
  },
  {
    file: 'oval.gif',
    alt: 'purple oval'
  },
  {
    file: 'arrow.gif',
    alt: 'teal arrow'
  },
  {
    file: 'triangle.gif',
    alt: 'white triangle'
  },
  {
    file: 'diamond.gif',
    alt: 'yellow diamond'
  },
  {
    file: 'octagon.gif',
    alt: 'blue octagon'
  },
];
  
// The method below may be called on any array
// to shuffle it in place.
Array.prototype.shuffle = function () {
  var i = this.length;
  var j;
  if (i === 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    // swap the two array elements
    [this[i], this[j]] = [this[j],this[i]];
  }
  return this;
}

var deck = [];
//Assigning each source a number in an array -- desk
for (var i = 0; i < sources.length; i++){
  deck = deck + i;
  deck = deck + i; 
};

deck = deck.split('');
for (var i = 0; i < deck.length; i++){
  deck[i]=Number(deck[i]);
}

//Shuffling the deck
deck = deck.shuffle();

//Creating an object that maps card elements to shuffled deck --imageMatch
var imageMatch = Object.create(Object.prototype);
for (var i = 0; i < deck.length; i++){
  imageMatch["card_"+i]=deck[i]; //card_0 = sources[1], card_1 = sources[7]...
};
/*
function faceUp(event){
  event.target.src = sources[imageMatch[event.target.id]].file;
  event.target.alt = sources[imageMatch[event.target.id]].alt;
}*/

/*
function faceDown(event){
  event.target.src = 'back.gif';
  event.target.alt = 'back';
}*/

var flipped = null;
var counter =0;
var clickedCards = [];

function matching(event){
  if (event.target.alt.includes('back')){
    if (clickedCards.length==0){
      if (flipped ==null){
        flipped = event.target;
      }
      console.log("flipped.id: "+flipped.id);
      console.log("sources[imageMatch[flipped.id]].file: " + sources[imageMatch[flipped.id]].file);
      event.target.src = sources[imageMatch[flipped.id]].file;
      event.target.alt = sources[imageMatch[flipped.id]].alt;
      clickedCards.push(imageMatch[flipped.id]);
    }
    else if (clickedCards.length == 1){
      event.target.src = sources[imageMatch[event.target.id]].file;
      event.target.alt = sources[imageMatch[event.target.id]].alt;
      console.log("current: "+event.target.id); 
      clickedCards.push(imageMatch[event.target.id]);
      if (flipped !== null){
        if(flipped.id !== event.target.id && imageMatch[flipped.id] == imageMatch[event.target.id]){
          console.log("we have a match");
          //counter+=1;
          setTimeout(function(){
            document.getElementById(flipped.id).className = "matched";
            document.getElementById(event.target.id).className = "matched";
            counter+=1;
            if (counter==8){
              document.getElementById('message').textContent="All matched";
              document.getElementById('board').className='win'; 
            }
            reset();},1000);  
        }
        else{
          console.log("not a match");
          console.log("Flipped.src before: "+ flipped.src + "\nCurrent.src before: " + event.target.src);
          setTimeout(function(){flipped.src = 'back.gif';
            flipped.alt = 'back';
            event.target.src = 'back.gif';
            event.target.alt = 'back';
            console.log("Flipped.src after: "+ flipped.src + "\nCurrent.src after: " + event.target.src);
            reset();},1000);

          console.log("Flipped.src after: "+ flipped.src + "\nCurrent.src after: " + event.target.src);
        } 
      }
    }
  }

}
function reset(){
  flipped = null;
  clickedCards.length=0;
}

 
document.getElementById('board').addEventListener('click', matching, false);


