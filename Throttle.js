let input = document.querySelector("input");

function throttle(fnc,delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now -timer >= delay){
            timer = now;
            fnc(...args);
        }
    };
}
input.addEventListener(
    "input",
    throttle(function(){
        console.log("ran");
    },1000)
);