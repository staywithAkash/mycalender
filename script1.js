let date1 = new Date();

function render() {
  let today = new Date();
  let getdate = date1.getDate();
  let getyear=date1.getFullYear();
  let getmonth = date1.getMonth();
  
  //last date of current month
  let lastdate = new Date(getyear, getmonth+1, 0);
  let endDate = lastdate.getDate();
  
  // get first day
  let startDay= new Date(getyear,getmonth,1).getDay();
  
  //last date of previous month
  let prevmonth = new Date(getyear, (getmonth-1)+1, 0);
  let prev = prevmonth.getDate();
  
  //days array
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //add months
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dateLine=document.getElementById("fulldate");
  dateLine.innerHTML=date1.getFullYear();
  document.getElementById("mon").innerHTML = months[getmonth];
  let day = document.getElementById("days");
  let addEl = "";
 
  //add prev month date
  for (let i = prev - startDay + 1; i <= prev; i++) {
    addEl += "<div class='prevdates'>" + i + "</div>";
  }
 
  //add cur month dates in calender
  for (let i = 1; i <= endDate; i++) {
    if (i == today.getDate() && today.getMonth()==getmonth && today.getFullYear()==getyear) {
      addEl += "<div class='today'>" + getdate + "</div>";
      dateLine.innerHTML=today.toDateString();
    } 
    else {
      addEl += "<div>" + i + "</div>";
    }
  }
  day.innerHTML = addEl;
}
function button(param) {
  if (param == "prev") {
    date1.setMonth(date1.getMonth() - 1);
    render();
  } else {
    date1.setMonth(date1.getMonth() + 1);
    render();
  }
}
