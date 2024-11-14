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
        
        const list=document.querySelector('.sports');
        const item=document.createElement('li');
        item.innerText="American Football";
        item.setAttribute('id',item.innertext);
        list.appendChild(item);
        item.classList.add("sport");
        const makegreen=(e)=>{
            if(e.target.matches('li'))  //The reason to add this if conditional is to make sure that only the list items are made green and not the rest of the section of the list as well 
            {
                if(e.target.classList.contains("Greened"))
                {
                    e.target.style.backgroundColor="rgb(27, 44, 70)";
                    e.target.classList.remove("Greened");
                }
                else{
                e.target.style.backgroundColor="Green";
                e.target.classList.add("Greened");
                console.log(e.target.innerText+" Was Clicked");
                }   
            }
        }
        list.addEventListener("click",makegreen);

