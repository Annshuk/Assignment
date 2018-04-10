//get Start date and end Date
$(function(){
  $("#selMonth").on('change', function(){
    var selected = $(this).val();
    var dateObj = new Date();
    var month = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var day = 1
    var year = dateObj.getUTCFullYear();
    var startDate = [day,month[selected-1],year].join("-")
    var endDays = dateObj.getDay();
    var endDate = daysInMonth(selected, year);
    var toYear = [endDate, month[selected-2], year+1].join("-")
    console.log("From Year :" + startDate, "To Year :" + toYear)
  })
  
});

function daysInMonth(month, year) {
  console.log(month)
    return new Date(year, month, 0).getDate();
}
