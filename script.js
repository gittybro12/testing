let openB = document.getElementById("open-btn");
let cont = document.getElementById("model-cont");
let close = document.getElementById("close");



openB.addEventListener("click", function(){
    cont.style.display = "block";
} )

close.addEventListener("click", function(){
cont.style.display = "none"
})

window.addEventListener("click",function(e){
if(e.target === cont){
    cont.style.display ="none"
}
console.log(e.target);
})