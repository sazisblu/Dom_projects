// 3. DOM Manipulation

// a. Inline Styling
var title = document.querySelector("#main-heading");
console.log(title);
title.style.color = "cyan";

var listarray = document.getElementsByTagName("li");
console.log(listarray);

//listarray.array.style.backgroundColor="white";
/*when we use the .style method, the style is applied as inline style  and since the listarray is an array of elements inline css style cant be applied to it*/

for (var i = 0; i < listarray.length; i++) {
  listarray[i].style.color = "tomato";
  listarray[i].style.fontSize = "1rem";
}
/*Thus to apply CSS style to each of the array elements , we opt to use a for loop and access each element and apply such inline css style*/

/*Note: while CSS uses '-' in its property names, JS follows a different convention by using the CAMEL CASE(the first initial is lower case and all  the subsequent initials and uppercase)*/

// b. Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");
/*Alone this line of code is useless*/

console.log("Before appending");
console.log(ul);

ul.append(li); /*For some reason append is not being recognised by my browser*/
/*By appending the newly created element, only then can we see the effect of element creation.*/
console.log("After appending");
console.log(ul);

//c. Modifying the Text Content
var firstlistele =
  document.querySelector(
    "li"
  ); /*This selects the first li tag that appears in the document*/
console.log(firstlistele);
firstlistele =
  listarray[0]; /*You may make use of the array var you created before*/
console.log(firstlistele);

/*Three different ways of accessing the text content exist, each have their own unique property*/
console.log(
  firstlistele.textContent
); /*textContent Shows how the text was written inside the tags*/
console.log(
  firstlistele.innerHTML
); /*innerHTML Shows how the text was written inside the tags plus any other html element inside the tags*/
console.log(
  firstlistele.innerText
); /*innerText Shows the text as displayed in the webpage*/

firstlistele.textContent = "Stanley the Goat";
firstlistele.innerText = "DCU-n't";
/*Use the innertext and textcontent instead of the innerhtml while modifying the text */

/*add text to the new element*/
li.innerText = "saw";

//d. Modifying the Attrubutes and Classes

/*we may set pre-existing attributes like id anc class names to newly created elements to duplicate the CSS Styles that were used previously*/

li.setAttribute("id", "main-heading");
li.removeAttribute("id");
li.setAttribute("class", "list-items");

/*To get Attibute*/
console.log(li.getAttribute("class"));
li.removeAttribute("class", "list-items");

/*To deal solely with classes only*/
li.classList.add("list-items");
console.log(li.getAttribute("class"));

/*Checks the presence of Class in an element*/
console.log(li.classList.contains("list-items"));

//e. Remove Elements

var newdiv = document.createElement("div");
var container = document.querySelector("div");
newdiv.innerText = "Meow";
newdiv.setAttribute("class", "list-items");
container.append(newdiv);

/*Remove this unnecessary DIV*/
newdiv.remove();
