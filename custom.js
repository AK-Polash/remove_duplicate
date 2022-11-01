let input = document.querySelector("#input");
let button = document.querySelector(".button");
let heading = document.querySelector(".heading");
let myArr = [];

button.addEventListener("click", () => {
  myArr.push(input.value);
  input.value = "";

  myArr = myArr.filter((item, index) => {
    return myArr.indexOf(item) === index;
  });

  heading.innerHTML = myArr.join(" ");
  console.log(myArr);
});
