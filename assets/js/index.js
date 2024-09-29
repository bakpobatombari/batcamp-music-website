let webnav =  document.getElementById("webnav");

window.addEventListener("scroll", () =>{
 if(window.scrollY >= 50){
    webnav.classList.add("bg-navy");
 }else{
    webnav.classList.remove("bg-navy");
 }
})
// let video =document.getElementById("vid");
// console.log(video);
// video.addEventListener("click", function(){
//     video.oncanplay = function(e){
//         e.target.play();
//     }
    
// })
