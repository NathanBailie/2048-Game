export function zeroyingMergeValue(rowOrCol, colOrRowNumber, data) {
	if (rowOrCol === 'col') {
		let index = 8 + colOrRowNumber - 1;
		data[index + 4].merged = false;
		data[index].merged = false;
		data[index - 4].merged = false;
		data[index - 8].merged = false;
	};
	if (rowOrCol === 'row') {
		let index = (colOrRowNumber - 1) * 4;
		data[index + 3].merged = false;
		data[index + 2].merged = false;
		data[index + 1].merged = false;
		data[index].merged = false;
	};
};

export function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function compareArraysOfObjects(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		let keys1 = Object.keys(arr1[i]);
		let keys2 = Object.keys(arr2[i]);
		if (!keys1.every(key => keys2.includes(key))) {
			return false;
		};

		let values1 = Object.values(arr1[i]);
		let values2 = Object.values(arr2[i]);
		if (!values1.every(value => values2.includes(value))) {
			return false;
		};
	};

	return true;
};