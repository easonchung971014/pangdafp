let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

// 按下按鈕之後產生的變化

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

// 回到上層按鈕

window.onscroll=()=>{

if(window.scrollY>85){
    document.querySelector('#scroll-up').classList.add('active');


    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }

}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mysearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myse");
    li = ul.getElementsByTagName("li");

  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }
      else {
        li[i].style.display = "none";
      }
    }
  }

  