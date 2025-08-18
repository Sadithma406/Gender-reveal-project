    var cards = document.getElementsByClassName("circles");
    var vi = document.getElementById("videoTag");
    var counts= 0;
    var heading = document.getElementsByTagName("h2")[0];
    for(var i=0;i<cards.length;i++){
        let card=cards[i];
        
            if (i==6){
                
                    card.addEventListener("click", function() {
                        if(counts===8){ 
                    card.classList.add("flippedtwice");}});
                    card.addEventListener("transitionend",function(){
                        if(card.classList.contains("flippedtwice")){
            if(card.classList.contains("ggrp")){
                card.style.background = "linear-gradient(#FFC0CB, #FF69B4)";
            }
            else if(card.classList.contains("bgrp")){
            card.style.background = "linear-gradient(#A0EFFF, #5AC8FA)";
            }
            document.body.style.backgroundImage = "none";
            vi.style.display = "block";
            heading.innerHTML = "It's a BOY!!";
            heading.style.color = "rgb(197, 216, 222)";
        }

   
    })
            
        }

        else{ 
        
        card.addEventListener("click", function() {
        card.classList.add("flipped");
         });
        card.addEventListener("transitionend",function(){
            if(card.classList.contains("flipped")){
            if(card.classList.contains("ggrp")){
                card.style.background = "linear-gradient(#FFC0CB, #FF69B4)";

            }
            else if(card.classList.contains("bgrp")){
            
                card.style.background = "linear-gradient(#A0EFFF, #5AC8FA)";
            }
             counts++;
        }

   
    }); 
   
    }}
