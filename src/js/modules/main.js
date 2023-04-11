import BasicSettings from './BasicSettings.js';
import CellDrawing from './CellDrawing.js';
import CellCleaning from './CellCleaning.js';
import MergeDownwards from './MergeDownwards.js';
import MergeUpwards from './MergeUpwards.js';
import MergeRightwards from './MergeRightwards.js';
import MergeLeftwards from './MergeLeftwards.js';
import { getRandomNum, compareArraysOfObjects } from './utils.js';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let newGameButton = document.querySelector('.upperPanel__newGame');
let score = document.querySelector('.upperPanel__score p');
let victoryWindow = document.querySelector('.victoryWindow');
let undoButton = document.querySelector('.upperPanel__undo');

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

let previousData = [];
let play = false;
let count = 12;
let flag = false;
let interval;

function raiseCounter() {
	count += 1;
};

// data[0].num = 4; // 0
// data[1].num = 2; // 1
// data[2].num = 2; // 2
// data[3].num = 4; // 3
// data[4].num = 4; // 4
// data[5].num = 2; // 5
// data[6].num = 2; // 6
// data[7].num = 4; // 7
// data[8].num = 2; // 8
// data[9].num = 2; // 9
// data[10].num = 4; // 10
// data[11].num = 2; // 11
// data[12].num = 2; // 12
// data[13].num = 4; // 13
// data[14].num = 4; // 14
// data[15].num = 8; // 15


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

for (const elem of data) {
	toDrawTheCell(elem, ctx)
};

function startNewGame() {
	let firstCellNum = getRandomNum(1, 100) >= 90 ? 4 : 2;
	let secondCellNum = getRandomNum(1, 100) >= 90 ? 4 : 2;

	for (let elem of data) {
		elem.num = 0;
		elem.merged = false;
	};
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
	play = true;
	updateTheScore();
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

	if (result === 2048) {
		play = false;
		console.log(123);
		victoryWindow.style.opacity = '1';
	}
};

newGameButton.addEventListener('click', () => { startNewGame() });

window.addEventListener('keydown', (e) => {
	let mainArgs = [data, ctx, cellSize, space, speed, toDrawTheCell];
	let args1 = [...mainArgs, clearTheColumns];
	let args2 = [...mainArgs, clearTheRows];

	if (count === 12 && play) {
		if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
			count = 0;
			flag = true;
			copyData(data);
			moveAllCellsDown(raiseCounter, args1);
			runInterval();
		};
		if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
			count = 0;
			flag = true;
			copyData(data);
			moveAllCellsUp(raiseCounter, args1);
			runInterval();
		};
		if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
			count = 0;
			flag = true;
			copyData(data);
			moveAllCellsRight(raiseCounter, args2);
			runInterval();
		};
		if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
			count = 0;
			flag = true;
			copyData(data);
			moveAllCellsLeft(raiseCounter, args2);
			runInterval();
		};
	};
});