//variables

var btn = document.querySelector("#change");
console.log(btn);
var quote = document.querySelector("#textarea");
console.log(quote.innerText);
var person = document.querySelector("#person");
console.log(person.innerText);

var quotearray = [
  {
    quote: '"I wish I was the Monster you think I am...."',
    person: "Tyrion Lanister",
  },
  { quote: '"Carpe Diem!"', person: "The Dead Poets" },
  { quote: '"He\'s a Friend from Work"', person: "Thor" },
  {
    quote: '"In case i dont see ya, good morning , good evening , good night."',
    person: "Truman",
  },
  { quote: '"Do you like the smiths"', person: "Summer" },
  {
    quote: '"All you had to do was follow the Damn Train,CJ"',
    person: "Big smoke",
  },
  { quote: '"Get out of me Swamp"', person: "Shrek" },
  { quote: '"MotherFucker"', person: "Samuel .l Jackson" },
  {
    quote: '"Do you believe in Gravity"',
    person: "Father Pucci",
  },
  {
    quote: '"Oraaa Oraaa Oraaa Oraaa Oraaa....."',
    person: "Jotaro/Star platinium",
  },
  {
    quote:
      '"Distracted by a single leaf,you miss a whole tree, clinged to a single tree, you miss the whole forest"',
    person: "Miyamoto Mushashi",
  },
];

const changequote = () => {
  console.log("Button Clicked");
  var random = Math.floor(Math.random() * quotearray.length);
  console.log(random);
  quote.innerText = quotearray[random].quote;
  person.innerText = quotearray[random].person;
};
btn.addEventListener("click", changequote);
