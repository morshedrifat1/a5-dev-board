function getInnerTextById(id) {
    const text = document.getElementById(id).innerText;
    const convertText = parseInt(text);
    return convertText

}

function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value;
}


let bdTime24 = new Date().toLocaleTimeString();


// weekend name 
function getBDDay() {
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let today = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  let bdtDate = new Date(today);
  return days[bdtDate.getDay()];
}

let weekendName = getBDDay();

document.getElementById("weekend-date").innerText = weekendName + " ,";

// date setup


function getBDMonthDateYear() {
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

  let today = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  let bdtDate = new Date(today);

  let date = bdtDate.getDate();
  let monthName = months[bdtDate.getMonth()];
  let year = bdtDate.getFullYear();

  return `${monthName} ${date} ${year}`;
}

const todayDate = getBDMonthDateYear();
document.getElementById("date-month").innerText = todayDate;