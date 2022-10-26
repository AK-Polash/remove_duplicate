let heading = document.querySelector(".heading");
let myArr = [1, 1, 2, 3, "apple", "orange", "banana", "apple"];
heading.innerHTML = "The filtered array : ";

heading.innerHTML += myArr.filter((item, index) => {
  console.log(item);
  return myArr.indexOf(item) === index; // ei line ta bujhi nai ( return keno holo + index er sathe compare kore ki kortese eikhane?)
});

console.log(myArr);

// eikhane 'myArr' change hocce na keno? eita primitive data type er moto behave kortese keno?
