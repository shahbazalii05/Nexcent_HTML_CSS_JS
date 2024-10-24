var slider = document.querySelector(".slider");
var val=0;
slider.addEventListener("click", function(){
    if(val==0){
        document.querySelector(".slidermenu").style.display = "block";
        val=1;
    }
    else{
        document.querySelector(".slidermenu").style.display = "none";
        val=0;
    }
});