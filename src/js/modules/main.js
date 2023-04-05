import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js'

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
	createCellObject(space, space, 0),  // 0
	createCellObject(cellSize + space * 2, space, 0), //1
	createCellObject(cellSize * 2 + space * 3, space, 0), //2
	createCellObject(cellSize * 3 + space * 4, space, 0), //3
	// second row
	createCellObject(space, cellSize + space * 2, 2), //4
	createCellObject(cellSize + space * 2, cellSize + space * 2, 0), //5
	createCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0), //6
	createCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0), //7
	// third row
	createCellObject(space, cellSize * 2 + space * 3, 0), //8
	createCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0), //9
	createCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0), //10
	createCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0), //11
	// fourth row
	createCellObject(space, cellSize * 3 + space * 4, 0), //12
	createCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0), //13
	createCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0), //14
	createCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0), //15
];

function createCellObject(x, y, num) {
	return {
		x: x,
		y: y,
		num: num,
		merged: false,
	};
};