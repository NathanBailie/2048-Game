export default class MergeDownwards {

	mergeDown(cell, colNumber, data, ctx, cellSize, space, speed, toDrawTheCell, clearTheColumns, callback) {
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
};