let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove",function(dets){
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";

});