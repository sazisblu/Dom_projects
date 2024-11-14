// I. Onclick event 
    const button2=document.querySelector('.btn-2');
    console.log(button2);
    console.log(button2.innerText);

    function alert2()
    {
        alert('I also Love JavaScript');
        button2.style.backgroudColor="black";
    }

    button2.addEventListener("click",alert2);

    // II. mouseOver event 
    const boxes=document.querySelector('.box-2');
    console.log(boxes);
    console.log(boxes);
   
    function colorchange(){
    console.log("Event Listened");  
    boxes.style.backgroudColor="orange";
    }
    boxes.addEventListener("mouseover",colorchange);
    // why is the style not being updated accoding to the function.
