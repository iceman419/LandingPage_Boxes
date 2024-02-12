// $(document).ready(() => {
//   const boxes = $(".box");
//   let current = 1;
//   let interval = setInterval(() => {
//     //This line set up a repeating action using set interval(). The code inside the arrow function will execute repeatedly at the specified interval.
//     if (current > boxes.length) current = 1;
//     //This line check if the current in this exceeds the number of boxes if it does it resets current to 1 effectively looping back to the first box
//     boxes.each((index, box) => {
//       //Iterates over each box element in the boxes collection using jquery each method provides a callback function with the index and box parameters
//       if ($(box).attr("class").split("-")[1] * 1 === current) {
//         //Split the class attributes where there is ("-")After splitting get the second index which is [1]Convert it to a number and multiplied by 1.
//         $(box).addClass("active");
//       } else {
//         $(box).removeClass("active");
//       }
//     });
//     current++;
//   }, 1000);
// });

/* For better readability and also for easy maintenance */
// $(document).ready(() => {
//   //Select all the elements with the class "box" and store them in the boxes variable
//   const boxes = $(".box");

//   //initialise the current index to keep track of the active box
//   let currentBoxIndex = 1;

//   //Set up a repeating action to secure through the boxes every 1000 milliseconds
//   const interval = setInterval(() => {
//     //Reset currentBoxIndex to one if it exceeds the number of boxes, Looping back to the first box

//     if (currentBoxIndex > boxes.length) currentBoxIndex = 1;

//     //Iterate over each box element in the boxes collection
//     boxes.each((index, box) => {
//       //extracting the number from the Class attribute by splitting at the dash and convert it to a number
//       const boxNumber = parseInt($(box).attr("class").split("-")[1]);
//       //Determining if the box Number matches the current index to decide if it should be active
//       const shouldBeActive = boxNumber === currentBoxIndex;

//       // Toggle the "active" class based on the condition
//       $(box).toggleClass("active", shouldBeActive);
//     });

//     // Move to the next box for the nest iteration
//     currentBoxIndex++;
//     // That's acute the function every one thousand milliseconds
//   }, 1000);
// });

/**  Written with Java script only */

const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

const colors = [
  "#efd81d",
  "#61dbfb",
  "#41b883",
  "#b52e31",
  "#43853d",
  "#cf649a",
  "#e04e39 ",
];

const techs = ["JS", "React", "Vue", "Angula", "Node", "Sass", "Amber"];

let current = 1;

const textStyle = () => {
  heading.style.color = colors[current - 1];
  heading.textContent = techs[current - 1];
  btn.style.backgroundColor = colors[current - 1];
  btn.firstElementChild.textContent = techs[current - 1];
};

let interval = setInterval(() => {
  if (current > boxes.length) current = 1;
  boxes.forEach((box) => {
    if (box.classList[1].split("-")[1] * 1 === current) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
  textStyle();
  current++;
}, 5000);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((cube) => {
      cube.classList.remove("active");
    });
    box.classList.add("active");
    current = box.classList[1].split("-")[1] * 1;
    textStyle();
    clearInterval(interval);
  });
});
