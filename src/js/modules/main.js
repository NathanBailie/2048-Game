import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js';
import CellCleaning from './CellCleaning.js';
import MergeDownwards from './MergeDownwards.js';
import MergeUpwards from './MergeUpwards.js';
import MergeRightwards from './MergeRightwards.js';
import MergeLeftwards from './MergeLeftwards.js';

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

let cellCleaning = new CellCleaning();
let clearTheColumns = cellCleaning.clearTheColumns;
let clearTheRows = cellCleaning.clearTheRows;

let mergeDownwards = new MergeDownwards();
let moveAllCellsDown = mergeDownwards.moveAllCellsDown;

let mergeUpwards = new MergeUpwards();
let moveAllCellsUp = mergeUpwards.moveAllCellsUp;

let mergeRightwards = new MergeRightwards();
let moveAllCellsRight = mergeRightwards.moveAllCellsRight;

let mergeLeftwards = new MergeLeftwards();
let moveAllCellsLeft = mergeLeftwards.moveAllCellsLeft;

let data = [
	createCellObject(space, space, 0),
	createCellObject(cellSize + space * 2, space, 0),
	createCellObject(cellSize * 2 + space * 3, space, 0),
	createCellObject(cellSize * 3 + space * 4, space, 0),
	createCellObject(space, cellSize + space * 2, 0),
	createCellObject(cellSize + space * 2, cellSize + space * 2, 0),
	createCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0),
	createCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),
	createCellObject(space, cellSize * 2 + space * 3, 0),
	createCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0),
	createCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0),
	createCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),
	createCellObject(space, cellSize * 3 + space * 4, 0),
	createCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0),
	createCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0),
	createCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0),
];

let count = 12;

function raiseCounter() {
	count += 1;
};

function changeMergeValue(index) {
	data[index].merged = true;
};

data[0].num = 4; // 0
data[1].num = 2; // 1
data[2].num = 2; // 2
data[3].num = 4; // 3
data[4].num = 4; // 4
data[5].num = 2; // 5
data[6].num = 2; // 6
data[7].num = 4; // 7
data[8].num = 2; // 8
data[9].num = 2; // 9
data[10].num = 4; // 10
data[11].num = 2; // 11
data[12].num = 2; // 12
data[13].num = 4; // 13
data[14].num = 4; // 14
data[15].num = 8; // 15


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

window.addEventListener('keydown', (e) => {
	let mainArgs = [data, ctx, cellSize, space, speed, toDrawTheCell];
	let args1 = [...mainArgs, clearTheColumns];
	let args2 = [...mainArgs, clearTheRows];
	if (count === 12) {
		if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
			count = 0;
			moveAllCellsDown(raiseCounter, args1);
		};
		if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
			count = 0;
			moveAllCellsUp(raiseCounter, args1);
		};
		if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
			count = 0;
			moveAllCellsRight(raiseCounter, args2, changeMergeValue);
		};
		if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
			count = 0;
			moveAllCellsLeft(raiseCounter, args2, changeMergeValue);
		};
	}
});