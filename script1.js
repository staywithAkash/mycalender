let date1 = new Date();

function render() {
  let today = new Date();
  let d1 = date1.getDate();
  let d2 = date1.getDay();
  let d4=date1.getFullYear();
  
  console.log(d2);
  let d3 = date1.getMonth();
  //last date of current month
  // let lastdate = new Date(date1.getFullYear(), date1.getMonth(), 0);
  let lastdate = new Date(d4, d3+1, 0);
  let endDate = lastdate.getDate();
  console.log("endDate"+endDate);
  console.log(endDate);
  // get first day
  let startDay= new Date(d4,d3,1).getDay();
  console.log("first day"+startDay);
  //last date of previous month
  let prevmonth = new Date(d4, (d3-1)+1, 0);
  let prev = prevmonth.getDate();
  console.log("prev"+prev);
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
  document.getElementById("fulldate").innerHTML=date1.toDateString();
  document.getElementById("mon").innerHTML = months[d3];

  let day = document.getElementById("days");
  let addEl = "";
  //add prev month date
  for (let i = prev - startDay + 1; i <= prev; i++) {
    addEl += "<div class='prevdates'>" + i + "</div>";
  }
  //add cur month dates in calender
  console.log("end date cur month"+endDate);
  for (let i = 1; i <= endDate; i++) {
    if (i == today.getDate() && today.getMonth() == d3 && today.getFullYear()==d4) {
      addEl += "<div class='today'>" + d1 + "</div>";
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
