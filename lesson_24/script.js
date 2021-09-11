const TILES = [];
let countMoves = 0;

function initGame() {
    const tilesContainer = document.getElementById("tiles");
    tilesContainer.innerHTML = "";
    tilesContainer.addEventListener("click", onTileClick);
    TILES.length = 0; // clear all tiles in the array
    let tileIndex = 0;
    const randomIndex = getRandomIndex();
    for (let i = 0; i < 4; i++) {
        TILES[i] = [];
        for (let j = 0; j < 4; j++) {
            tileIndex = randomIndex();
            TILES[i].push(createTileEl(tileIndex));
        }
    }
    renderTiles();
    solvable(TILES);
}

function getRandomIndex() {
    let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return function () {
        const randomIndex = Math.floor(Math.random() * availableIdx.length);
        const val = availableIdx[randomIndex];
        availableIdx = availableIdx.filter((el) => el !== val);
        return val;
    };
}

// для проверки на выгриш
function getWinIndex() {
    let count = 0;
    let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return function () {

        const index = count++;
        const val = availableIdx[index];
        return val;
    };

}

function createTileEl(text) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = text;
    return tile;
}

function renderTiles() {
    const tilesContainer = document.getElementById("tiles");
    tilesContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            tilesContainer.append(TILES[i][j]);
        }
    }
}

function onTileClick(e) {
    if (e.target.classList.contains("tile")) {
        const id = +e.target.textContent;
        if (id) {
            swapTiles(id);
        }
    }
    renderTiles();
    moves(countMoves);
    countMoves++;
    if (won(TILES)) {
        const el = document.getElementById("tiles");
        el.textContent = "congratulation - you won";
        console.log("You won!");
    } else {
        console.log("keep trying");
    }
}

function swapTiles(id) {
    const [tileX, tileY] = findTileCoordById(id);
    const [emptyX, emptyY] = findEmptyTileCoords();
    if (
        (tileX === emptyX && Math.abs(tileY - emptyY) === 1) ||
        (tileY === emptyY && Math.abs(tileX - emptyX) === 1)
    ) {
        const temp = TILES[tileX][tileY];
        TILES[tileX][tileY] = TILES[emptyX][emptyY];
        TILES[emptyX][emptyY] = temp;
    }
}

function findEmptyTileCoords() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (TILES[i][j].textContent === "") {
                return [i, j];
            }
        }
    }
}

function findTileCoordById(id) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (TILES[i][j].textContent == id) {
                return [i, j];
            }
        }
    }
}

function won(arr) {
    if (arr[3][3].textContent !== "") {
        return false;
    } else {
        let array = arr.flat();
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].textContent != (i + 1)) {
                return false;
            }
        }
    }
    return true;
}

function solvable(arr) {
    let kDisorder = 0;

        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (arr[i][j].textContent > arr[j][i].textContent) {
                    kDisorder++;
                }
            }
        }
    if (kDisorder % 2!==0) {
        initGame()
    }
}

function moves(count) {
    let container = document.getElementById('moves');
    container.innerText = 'moves = ' + count;

}
