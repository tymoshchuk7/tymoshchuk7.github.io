//slider
$(document).ready(function(){
    $('.single-item').slick();
  });

//pop up
$(document).ready(function(){
  PopUpHide();
});
function PopUpShow(){
  $("#popup1").show();
}
function PopUpHide(){
  $("#popup1").hide();
}

//grab  
let g = document.querySelectorAll(".grab");

for(let i=0; i<2; i++){

  g[i].addEventListener("mousedown", function(){
    this.style.cursor="grabbing";
  });
  
  g[i].addEventListener("mouseup", function(){
    this.style.cursor="grab";
  });
}
// scroll
AOS.init({
  duration: 1200,
})