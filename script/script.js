const title = document.querySelector(".left-1");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

let number = 1;


plus.addEventListener("click", () => {
    number += 1;
    title.textContent = number
})

minus.addEventListener("click", () => {
    number -= 1;
    title.textContent = number;

    if (number <= 0) {
        title.textContent = 0;
        number = 0;
    }
})