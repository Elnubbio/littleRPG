class GridObject {
    constructor(marker = " . ", state = "unvisited") {
        this.marker = marker;
        this.state = state;
    }
}

class Grid {
    constructor(height, width) {
        //Initialise variables
        this.height = height;
        this.width = width;
        this.grid = [];
        //Create grid using 2D array
        for (let row = 0; row < height; row++) {
            this.grid[row] = new Array(width); //for every row, create a column
            for (let col = 0; col < width; col++) {
                this.grid[row][col] = new GridObject();
            }
        }
        // console.log(this.grid);
        this.grid[this.height - 1][0] = new GridObject(" @ ");
        this.grid[0][this.width - 1] = new GridObject(" X ");
    }

    //draw the grid
    drawGrid() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                process.stdout.write(this.grid[i][j].marker);
            }
            process.stdout.write("\n");
        }
    }

    moveRight() {}
}

let myGrid = new Grid(15, 10);
myGrid.drawGrid();
