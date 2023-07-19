// let shoe1 = document.getElementById("shoe-1")
// let shoe2 = document.getElementById("shoe-2")
// let shoe3 = document.getElementById("shoe-3")
// let btn1 = document.getElementById("btn-1")
// let btn2 = document.getElementById("btn-2")
// let btn3 = document.getElementById("btn-3")

// btn1.addEventListener("click", ()=> {
//     shoe1.classList.add("visible")
//     shoe1.classList.remove("invisible")
    
//     shoe2.classList.add("invisible")
//     shoe2.classList.remove("visible")
//     shoe3.classList.add("invisible")
//     shoe3.classList.remove("visible")

//     btn1.classList.add("clicked")
//     btn2.classList.remove("clicked")
//     btn3.classList.remove("clicked")
// });

// btn2.addEventListener("click", ()=> {
//     shoe2.classList.add("visible")
//     shoe2.classList.remove("invisible")
    
//     shoe1.classList.add("invisible")
//     shoe1.classList.remove("visible")
//     shoe3.classList.add("invisible")
//     shoe3.classList.remove("visible")

//     btn2.classList.add("clicked")
//     btn1.classList.remove("clicked")
//     btn3.classList.remove("clicked")
// });

// btn3.addEventListener("click", ()=> {
//     shoe3.classList.add("visible")
//     shoe3.classList.remove("invisible")
    
//     shoe1.classList.add("invisible")
//     shoe1.classList.remove("visible")
//     shoe2.classList.add("invisible")
//     shoe2.classList.remove("visible")

//     btn3.classList.add("clicked")
//     btn1.classList.remove("clicked")
//     btn2.classList.remove("clicked")
// });


let shoe1 = document.getElementById("shoe-1");
let shoe2 = document.getElementById("shoe-2");
let shoe3 = document.getElementById("shoe-3");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

function handleButtonClick(clickedBtn, visibleShoe) {
  shoe1.classList.toggle("visible", shoe1 === visibleShoe);
  shoe1.classList.toggle("invisible", shoe1 !== visibleShoe);

  shoe2.classList.toggle("visible", shoe2 === visibleShoe);
  shoe2.classList.toggle("invisible", shoe2 !== visibleShoe);

  shoe3.classList.toggle("visible", shoe3 === visibleShoe);
  shoe3.classList.toggle("invisible", shoe3 !== visibleShoe);

  btn1.classList.toggle("clicked", btn1 === clickedBtn);
  btn2.classList.toggle("clicked", btn2 === clickedBtn);
  btn3.classList.toggle("clicked", btn3 === clickedBtn);
}

btn1.addEventListener("click", () => {
  handleButtonClick(btn1, shoe1);
});

btn2.addEventListener("click", () => {
  handleButtonClick(btn2, shoe2);
});

btn3.addEventListener("click", () => {
  handleButtonClick(btn3, shoe3);
});
