document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
  
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
  
    button1.addEventListener("click", function() {
      showPage(page1);
    });
  
    button2.addEventListener("click", function() {
      showPage(page2);
    });
  
    button3.addEventListener("click", function() {
      showPage(page3);
    });
  
    button4.addEventListener("click", function() {
      showPage(page4);
    });
  });
  
  function showPage(page) {
    var pages = document.getElementsByClassName("menu-page");
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    page.style.display = "block";
  }
  