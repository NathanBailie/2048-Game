import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js'
import CellCleaning from './CellCleaning.js'

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
function mergeDown(cell, colNumber, callback) {
	let index = 4;
	let spaced = false;
	let animation;
	let startCopy = { ...cell };
	let cellId = data.findIndex((elem) => elem === cell);
	let target;
	let targetCopy;
	let targetId;

	if (cell.num !== 0) {
		while (data[cellId + index].num === 0) {
			spaced = true;
			index += 4;
			if (!data[cellId + index]) {
				index -= 4;
				break;
			};
		};
		if (spaced) {
			if (data[cellId + index].merged ||
				data[cellId + index].num !== data[cellId].num &&
				data[cellId + index].num !== 0) {
				target = data[cellId + index - 4];
			};
			if (!data[cellId + index].merged) {
				if (data[cellId + index].num === data[cellId].num) {
					data[cellId + index].merged = true;
					target = data[cellId + index];
				} else if (data[cellId + index].num === 0) {
					target = data[cellId + index];
				};
			};
		};
		if (!spaced) {
			if (data[cellId + index].merged ||
				data[cellId].merged ||
				data[cellId + index].num !== data[cellId].num &&
				data[cellId + index].num !== 0) {
				callback && callback();
				return;
			};
			if (!data[cellId + index].merged) {
				if (data[cellId + index].num === data[cellId].num) {
					data[cellId + index].merged = true;
					target = data[cellId + index];
				} else if (data[cellId + index].num === 0) {
					target = data[cellId + index];
				};
			};
		};
	} else {
		callback && callback();
		return;
	};

	targetCopy = { ...target };
	targetId = data.findIndex((elem) => elem === target);
	data[cellId].num = 0;

	function playAnimation() {
		clearTheColumns(ctx, colNumber, cellSize, space, data, toDrawTheCell);
		toDrawTheCell(startCopy, ctx);

		if (startCopy.y < targetCopy.y) {
			startCopy.y += Math.min(speed, targetCopy.y - startCopy.y);
			animation = requestAnimationFrame(playAnimation);
		} else if (startCopy.y > targetCopy.y) {
			startCopy.y -= Math.min(speed, startCopy.y - targetCopy.y);
			animation = requestAnimationFrame(playAnimation);
		}

		if (startCopy.y === target.y) {
			clearTheColumns(ctx, colNumber, cellSize, space, data, toDrawTheCell);
			data[targetId].num = startCopy.num + targetCopy.num;
			toDrawTheCell(target, ctx);
			cancelAnimationFrame(animation);
			callback && callback();
		}
	}
	playAnimation();
};


function moveTheColDown(colNumber) {
	if (colNumber > 4 || colNumber < 1) {
		throw new Error('Wrong row number, please choose from 1 to 4');
	};

	let index = 8 + colNumber - 1;

	mergeDown(data[index], colNumber,
		() => {
			mergeDown(data[index - 4], colNumber,
				() => {
					mergeDown(data[index - 8], colNumber,
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

// moveAllCellsDown()

window.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowDown') {
		moveAllCellsDown();
	}
});