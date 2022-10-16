const container = document.getElementById("main-section");
container.style.backgroundColor = "#f7f7f7";
container.style.padding = "50px";
// container.style.backgroundColor = "red";
const section = document.querySelectorAll("#main-section section");
for (sec of section) {
  sec.style.backgroundColor = "#ffffff";
  sec.style.padding = "30px";
  sec.style.border = "1px solid #f0f0f0";
  sec.style.borderRadius = "5px";
  sec.style.marginBottom = "5px";
}

const sectionTitle = document.getElementsByClassName("section-title");
for (title of sectionTitle) {
  title.style.color = "blue";
}

const ul = document.getElementsByClassName("items");
const li = document.querySelectorAll(".items li");
for (item of li) {
  item.style.color = "red";
}

const margin = document.getElementById("btn");
// console.log(margin);
// margin.style.marginTop = "10px";

// const yellow = document.getElementById("btn-yellow");

function makeYellow() {
  document.querySelector("#main-section").style.backgroundColor = "yellow";
}

const green = document.getElementById("btn-green");
green.onclick = makeGreen;

function makeGreen() {
  document.querySelector("#main-section").style.backgroundColor = "green";
}

const purple = document.getElementById("btn-purple");
purple.addEventListener("click", makePurple);

function makePurple() {
  document.querySelector("#main-section").style.backgroundColor = "purple";
}
