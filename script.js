// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const maxHour = 17;
const minHour = 9;

$(function () {

   let buttonSubmit = document.getElementsByClassName("btn")
//saving the input to local storage
  for (i = 0; i < buttonSubmit.length; i++) {
    buttonSubmit[i].addEventListener("click", function (e) { 
      e.preventDefault();
      console.log(e.target.parentElement.previousElementSibling)
      let taskInput = e.target.parentElement.previousElementSibling.value;
      // document.querySelector('.textInput').value;
      localStorage.setItem("task " + this.id, taskInput);
      console.log("test", taskInput);
      console.log("button clicked", this.id)
      console.log(e.target);
      console.log(e.target.previousElementSibling);

      let savedTask = localStorage.getItem("task" + this.id);
      document.querySelector(".textInput").value = savedTask;
      console.log(savedTask);
      
      let renderTask = function() { $(e.target.parentElement.previousElementSibling).text(savedTask);
      }

      renderTask();
    //   localStorage.getItem("task");
    //   $(e.target.parentElement.previousElementSibling).text(renderTask);
    // console.log(renderTask);
    })
  }

// //rendering saved info on page
  // localStorage.getItem("task");

  // let renderTask = function() {
  //   $(e.target.parentElement.previousElementSibling).text(renderTask);
  //   console.log(renderTask);
  // }

//   renderTask();

  console.log("hello" + document.querySelector(".textInput").id);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let dayDate = setInterval(function () {
    let reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    $('#currentDay').text(reformatDate);
  }
    , 1000)
});

let dayDate = setInterval(function () {
  let currentHour = dayjs().hour();;
  console.log("current hour" + currentHour);
}
  , 10000)

// Get the current hour
const currentHour = new Date().getHours();
// let currentHour = 14;


// Get the element you want to change the class of
const element = document.querySelector(".time-block");

// Change class based on the current hour. If outside office hours, beige background

if (currentHour <= maxHour) {
  for (let i = 9; i < currentHour; i++) {
    document.getElementById(i).classList.add("past");
  }
  document.getElementById(currentHour).classList.add("present");
  for (let i = currentHour + 1; i <= maxHour; i++) {
    document.getElementById(i).classList.add("future");
  }
} else {
  for (let i = 9; i < currentHour; i++) {

    $(document.getElementById(i)).css('background-color', '').css('background-color', 'beige');
  }
  console.log("past office hours");
};





