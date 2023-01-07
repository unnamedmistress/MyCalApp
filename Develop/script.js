
$( document ).ready(function() {
// the current date in the header of the page.
let pDate = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(pDate);
//working current hour
let cHour = new Date().getHours();
//get the integer value of the ID
let hourIds = $('div.row.time-block').map(function() {
  let hourid3 = $(this).attr('id');
  return parseInt(hourid3.split('-')[1]);
}).get();
for (i = 0; i < hourIds.length; i++) {
//if current click is at this index add appropriate class

  if (hourIds[i] === cHour) {
    $('div.row.time-block').eq(i).addClass('present');
  } else if (hourIds[i] >= cHour) {
    $('div.row.time-block').eq(i).addClass('future');
  } else {
    $('div.row.time-block').eq(i).addClass('past');
  }
}
//on click of save button grab text and time integer save to local storage, put back on page
$('.saveBtn').on('click', function() {
  let textareaValues = {};
  $('textarea').each(function() {
    let currentHourId = $(this).parent().attr('id');
    let textareaValue = $(this).val();
    textareaValues[currentHourId] = textareaValue;
  });
  localStorage.setItem('textareaValues', JSON.stringify(textareaValues));
});

// Restore all values from local storage
let textareaValues = JSON.parse(localStorage.getItem('textareaValues'));
if (textareaValues) {
  $('textarea').each(function() {
    let currentHourId = $(this).parent().attr('id');
    if (textareaValues[currentHourId]) {
      $(this).val(textareaValues[currentHourId]);
    }
  });
}
  //
})