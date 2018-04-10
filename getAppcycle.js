//get Start date and end Date
$(function(){
$("#selMonth").on('change', function(){
    var selected = $(this).val();
    var dateObj = new Date();
    var month = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var day = 1;
    var year = dateObj.getUTCFullYear();
    var startDate = [day,month[selected-1],year].join("-");
     if (selected<=1){ 
      year = year;
      selected=11
    }
     else {
       year = year+1;
       selected=selected-2
     }
     var endDate = daysInMonth($(this).val()-1, year);
    var toYear = [endDate, month[selected], year].join("-");
    console.log("From Year :" + startDate, "To Year :" + toYear);
  });
  
});

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
