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
}