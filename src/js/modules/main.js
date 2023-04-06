import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js';
import CellCleaning from './CellCleaning.js';
import CellMovement from './CellMovement.js';
import MergeDownwards from './MergeDownwards.js';

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

let mergeDownwards = new MergeDownwards();
let mergeDown = mergeDownwards.mergeDown;

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

data[0].num = 2; // 0
data[1].num = 2; // 1
data[2].num = 2; // 2
data[3].num = 2; // 3
data[4].num = 2; // 4
data[5].num = 2; // 5
data[6].num = 2; // 6
data[7].num = 0; // 7
data[8].num = 2; // 8
data[9].num = 2; // 9
data[10].num = 4; // 10
data[11].num = 2; // 11
data[12].num = 2; // 12
data[13].num = 4; // 13
data[14].num = 4; // 14
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

function zeroyingMergeValue(data) {
	for (let elem of data) {
		elem.merged = false;
	};
};


// !
function moveTheColDown(colNumber) {
	let args = [data, ctx, cellSize, space, speed, toDrawTheCell, clearTheColumns]
	if (colNumber > 4 || colNumber < 1) {
		throw new Error('Wrong row number, please choose from 1 to 4');
	};

	let index = 8 + colNumber - 1;

	mergeDown(data[index], colNumber, ...args,
		() => {
			mergeDown(data[index - 4], colNumber, ...args,
				() => {
					mergeDown(data[index - 8], colNumber, ...args,
						() => { zeroyingMergeValue(data) }
					)
				})
		});
}

function moveAllCellsDown() {
	moveTheColDown(1);
	moveTheColDown(2);
	moveTheColDown(3);
	moveTheColDown(4);
};


window.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowDown') {
		moveAllCellsDown();
	}
});