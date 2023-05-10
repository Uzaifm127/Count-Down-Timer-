const fDateElement = document.getElementById("fixedDate");
const inputs = document.querySelectorAll("input");
const fDateString = "10 May 2023 10:01 PM";

fDateElement.innerText = fDateString;

const getTimerStart = () => {
  const fDate = new Date(fDateString);
  const cDate = new Date();
  const dateAndTimeDiff = Math.floor((fDate - cDate) / 1000);
  if (dateAndTimeDiff >= 0) {
    const daysDiff = dateAndTimeDiff / (3600 * 24);
    const hoursDiff = (dateAndTimeDiff % (3600 * 24)) / 3600;
    const minutesDiff = ((dateAndTimeDiff % (3600 * 24)) % 3600) / 60;
    const secondsDiff = ((dateAndTimeDiff % (3600 * 24)) % 3600) % 60;
    inputs[0].value = Math.floor(daysDiff);
    inputs[1].value = Math.floor(hoursDiff);
    inputs[2].value = Math.floor(minutesDiff);
    inputs[3].value = Math.floor(secondsDiff);
  } else if (dateAndTimeDiff < 0) {
    return true;
  }
};

const interval = setInterval(() => {
  getTimerStart();
  if (getTimerStart()) {
    clearInterval(interval);
  }
}, 1000);

// date object current time return karta hai in Milliseconds and jab bhi use log karoge ya document.write karoge then vo automatically browser use standard me convert kar dega.

// Input ke andar ka content daalne ka tareeka hota hai .value .innerText ya .innerHTML nhi kiya karte.
