let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    if(nm.ariaValueMax.length <= 2){
        document.querySelector("#hide").computedStyleMap.display ="initial";
    }else{
        document.querySelector("#hide").computedStyleMap.display="none";
    }
})