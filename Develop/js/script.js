// Display current day at top of calendar
var rightNow = moment().format("MMMM Do, YYYY");
$("#currentDay").append(rightNow);
console.log(rightNow);

// color-code time blocks to indicate past, present, or future
