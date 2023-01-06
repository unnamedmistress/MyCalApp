// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$( document ).ready(function() {
  //parse the input values into an array

var inputText = document.getElementsByClassName('description').val;
var list = JSON.parse(localStorage.getItem('inputText')) || [];
// the current date in the header of the page.
let pDate = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(pDate);
//working current hour
let cHour = new Date().getHours();
console.log('cHour: ' + cHour);

console.log('inputtext'+ inputText);

let hourIds = $('div.row.time-block').map(function() {
  let hourid3 = $(this).attr('id');
  return parseInt(hourid3.split('-')[1]);
}).get();
for (i = 0; i < hourIds.length; i++) {
  console.log(hourIds[i]);

  if (hourIds[i] === cHour) {
    $('div.row.time-block').eq(i).addClass('present');
    console.log(hourIds[i], cHour);
  } else if (hourIds[i] >= cHour) {
    $('div.row.time-block').eq(i).addClass('future');
  } else {
    $('div.row.time-block').eq(i).addClass('past');
  }
}
  
  console.log(hourIds);
  $('.saveBtn').on('click', function() {
    let currentIndex = $('.saveBtn').index(this);
    let currentHourId = $('div.row.time-block').eq(currentIndex).attr('id');
    let textareaValue = $('div.row.time-block').eq(currentIndex).find('textarea').val();
  
    console.log('currentHourId: ' + currentHourId);
    console.log('textareaValue: ' + textareaValue);
    //got the hour from calendar
    let info = {
      hourId: currentHourId,
      textareaValue: textareaValue,
    }
    localStorage.setItem('info', JSON.stringify(info));
  });
  
  let infoBack = JSON.parse(localStorage.getItem('info'));
  console.log('infoBack:' + JSON.stringify(infoBack));
  
  let storedHourId = infoBack.hourId;
  let storedTextareaValue = infoBack.textareaValue;
  
  let storedHourIndex = $('div.row.time-block').map(function() {
    let hourid3 = $(this).attr('id');
    return parseInt(hourid3.split('-')[1]);
  }).get().indexOf(storedHourId.split('-')[1]);
  
  $('div.row.time-block').eq(storedHourIndex).find('textarea').val(storedTextareaValue);
  
  //
})