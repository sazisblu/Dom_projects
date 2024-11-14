// 4. Event Listeners
//:we may add event listeners to our page in many ways.such as:

//a. Directly Adding to the html tags as attributes
    //<button onclick="alert('meow')"></button>

//b. using add event listener method
    //element.addEventListener("Click",function(),Boolean[optional]);
    
    // I. Onclick event 
    // const button2=document.querySelector('.btn-2');
    //console.log(button2);
    //console.log(button2.innerText);

    // function alert2()
    // {
    //     alert('I also Love JavaScript');
    //     button2.style.backgroudColor="black";
    // }

    // button2.addEventListener("click",alert2);

    // // II. mouseOver event 
    // const boxes=document.querySelector('.box-2');
    // console.log(boxes);
    // console.log(boxes);
   
    // function colorchange(){
    // console.log("Event Listened");  
    // boxes.style.backgroudColor="orange";
    // }
    // boxes.addEventListener("mouseOver",colorchange);
    // why is the style not being updated accoding to the function.

    // III. Reveal Event

        // const revealbtn= document.querySelector('.reveal');
        // console.log(revealbtn);
        // const revealcontent=document.querySelector('.hidden-content');

        // function revealcont()
        // {
        //     if(revealcontent.classList.contains('revealed'))
        //     {
        //         revealcontent.classList.remove('revealed');
        //         revealbtn.classList.add('occupy');
        //         revealbtn.textContent="Reveal Hidden Text";
               
        //     }
        //     else
        //     {
        //         revealcontent.classList.add('revealed');
        //         revealbtn.textContent="Hide Text";
        //         revealcont.classList.remove('occupy');
                
        //     }
        // }

        // revealbtn.addEventListener("click",revealcont);

//C. Event Probagation

        // window.addEventListener("click",meow=(e)=>{console.log("Window");
        //     //e.stopPropagation(); 
        //     /*We can use e.stoppropagation() to stop the even propagation at a certain*/
        // },false);
        
        // document.addEventListener("click",meow1=(e)=>{console.log("document");
        //    // e.stopPropagation();
        // },false);
        
        // document.querySelector(".div2").addEventListener("click",meow2=()=>{console.log("Div-2");},{once:true});
        // /*Setting once:true will cause an event to be listened only once*/        
        
        // document.querySelector(".div1").addEventListener("click",meow2=()=>{console.log("Div-1");},false);
        
        // document.querySelector(".Probagation-btn").addEventListener("click",meow2=(e)=>{console.log(e.target.innerText='Clicked');},false);
        // /*e->it is the event object which has various properties relating to the event being listened to.*/

        // console.log(document.getElementById("Probagationanch"));
        // document.querySelector("#Probagationanch").addEventListener("click",meow3=(e)=>{e.target.innerText='Clicked';
        //     console.log("Anchor");
        // },false);
        /*An anchor tag is meant to redirect us to a different page thus it causes a quick fire off when an event related to anchor tag is listened. To prevent this default behavour seen in anchor tag we may use e.preventDefault()*/
        
        /*The third parameter of "addEventListener allows to switch between the event capture and event bubble mode of even listening"*/

        /*when set to true, event capturing mode is switched on*/

        /*when set to false,event bubbling mode is activated and the default setting is the same*/

//d. Event Delegation
        
        /*Without Event Delegation*/
        // document.querySelector('#basketball').addEventListener("click",green=(e)=>{
        //     e.target.style.backgroundColor="Green";
        //     console.log(e.target.innerText+" was Clicked");
        // })

        // document.querySelector('#football').addEventListener("click",green=(e)=>{
        //     e.target.style.backgroundColor="Green";
        //     console.log(e.target.innerText+" was Clicked");
        // })

        // document.querySelector('#boxing').addEventListener("click",green=(e)=>{
        //     e.target.style.backgroundColor="Green";
        //     console.log(e.target.innerText+" was Clicked");
        // })

        // document.querySelector('#baseball').addEventListener("click",green=(e)=>{
            
        //     e.target.style.backgroundColor="Green";
        //     console.log(e.target.innerText+" was Clicked");
            
            
        // })

        // document.querySelector('#running').addEventListener("click",green=(e)=>{
        //     e.target.style.backgroundColor="Green";
        //     console.log(e.target.innerText+" was Clicked");
        // })

        /*By using Event Delegation*/
        
        // const list=document.querySelector('.sports');
        // const item=document.createElement('li');
        // item.innerText="American Football";
        // item.setAttribute('id',item.innertext);
        // list.appendChild(item);
        // item.classList.add("sport");
        // const makegreen=(e)=>{
        //     if(e.target.matches('li'))  //The reason to add this if conditional is to make sure that only the list items are made green and not the rest of the section of the list as well 
        //     {
        //         if(e.target.classList.contains("Greened"))
        //         {
        //             e.target.style.backgroundColor="rgb(27, 44, 70)";
        //             e.target.classList.remove("Greened");
        //         }
        //         else{
        //         e.target.style.backgroundColor="Green";
        //         e.target.classList.add("Greened");
        //         console.log(e.target.innerText+" Was Clicked");
        //         }   
        //     }
        // }
        // list.addEventListener("click",makegreen);

