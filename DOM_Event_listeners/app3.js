//C. Event Probagation

        window.addEventListener("click",meow=(e)=>{console.log("Window");
            //e.stopPropagation(); 
            /*We can use e.stoppropagation() to stop the even propagation at a certain*/
        },false);
        
        document.addEventListener("click",meow1=(e)=>{console.log("document");
           // e.stopPropagation();
        },false);
        
        document.querySelector(".div2").addEventListener("click",meow2=()=>{console.log("Div-2");},{once:true});
        /*Setting once:true will cause an event to be listened only once*/        
        
        document.querySelector(".div1").addEventListener("click",meow2=()=>{console.log("Div-1");},false);
        
        document.querySelector(".Probagation-btn").addEventListener("click",meow2=(e)=>{console.log(e.target.innerText='Clicked');},false);
        /*e->it is the event object which has various properties relating to the event being listened to.*/

        console.log(document.getElementById("anch"));
        document.querySelector("#anch").addEventListener("click",meow3=(e)=>{e.target.innerText='Clicked';
            console.log("Anchor");
        },false);
        /*An anchor tag is meant to redirect us to a different page thus it causes a quick fire off when an event related to anchor tag is listened. To prevent this default behavour seen in anchor tag we may use e.preventDefault()*/
        
        /*The third parameter of "addEventListener allows to switch between the event capture and event bubble mode of even listening"*/

        /*when set to true, event capturing mode is switched on*/

        /*when set to false,event bubbling mode is activated and the default setting is the same*/