let form = document.querySelector("form");

let inputs = document.querySelectorAll("input");

let main = document.querySelector("#main");


form.addEventListener("submit", function(dets){
     dets.preventDefault();

     let card = document.createElement("div");
        card.classList.add("card"); //yeh humare ek div ban gaya

     let profile = document.createElement("div");
     profile.classList.add("profile"); //now we created profile inside upper div

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let p =  document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card); //MAIN

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
        });
});