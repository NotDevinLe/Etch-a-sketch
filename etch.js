const container = document.querySelector(".holder");

// Draw default template
function drawTemplate(pixels = 16) {
    let pixel_size = 798 / pixels // 798 because template size is 800 px but have to account for border
    for (let i = 0; i < pixels ** 2; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("squares");
        div.style.width = `${pixel_size}px`
        div.style.height = `${pixel_size}px`
    }
    clear();
    painting();
}

drawTemplate(16);

// Painting the template function
function painting() {
    const squares = document.querySelectorAll(".squares")
    squares.forEach(function (square) {
        square.addEventListener("mouseover", function () {
            square.classList.add("color-black")
        })
    })
}

// Clearing the template
function clear() {
    const clear = document.querySelector(".clear")
    const squares = document.querySelectorAll(".squares")
    clear.addEventListener("click", function () {
        squares.forEach(function (square) {
            square.classList.remove("color-black")
        })
    })
}

// Controlling Grid Pixels
const edit_grid = document.querySelector(".edit-grid")
edit_grid.addEventListener("click", function () {
    let numOfPixels = Number(prompt("Pixels:"))
    if (numOfPixels > 0 && numOfPixels <= 100) {
        const squares = document.querySelectorAll(".squares")
        squares.forEach(function (square) {
            container.removeChild(square)
            console.log(square)
        })
        drawTemplate(numOfPixels);
    }
    else if (numOfPixels > 100) {
        alert("Number of pixels must be less than or equal to 100.")
    }
    else if (numOfPixels <= 0) {
        alert("Number of pixels be above 0.")
    }
    else {
        alert("Please enter a number.")
    }
})