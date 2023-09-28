function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("about-Btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}  

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


document.getElementById('show').addEventListener('click', ()=>{
  document.getElementById('nav-responsive').style.top = '0rem'
  document.getElementById('show').style.display = 'none'
  document.getElementById('hide').style.display = 'block'
})
document.getElementById('hide').addEventListener('click', ()=>{
  document.getElementById('nav-responsive').style.top = '-18rem'
  document.getElementById('hide').style.display = 'none'
  document.getElementById('show').style.display = 'block'
})