const red = document.getElementById("red");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

red.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primaryColor", "var(--color1)");
    document.documentElement.style.setProperty("--secondaryColor", "#802025");
});
orange.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primaryColor", "var(--color2)");
    document.documentElement.style.setProperty("--secondaryColor", "#805532");
});
green.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primaryColor", "var(--color3)");
    document.documentElement.style.setProperty("--secondaryColor", "#808080");
});
blue.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primaryColor", "var(--color4)");
    document.documentElement.style.setProperty("--secondaryColor", "#808080");
});

const button = document.getElementById("button");
const colorPickerFrame = document.querySelector(".color-picker-frame");

button.addEventListener("click", () => {
    colorPickerFrame.classList.toggle("show-colors");
    if (!colorPickerFrame.classList.contains("show-colors")) {
        colorPickerFrame.classList.add("hide-colors");
    } else {
        colorPickerFrame.classList.remove("hide-colors");
    }
});