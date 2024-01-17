var t1 = document.getElementsByClassName("tab-links");
var t2 = document.getElementsByClassName("tab-cont");

function opentab(tabname) {
    for (i of t1) {
        i.classList.remove("active-link");
    }
    for (i of t2) {
        i.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var n = document.getElementsByClassName("navs");

function line(){
    for (i of n){
        i.classList.remove("active-link2");
    }
    event.currentTarget.classList.add("active-link2");
}

const text = document.querySelector(".multiple-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Java";
    }, 1000);
    setTimeout(() => {
        text.textContent = "Python";
    }, 2000);
    setTimeout(() => {
        text.textContent = "Node.js";
    }, 3000);
}
textLoad();
setInterval(textLoad, 12000);