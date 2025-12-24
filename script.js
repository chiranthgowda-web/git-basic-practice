// Indian Watch
// Updating to Github Account
let indDate = document.querySelector("#indian-date");
let indTime = document.querySelector("#indian-time");
let indianWatch = () => {
  let options = { timeZone: "Asia/Kolkata" };
  let currentDate = new Date().toLocaleDateString("en-US", options);
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  indDate.innerText = currentDate;
  indTime.innerText = currentTime;
};
setInterval(indianWatch, 1000);

// USA Watch
let usaDate = document.querySelector("#usa-date");
let usaTime = document.querySelector("#usa-time");
let usaWatch = () => {
  options = { timeZone: "America/New_York" };
  currentDate = new Date().toLocaleDateString("en-US", options);
  currentTime = new Date().toLocaleTimeString("en-Us", options);
  usaDate.innerText = currentDate;
  usaTime.innerText = currentTime;
};
setInterval(usaWatch, 1000);

//China Watch
let chinaDate = document.querySelector("#china-date");
let chinaTime = document.querySelector("#china-time");
let chinaWatch = () => {
  options = { timeZone: "Asia/Shanghai" };
  currentDate = new Date().toLocaleDateString("en-US", options);
  currentTime = new Date().toLocaleTimeString("en-US", options);
  chinaDate.innerText = currentDate;
  chinaTime.innerText = currentTime;
};
setInterval(chinaWatch, 1000);
