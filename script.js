
const userText = document.getElementById("userText");
const preview = document.getElementById("preview");
const textArea = document.getElementById("textArea");

let size = 22;
let fontIndex = 0;
let bgIndex = 0;
let darkMode = false;

const originalText = userText.value;
const fonts = ["Georgia", "Courier New", "Arial", "Verdana"];
const backgrounds = ["#fff3cd", "#d1ecf1", "#d4edda", "#f8d7da"];

userText.addEventListener("input", function () {
    preview.textContent = userText.value;
});

document.getElementById("red").addEventListener("click", function () {
    preview.style.color = "red";
});

document.getElementById("blue").addEventListener("click", function () {
    preview.style.color = "blue";
});

document.getElementById("increase").addEventListener("click", function () {
    if (size < 72) {
        size += 2;
        preview.style.fontSize = size + "px";
    }
});

document.getElementById("decrease").addEventListener("click", function () {
    if (size > 8) {
        size -= 2;
        preview.style.fontSize = size + "px";
    }
});

document.getElementById("font").addEventListener("click", function () {
    preview.style.fontFamily = fonts[fontIndex % fonts.length];
    fontIndex++;
});

document.getElementById("underline").addEventListener("click", function () {
    preview.style.textDecoration =
        preview.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("overline").addEventListener("click", function () {
    preview.style.textDecoration =
        preview.style.textDecoration === "overline" ? "none" : "overline";
});

document.getElementById("strike").addEventListener("click", function () {
    preview.style.textDecoration =
        preview.style.textDecoration === "line-through" ? "none" : "line-through";
});

document.getElementById("bold").addEventListener("click", function () {
    preview.style.fontWeight =
        preview.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("italic").addEventListener("click", function () {
    preview.style.fontStyle =
        preview.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("left").addEventListener("click", function () {
    preview.style.textAlign = "left";
});

document.getElementById("center").addEventListener("click", function () {
    preview.style.textAlign = "center";
});

document.getElementById("right").addEventListener("click", function () {
    preview.style.textAlign = "right";
});

document.getElementById("upper").addEventListener("click", function () {
    preview.style.textTransform = "uppercase";
});

document.getElementById("lower").addEventListener("click", function () {
    preview.style.textTransform = "lowercase";
});

document.getElementById("background").addEventListener("click", function () {
    textArea.style.backgroundColor =
        backgrounds[bgIndex % backgrounds.length];
    bgIndex++;
});

document.getElementById("mode").addEventListener("click", function () {
    darkMode = !darkMode;
    document.body.classList.toggle("dark", darkMode);
});

document.getElementById("reset").addEventListener("click", function () {
    userText.value = originalText;
    preview.textContent = originalText;

    size = 22;
    fontIndex = 0;
    bgIndex = 0;
    darkMode = false;

    preview.removeAttribute("style");
    textArea.style.backgroundColor = "white";
    document.body.classList.remove("dark");
});
