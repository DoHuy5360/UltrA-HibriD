const navBar = document.querySelector(".sticky-nav");
window.addEventListener("scroll", (e) => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.style.backgroundColor = "#a8a8a888";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
});

//? end sticky nav

//todo count total rating
const getAmountRating = document.querySelectorAll(".amount-rating");
let objRank = {};
let listAmountRating = [];
for (let i = 0; i < getAmountRating.length; i++) {
  let convertToInt = parseInt(getAmountRating[i].innerText);
  listAmountRating.push(convertToInt);
  objRank[getAmountRating[i].id] = convertToInt;
}
let totalRating = listAmountRating.reduce((a, b) => a + b, 0);
document.getElementById("total-reviews").innerText = totalRating;
//? end count total rating

//todo average star
const average = totalRating / 6;
let nearAverage = "";
let keyIndex = "";
for (let key in objRank) {
  let calcNear = objRank[key] - average;
  if (nearAverage == "" && calcNear >= 0) {
    nearAverage = calcNear;
  } else if (calcNear < nearAverage && calcNear >= 0) {
    nearAverage = calcNear;
    keyIndex = --key;
  }
}
document.querySelector(".number-stars").innerText = keyIndex;
//? end average
// todo display star
let shell = `<i class="fas fa-star"></i>`
for (let i = 0; i < keyIndex; i++){
    document.querySelector(".start-reviews").insertAdjacentHTML("afterbegin",shell)
}
//? end display star
//todo display data line
getAmountRating.forEach((element) => {
  const lineBar = document.getElementById(`${element.id}-star`);
  const percent = ((parseInt(element.innerText) / totalRating) * 100).toFixed(
    2
  );
  lineBar.style.backgroundColor = "var(--head-color)";
  lineBar.style.width = `${percent}%`;
});
