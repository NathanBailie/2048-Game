import { zeroyingMergeValue } from './utils.js';


export default class MergeUpwards {
	mergeUp(cell, colNumber, raiseCounter, args, callback) {
		let [data, ctx, cellSize, space, speed, toDrawTheCell, clearTheColumns] = args;
		let index = 4;
		let spaced = false;
		let animation;
		let startCopy = { ...cell };
		let cellId = data.findIndex((elem) => elem === cell);
		let target;
		let targetCopy;
		let targetId;

		if (cell.num !== 0 && cell) {
			while (data[cellId - index].num === 0) {
				spaced = true;
				index += 4;
				if (!data[cellId - index]) {
					index -= 4;
					break;
				};
			};
			if (spaced) {
				if (data[cellId - index].merged ||
					data[cellId - index].num !== data[cellId].num &&
					data[cellId - index].num !== 0) {
					target = data[cellId - index + 4];
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
			clearTheColumns(ctx, colNumber, cellSize, space, data, toDrawTheCell);
			toDrawTheCell(startCopy, ctx);

			if (startCopy.y < targetCopy.y) {
				startCopy.y += Math.min(speed, targetCopy.y - startCopy.y);
				animation = requestAnimationFrame(playAnimation);
			} else if (startCopy.y > targetCopy.y) {
				startCopy.y -= Math.min(speed, startCopy.y - targetCopy.y);
				animation = requestAnimationFrame(playAnimation);
			}

			if (startCopy.x === target.x && startCopy.y === target.y) {
				clearTheColumns(ctx, colNumber, cellSize, space, data, toDrawTheCell);
				data[targetId].num = startCopy.num + targetCopy.num;
				toDrawTheCell(target, ctx);
				cancelAnimationFrame(animation);
				raiseCounter();
				callback && callback();
			}
		}
		playAnimation();
	};

	moveTheColUp = (colNumber, raiseCounter, args) => {
		let data = args[0];
		let index = 8 + colNumber - 1;
		let inspect = args[7];

		this.mergeUp(data[index - 4], colNumber, raiseCounter, args,
			() => {
				this.mergeUp(data[index], colNumber, raiseCounter, args,
					() => {
						this.mergeUp(data[index + 4], colNumber, raiseCounter, args,
							() => {
								zeroyingMergeValue('col', colNumber, data);
								colNumber === 4 && inspect();
							})
					})
			});
	};

	moveAllCellsUp = (raiseCounter, args) => {
		this.moveTheColUp(1, raiseCounter, args);
		this.moveTheColUp(2, raiseCounter, args);
		this.moveTheColUp(3, raiseCounter, args);
		this.moveTheColUp(4, raiseCounter, args);
	};
};