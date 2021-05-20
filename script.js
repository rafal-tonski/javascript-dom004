const btn = document.querySelector("button");
let ul = document.querySelector("ul");
ul.style.listStyle = "none";

let number = 1;
const addElement = () => {
  let li = document.createElement("li");
  li.textContent = number;
  ul.appendChild(li);
  if (number % 3 === 0) {
    li.classList.add("triple");
    btn.classList.remove("triple");
  } else if (number % 3 === 1) {
    btn.classList.add("triple");
  } else {
    null;
  }
  number += 2;
};

btn.addEventListener("click", addElement);
