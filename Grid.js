class GridObject {
    constructor(marker = " . ", state = "unvisited") {
        this.marker = marker;
        this.state = state;
    }
}

class Grid {
    constructor(width, height, playerXStart = 0, playerYStart = height - 1) {
        //Initialise variables
        this.height = height;
        this.width = width;
        this.playerX = playerXStart;
        this.playerY = playerYStart; //initialise player to start at bottom left
        this.grid = [];
        //Create grid using 2D array
        for (let row = 0; row < height; row++) {
            this.grid[row] = new Array(width); //for every row, create a column
            for (let col = 0; col < width; col++) {
                this.grid[row][col] = new GridObject(); //sets ALL tiles to be undiscovered
            }
        }
        this.grid[this.height - 1][0] = new GridObject(" @ ", "player");
        this.grid[0][this.width - 1] = new GridObject(" X ", "goal");
    }
    //draw the grid
    drawGrid() {
        //draw a divider based on the width of the grid
        // let divider = "";
        // for (let k = 0; k < this.width; k++) {
        //     divider += "===";
        // }
        process.stdout.write("\n");
        process.stdout.write("\n");
        process.stdout.write("\n");
        //draw grid itself
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                process.stdout.write(this.grid[i][j].marker);
            }
            process.stdout.write("\n");
        }
    }
    // updateTileAtPlayer(marker, state) {
    //     return (this.grid[this.playerY][this.playerX] = new GridObject(
    //         marker,
    //         state
    //     ));
    // }
    encounter() {
        let randomNumber = Math.random();
        if (randomNumber < 0.2) {
            console.log("Encountered a yeti!");
        } else if (randomNumber < 0.3) {
            console.log("Encountered Bigfoot!");
        } else if (randomNumber < 0.4) {
            console.log("Encountered Dracula!");
        } else {
            console.log("There's nothing here.");
        }
    }
    moveRight(mover) {
        //handle player movement
        if (mover === "player") {
            //first check if I can move here
            if (this.playerX === this.width - 1) {
                return process.stdout.write("Cannot move here \n");
            }
            //check if the tile i'm about to visited is unvisited
            if (
                this.grid[this.playerY][this.playerX + 1].state === "unvisited"
            ) {
                // console.log("Visited an unvisited tile");
                this.encounter();
                //random generation for encounters
            }
            // mark the tile i'm on as visited
            this.grid[this.playerY][this.playerX] = new GridObject(
                " _ ",
                "visited"
            );
            // this.updateTileAtPlayer(" _ ", "visited");
            //move me to the right
            this.playerX += 1;
            this.grid[this.playerY][this.playerX] = new GridObject(
                " @ ",
                "player"
            );
            //check if i've won
            if (this.playerY === 0 && this.playerX === this.width - 1) {
                console.log("You Win!");
            }
            // this.updateTileAtPlayer(" @ ", "player");
            //update grid
            return this.drawGrid();
        }
    }
    moveLeft(mover) {
        //handle player movement
        if (mover === "player") {
            //first check if I can move here
            if (this.playerX === 0) {
                return process.stdout.write("Cannot move here \n");
            }
            //check if the tile i'm about to visited is unvisited
            if (
                this.grid[this.playerY][this.playerX - 1].state === "unvisited"
            ) {
                // console.log("Visited an unvisited tile");
                this.encounter();
                //random generation for encounters
            }
            //mark the tile i'm on as visited
            this.grid[this.playerY][this.playerX] = new GridObject(
                " _ ",
                "visited"
            );
            //move me to the right
            this.playerX -= 1;
            this.grid[this.playerY][this.playerX] = new GridObject(
                " @ ",
                "player"
            );
            //check if i've won
            if (this.playerY === 0 && this.playerX === this.width - 1) {
                console.log("You Win!");
            }
            //update grid
            return this.drawGrid();
        }
    }
    moveUp(mover) {
        //handle player movement
        if (mover === "player") {
            //first check if I can move here
            if (this.playerY === 0) {
                return process.stdout.write("Cannot move here \n");
            }
            //check if the tile i'm about to visited is unvisited
            if (
                this.grid[this.playerY - 1][this.playerX].state === "unvisited"
            ) {
                // console.log("Visited an unvisited tile");
                this.encounter();
                //random generation for encounters
            }
            //mark the tile i'm on as visited
            this.grid[this.playerY][this.playerX] = new GridObject(
                " _ ",
                "visited"
            );
            //move me to the right
            this.playerY -= 1;
            this.grid[this.playerY][this.playerX] = new GridObject(
                " @ ",
                "player"
            );
            //check if i've won
            if (this.playerY === 0 && this.playerX === this.width - 1) {
                console.log("You Win!");
            }
            //update grid
            return this.drawGrid();
        }
    }
    moveDown(mover) {
        //handle player movement
        if (mover === "player") {
            if (this.playerY === this.height - 1) {
                //first check if I can move here
                return process.stdout.write("Cannot move here \n");
            }
            //check if the tile i'm about to visited is unvisited
            if (
                this.grid[this.playerY + 1][this.playerX].state === "unvisited"
            ) {
                // console.log("Visited an unvisited tile");
                this.encounter();
                //random generation for encounters
            }
            //mark the tile i'm on as visited
            this.grid[this.playerY][this.playerX] = new GridObject(
                " _ ",
                "visited"
            );
            //move me to the right
            this.playerY += 1;
            this.grid[this.playerY][this.playerX] = new GridObject(
                " @ ",
                "player"
            );
            //check if i've won
            if (this.playerY === 0 && this.playerX === this.width - 1) {
                console.log("You Win!");
            }
            //update grid
            return this.drawGrid();
        }
    }
}

let myGrid = new Grid(10, 10);
myGrid.drawGrid();
myGrid.moveRight("player");
myGrid.moveUp("player");
myGrid.moveLeft("player");
myGrid.moveDown("player");
myGrid.moveRight("player");
myGrid.moveUp("player");
myGrid.moveLeft("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveRight("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
myGrid.moveUp("player");
