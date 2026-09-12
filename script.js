let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let ans = emailRegex.test("harsh@test.com");
   console.log(ans);
})