window.onscroll = function() {myFunction()};
const header = document.getElementById("navBar");
const sticky = header.offsetTop;

function myFunction(){
    if(window.scrollY > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}