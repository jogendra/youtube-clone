"use strict";

// Chage Selected Item in Side Bar
let topItems = document.getElementById("topItems");
let sideItems = topItems.getElementsByClassName("side-item");
for (let i = 0; i < sideItems.length; i++) {
    sideItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-item");
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active-item", "");
    }
    this.className += " active-item";
  });
}