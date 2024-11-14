// III. Reveal Event

        const revealbtn= document.querySelector('.reveal');
        console.log(revealbtn);
        const revealcontent=document.querySelector('.hidden-content');

        function revealcont()
        {
            if(revealcontent.classList.contains('revealed'))
            {
                revealcontent.classList.remove('revealed');
                revealbtn.classList.add('occupy');
                revealbtn.textContent="Reveal Hidden Text";
               
            }
            else
            {
                revealcontent.classList.add('revealed');
                revealbtn.textContent="Hide Text";
                revealcont.classList.remove('occupy');
                
            }
        }

        revealbtn.addEventListener("click",revealcont);