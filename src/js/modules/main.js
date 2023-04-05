import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js'

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellDrawing = new CellDrawing();
let toDrawTheCell = cellDrawing.toDrawTheCell;
let basicSettings = new BasicSettings();

let cellSize = basicSettings.cellSize;
let center = basicSettings.center;
let space = basicSettings.space;
let bordRad = basicSettings.bordRad;
let speed = basicSettings.speed;

let data = [
	// first row
	createCellObject(space, space, 0),
	createCellObject(cellSize + space * 2, space, 0),
	createCellObject(cellSize * 2 + space * 3, space, 0),
	createCellObject(cellSize * 3 + space * 4, space, 0),
	// second row
	createCellObject(space, cellSize + space * 2, 0),
	createCellObject(cellSize + space * 2, cellSize + space * 2, 0),
	createCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0),
	createCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),
	// third row
	createCellObject(space, cellSize * 2 + space * 3, 0),
	createCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0),
	createCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0),
	createCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),
	// fourth row
	createCellObject(space, cellSize * 3 + space * 4, 0),
	createCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0),
	createCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0),
	createCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0),
];

data[0].num = 0; // 0
data[1].num = 0; // 1
data[2].num = 0; // 2
data[3].num = 0; // 3
data[4].num = 0; // 4
data[5].num = 0; // 5
data[6].num = 0; // 6
data[7].num = 0; // 7
data[8].num = 0; // 8
data[9].num = 0; // 9
data[10].num = 0; // 10
data[11].num = 0; // 11
data[12].num = 0; // 12
data[13].num = 0; // 13
data[14].num = 0; // 14
data[15].num = 0; // 15


function createCellObject(x, y, num) {
	return {
		x: x,
		y: y,
		num: num,
		merged: false,
	};
};

toDrawTheBoard();

function toDrawTheBoard() {
	for (let elem of data) {
		toDrawTheCell(elem, ctx);
	};
};