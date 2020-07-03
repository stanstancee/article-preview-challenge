let share = document.querySelector("#share");
let advert = document.querySelector("#advert");

share.addEventListener("click", function(){
    if (advert.classList.contains("hidden")){
          advert.classList.remove("hidden");
    }
    else{
        advert.classList.add("hidden"); 
    }
})