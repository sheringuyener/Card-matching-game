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

var firstCard = null;
var secondCard = null; 
var flippedTwo = false;

function flipOverCards(event){
  if (event.target.alt.includes('back')){
    if (flippedTwo == false && firstCard == null){
      firstCard = event.target.id;
      flippedTwo = true;
      event.target.src = sources[imageMatch[event.target.id]].file;
      event.target.alt = sources[imageMatch[event.target.id]].file;
    }
  else if (flippedTwo == true){
    secondCard = event.target.id;
    flippedTwo = false;
    event.target.src = sources[imageMatch[event.target.id]].file;
    event.target.alt = sources[imageMatch[event.target.id]].alt;
    }

  
  console.log("first card: "+ firstCard);
  console.log("second card: " + secondCard);

  /*
  var flipBack=setTimeout(function(){
    event.target.src = 'back.gif';
    event.target.alt = 'back';
  }, 1000);
  flipBack; */
}
}
document.getElementById('board').addEventListener('click', flipOverCards, false);