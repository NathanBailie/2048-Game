import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js';
import CellCleaning from './CellCleaning.js';
import MergeDownwards from './MergeDownwards.js';
import MergeUpwards from './MergeUpwards.js';
import MergeRightwards from './MergeRightwards.js';
import MergeLeftwards from './MergeLeftwards.js';
import InspectData from './InspectData.js';
import { getRandomNum, compareArraysOfObjects } from './utils.js';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let newGameButton = document.querySelector('.upperPanel__newGame');
let score = document.querySelector('.upperPanel__score p');
let victoryWindow = document.querySelector('.victoryWindow');
let finishWindow = document.querySelector('.finishWindow');
let undoButton = document.querySelector('.upperPanel__undo');

let cellDrawing = new CellDrawing();
let toDrawTheCell = cellDrawing.toDrawTheCell;

let basicSettings = new BasicSettings();
let cellSize = basicSettings.cellSize;
let space = basicSettings.space;
let speed = basicSettings.speed;

let cellCleaning = new CellCleaning();
let clearTheColumns = cellCleaning.clearTheColumns;
let clearTheRows = cellCleaning.clearTheRows;

// Cell Merging
let mergeDownwards = new MergeDownwards();
let moveAllCellsDown = mergeDownwards.moveAllCellsDown;
let mergeUpwards = new MergeUpwards();
let moveAllCellsUp = mergeUpwards.moveAllCellsUp;
let mergeRightwards = new MergeRightwards();
let moveAllCellsRight = mergeRightwards.moveAllCellsRight;
let mergeLeftwards = new MergeLeftwards();
let moveAllCellsLeft = mergeLeftwards.moveAllCellsLeft;

let inspectData = new InspectData();
let inspect = inspectData.inspect;

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

let previousData = [];
let play = true;
let count = 12;
let flag = false;
let interval;

function raiseCounter() {
	count += 1;
};

function gameOff() {
	play = false;
};

function createCellObject(x, y, num) {
	return {
		x: x,
		y: y,
		num: num,
		merged: false,
	};
};

if (score.textContent === '0') {
	score.style.color = '#a59e97';
};

toDrawTheBoard();

function toDrawTheBoard() {
	for (let elem of data) {
		toDrawTheCell(elem, ctx)
	};
}

function startNewGame() {
	for (let cell of data) {
		cell.num = 0;
		cell.merged = false;
	};
	previousData = [];
	score.textContent = 0;
	victoryWindow.style.opacity = '';
	finishWindow.style.opacity = '';
	play = true;

	let firstCellNum = getRandomNum(1, 100) >= 90 ? 4 : 2;
	let secondCellNum = getRandomNum(1, 100) >= 90 ? 4 : 2;
	let firstCell = getRandomNum(0, 15);
	let secondCell = getRandomNum(0, 15);

	while (secondCell === firstCell) {
		secondCell = getRandomNum(0, 15);
	};

	data[firstCell].num = firstCellNum;
	data[secondCell].num = secondCellNum;
	for (let elem of data) {
		toDrawTheCell(elem, ctx);
	};

	updateTheScore();
	if (score.textContent !== '0') {
		score.style.color = '#FFFAFA';
	};
};

function drawTheNewCell() {
	let newCellNum = getRandomNum(1, 100) >= 90 ? 4 : 2;
	let zeroNumCellIndexes = [];

	data.forEach((elem, index) => {
		if (elem.num === 0) {
			zeroNumCellIndexes.push(index);
		};
	});

	let randomNum = getRandomNum(0, zeroNumCellIndexes.length - 1);
	let id = zeroNumCellIndexes[randomNum];
	data[id].num = newCellNum;
	toDrawTheCell(data[id], ctx);
};

function runInterval() {
	if (compareArraysOfObjects(previousData, data)) {
		flag = false;
		return;
	};
	interval = setInterval(() => {
		if (count === 12 && flag === true) {
			flag = false;
			drawTheNewCell();
			clearInterval(interval);
			updateTheScore();
		};
	}, 0);
};

function copyData(data) {
	previousData = [];
	for (let elem of data) {
		previousData.push({ ...elem });
	};
};

function updateTheScore() {
	let result = data.reduce(function (sum, elem) {
		return sum + elem.num;
	}, 0);
	score.textContent = result;

	for (let cell of data) {
		if (cell.num === 2048) {
			play = false;
			victoryWindow.style.opacity = '1';
		};
	};
	inspect(data, finishWindow, gameOff);
};

function undoLastMove() {
	if (previousData.length > 0) {
		for (let i = 0; i < data.length; i++) {
			data[i].num = previousData[i].num;
			data[i].merged = previousData[i].merged;
		};
	}
	play = true;
	victoryWindow.style.opacity = '0';
	finishWindow.style.opacity = '0';
	toDrawTheBoard();
	updateTheScore();
};

undoButton.addEventListener('click', () => { undoLastMove() })

newGameButton.addEventListener('click', () => { startNewGame() });

window.addEventListener('keydown', (e) => {
	let mainArgs = [data, ctx, cellSize, space, speed, toDrawTheCell];
	let args1 = [...mainArgs, clearTheColumns];
	let args2 = [...mainArgs, clearTheRows];

	if (count === 12 && play) {
		if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
			littleOptimizer(copyData, data, moveAllCellsDown, raiseCounter, args1, runInterval);
		};
		if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
			littleOptimizer(copyData, data, moveAllCellsUp, raiseCounter, args1, runInterval);
		};
		if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
			littleOptimizer(copyData, data, moveAllCellsRight, raiseCounter, args2, runInterval);
		};
		if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
			littleOptimizer(copyData, data, moveAllCellsLeft, raiseCounter, args2, runInterval);
		};
	};
});

function littleOptimizer(copyData, data, mergeFunction, raiseCounter, args, runInterval) {
	count = 0;
	flag = true;
	copyData(data);
	mergeFunction(raiseCounter, args);
	runInterval();
};