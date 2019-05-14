// Dani Vicario - playButton experiment (svg) - Wed May 8 17:53:44 CEST 2019
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/** @type SVGElement */
var containerDOMEl = document.getElementById("container");

var w = 400;
var h = 400;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

const playButtonDOMEL = document.querySelector("#container img")
playButtonDOMEL.style.display = "block"

playButtonDOMEL.onclick = function () {
    document.querySelector("#play").src = "./music_pause_button.png"
    animation()
}

function animation() {
    var intervalID = setInterval(function () {
        var newSize = randomFloat(1, 2)

        playButtonDOMEL.style.transform = `scale(${newSize})`
        drawCircles(newSize)
    }, 500);
}

function drawCircles(newSize) {
    function drawColors(colors, maxRadius, step) {
        colors.forEach((col, idx) => {
            document.querySelector(".c" + idx).style.width = `${maxRadius - (idx * step)}px`
            document.querySelector(".c" + idx).style.height = `${maxRadius - (idx * step)}px`
            document.querySelector(".c" + idx).style.backgroundColor = col
        })
    }

    drawColors(["#2199ff", "#46aaff", "#79c2ff"], (180 * newSize), 40 + randomInt(0, 25))
}