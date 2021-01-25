const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const finishBtn = document.querySelector(".finishBtn");
const stepValues = [...document.querySelectorAll(".stepValue")];
const contentTitle = document.querySelector(".content");

console.log(prevBtn);
console.log(nextBtn);
console.log(finishBtn);
console.log(stepValues);

// const { prevBtn, nextBtn, finishBtn } = refs;

const MAX_VALUE = 4;
let current = 1;

prevBtn.addEventListener("click", () => {
  console.log("Previous");
  const prevValue = stepValues[current - 2];
  current -= 1;
  prevValue.classList.remove("completed");
  finishBtn.disabled = true;
  nextBtn.disabled = false;
  if (current === 1) {
      prevBtn.disabled = true;
  }
  contentTitle.innerText = `Текущий шаг ${current}`;
  console.log(prevValue);
});
nextBtn.addEventListener("click", () => {
  const currentValue = stepValues[current - 1];
  currentValue.classList.add("completed");
  current += 1;
  prevBtn.disabled = false;
  if (current === MAX_VALUE) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
  contentTitle.textContent = `Текущий шаг ${current}`;
  console.log(currentValue);
});
finishBtn.addEventListener("click", () => {
  location.reload();
  console.log("Finish");
});
