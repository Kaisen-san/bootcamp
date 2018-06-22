var game = {};

game.numSquares = 6;
game.colors = [];
game.pickedColor;
game.squares = document.querySelectorAll(".square");
game.colorDisplay = document.getElementById("colorDisplay");
game.messageDisplay = document.querySelector("#message");
game.h1 = document.querySelector("h1");
game.resetButton = document.querySelector("#reset");
game.modeButtons = document.querySelectorAll(".mode");

game.init = function() {
    this.setupModeButtons();
    this.setupSquares();

    this.resetButton.addEventListener("click", function() {
        game.reset();
    });

    this.reset();
}

game.setupModeButtons = function() {
    for (let i = 0; i < this.modeButtons.length; i++) {
        this.modeButtons[i].addEventListener("click", function() {
            game.modeButtons[0].classList.remove("selected");
            game.modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? game.numSquares = 3 : game.numSquares = 6;
            game.reset();
        });
    }
}

game.setupSquares = function() {
    for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === game.pickedColor) {
                game.messageDisplay.textContent = "Correct!";
                game.resetButton.textContent = "Play Again?";
                game.changeColors(clickedColor);
                game.h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                game.messageDisplay.textContent = "Try Again";
            }
        });
    }
}

game.reset = function() {
    this.colors = this.generateRandomColors(this.numSquares);
    this.pickedColor = this.pickColor();
    this.colorDisplay.textContent = this.pickedColor;
    this.resetButton.textContent = "New Colors";
    this.messageDisplay.textContent = "";

    for (let i = 0; i < this.squares.length; i++) {
        if (this.colors[i]) {
            this.squares[i].style.display = "block";
            this.squares[i].style.backgroundColor = this.colors[i];
        } else
            this.squares[i].style.display = "none";
    }

    this.h1.style.backgroundColor = "steelblue";
}

game.changeColors = function(color) {
    for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].style.background = color;
    }
}

game.pickColor = function() {
    let random = Math.floor(Math.random() * this.colors.length);
    return this.colors[random];
}

game.generateRandomColors = function(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(this.randomColor());
    }

    return arr;
}

game.randomColor = function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

game.init();
