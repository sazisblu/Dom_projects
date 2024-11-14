
//1. DOM Element Selection

// a. GetElementById()
    // var title=document.getElementById('main-heading');
    // console.log(title);

//b. GetElementByClassName()
    // var title=document.getElementsByClassName('container');
    // console.log(title);

//c. GetElementByTagname()
    // var title=document.getElementsByTagName('li');
    // console.log(title);

//d. queryselector()
    // var title=document.querySelector('div');//. if multiple items exist then it selects the first one
    // console.log(title);

//e. queryselectorall()
    //var title=document.querySelector('li');//it selects all the li elements and returs a nodelist
    //console.log(title);

//2. DOM Traversal

//a. Parent Node Traversal
    // let ul=document.querySelector('ul');
    // console.log(ul); /*This just outputs the html element of ul*/ 

    // console.log(ul.parentNode);
    // console.log(ul.parentElement);
    // /*Parents are the nodes one level above the given node or closest to the given node in the DOM heirarchy*/
    // /*note: Node and Element can be used interchangably*/

    // console.log(ul.parentElement.parentElement);
    // console.log(ul.parentNode.parentNode);/*Repeating the parentnode finder twice prints the grandparent*/

    // let html=document.documentElement;//another way of selecting a query or element
    // console.log(html);
    // console.log(html.parentElement);//returns null as document html element doesnt exist
    // console.log(html.parentNode);// retuns #document

//b. Child Node Traversal
// let ul1=document.querySelector('ul');

// console.log("use the keyword 'child' to get child nodes");
// console.log(ul1.childNodes);  /*Here childNodes returns an array containing all the child nodes of ul1 which can be accessed by the index*/
// /*this outputs not only the li-elements but also returns each of the texts as a separate node. This clears the distinction between the elements and nodes.*/ 
// console.log(ul1.firstChild);
// console.log(ul1.lastChild);
// ul1.childNodes[1].style.color='blue';
// ul1.childNodes[13].style.color='tomato';

// console.log("use the keyword 'children' to get child elements");
// console.log(ul1.children);/*gives an array containing only the child elements*/
// console.log(ul1.children[0].textContent);/*MCU*/
// console.log(ul1.firstElementChild);
// console.log(ul1.lastElementChild);
// console.log(ul1.childElementCount);/*7 as there are only 7 elements inside the ul element*/  

//c. Sibling Node Traversal
    //  let ul2=document.querySelector('ul');
    //  const div=document.querySelector('div');

    //  console.log("All the child nodes of div:\n")
    //  console.log(div.childNodes);
    //  console.log("ul2 next sibling");
    //  console.log(ul2.nextSibling);
    //  console.log("ul2 previous sibling");
    //  console.log(ul2.previousSibling);
    //  console.log("ul2 next element sibling");
    //  console.log(ul2.nextElementSibling);
    //  console.log("ul2 prev element sibling");
    //  console.log(ul2.previousElementSibling);
