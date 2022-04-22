const container = document.querySelector(".holder");

// Draw default template
function drawTemplate(pixels = 16) {
    let pixel_size = 850 / pixels
    for (let i = 0; i < pixels; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("rows");

        for (let x = 0; x < pixels; x++) {
            const square = document.createElement("div");
            div.appendChild(square);
            square.classList.add("squares");
        }
    }
}

drawTemplate(16);

// Painting the template function
const squares = document.querySelectorAll(".squares")
squares.forEach(function (square) {
    square.addEventListener("mouseover", function () {
        square.classList.add("color-black")
    })
})

// Clearing the template
const clear = document.querySelector(".clear")
clear.addEventListener("click", function () {
    squares.forEach(function (square) {
        square.classList.remove("color-black")
    })
})

// Controlling Grid Pixels
// const edit_grid = document.querySelector(".edit-grid")
// edit_grid.addEventListener("click", function () {
//     const rows = document.querySelectorAll(".rows")
//     rows.forEach(function(row) {
//         rows.removeChild(row)
//     })
//     let numOfPixels = prompt("Pixels:")
//     drawTemplate(numOfPixels);
// })