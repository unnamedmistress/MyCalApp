// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$( document ).ready(function() {
  
 // the current date in the header of the page.
  
var list = JSON.parse(localStorage.getItem('daySch')) || [];
var inputText = document.getElementsByClassName('description');

let pDate = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(pDate);
//working current hour
  let cHour =  new Date().getHours();
  console.log('cHour: ' + cHour);
   
console.log(inputText.val);



  // TODO: Add a listener for click events on the save bu
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
  //use below code to save to local storage
  //if(inputText.val())
//{
    //creating the object for to store it in localStore
   // var objWorkSchedule ={
    //    txtSch: inputText.val().trim(),
     //   hourSch: cHour
   // };

    //pushing the information into the array of objects
    //list.push(objWorkSchedule);

   // localStorage.setItem("daySch",JSON.stringify(list));
//}
//else
//{
   // alert("You can not save and empty event \n You must enter and event");
//}
  //
 })

