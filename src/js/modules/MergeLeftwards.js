import { zeroyingMergeValue } from './utils.js';


export default class MergeLeftwards {
	mergeLeft(cell, rowNumber, raiseCounter, args, callback) {
		let [data, ctx, cellSize, space, speed, toDrawTheCell, clearTheRows] = args;
		let index = 1;
		let spaced = false;
		let animation;
		let startCopy = { ...cell };
		let cellId = data.findIndex((elem) => elem === cell);
		let target;
		let targetCopy;
		let targetId;

		if (cellId === 0 ||
			cellId === 4 ||
			cellId === 8 ||
			cellId === 12) {
			raiseCounter();
			callback && callback();
			return;
		};

		if (cell.num !== 0) {
			while (data[cellId - index].num === 0 &&
				cellId - index !== 0 &&
				cellId - index !== 4 &&
				cellId - index !== 8 &&
				cellId - index !== 12) {
				spaced = true;
				index += 1;
			};

			if (spaced) {
				if (data[cellId - index].merged ||
					data[cellId - index].num !== data[cellId].num &&
					data[cellId - index].num !== 0) {
					target = data[cellId - index + 1];
				};
				if (!data[cellId - index].merged) {
					if (data[cellId - index].num === data[cellId].num) {
						data[cellId - index].merged = true;
						target = data[cellId - index];
					} else if (data[cellId - index].num === 0) {
						target = data[cellId - index];
					};
				};
			};

			if (!spaced) {
				if (data[cellId - index].merged ||
					data[cellId].merged ||
					data[cellId - index].num !== data[cellId].num &&
					data[cellId - index].num !== 0) {
					raiseCounter();
					callback && callback();
					return;
				};

				if (!data[cellId - index].merged) {
					if (data[cellId - index].num === data[cellId].num) {
						data[cellId - index].merged = true;
						target = data[cellId - index];
					} else if (data[cellId - index].num === 0) {
						target = data[cellId - index];
					};
				};
			};
		} else {
			raiseCounter();
			callback && callback();
			return;
		};

		targetCopy = { ...target };
		targetId = data.findIndex((elem) => elem === target);
		data[cellId].num = 0;

		function playAnimation() {
			clearTheRows(ctx, rowNumber, cellSize, space, data, toDrawTheCell);
			toDrawTheCell(startCopy, ctx);

			if (startCopy.x < targetCopy.x) {
				startCopy.x += Math.min(speed, targetCopy.x - startCopy.x);
				animation = requestAnimationFrame(playAnimation);
			} else if (startCopy.x > targetCopy.x) {
				startCopy.x -= Math.min(speed, startCopy.x - targetCopy.x);
				animation = requestAnimationFrame(playAnimation);
			}

			if (startCopy.x === target.x && startCopy.y === target.y) {
				clearTheRows(ctx, rowNumber, cellSize, space, data, toDrawTheCell);
				data[targetId].num = startCopy.num + targetCopy.num;
				toDrawTheCell(target, ctx);
				cancelAnimationFrame(animation);
				raiseCounter();
				callback && callback();
			}
		}
		playAnimation();
	};

	moveTheColLeft = (rowNumber, raiseCounter, args) => {
		let data = args[0];
		let index = rowNumber * 4;

		this.mergeLeft(data[index - 3], rowNumber, raiseCounter, args,
			() => {
				this.mergeLeft(data[index - 2], rowNumber, raiseCounter, args,
					() => {
						this.mergeLeft(data[index - 1], rowNumber, raiseCounter, args,
							() => { zeroyingMergeValue('row', rowNumber, data) }
						)
					})
			});
	};

	moveAllCellsLeft = (raiseCounter, args) => {
		this.moveTheColLeft(1, raiseCounter, args);
		this.moveTheColLeft(2, raiseCounter, args);
		this.moveTheColLeft(3, raiseCounter, args);
		this.moveTheColLeft(4, raiseCounter, args);
	};
};