export default class CellCleaning {
	clearTheColumns = (ctx, colNumber, cellSize, space, data, toDrawTheCell) => {
		switch (colNumber) {
			case 1:
				ctx.clearRect(
					space,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[0], ctx);
				toDrawTheCell(data[4], ctx);
				toDrawTheCell(data[8], ctx);
				toDrawTheCell(data[12], ctx);
				break;
			case 2:
				ctx.clearRect(
					cellSize + space * 2,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[1], ctx);
				toDrawTheCell(data[5], ctx);
				toDrawTheCell(data[9], ctx);
				toDrawTheCell(data[13], ctx);
				break;
			case 3:
				ctx.clearRect(
					cellSize * 2 + space * 3,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[2], ctx);
				toDrawTheCell(data[6], ctx);
				toDrawTheCell(data[10], ctx);
				toDrawTheCell(data[14], ctx);
				break;
			case 4:
				ctx.clearRect(
					cellSize * 3 + space * 4,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[3], ctx);
				toDrawTheCell(data[7], ctx);
				toDrawTheCell(data[11], ctx);
				toDrawTheCell(data[15], ctx);
				break;

			default:
				break;
		}; switch (colNumber) {
			case 1:
				ctx.clearRect(
					space,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[0], ctx);
				toDrawTheCell(data[4], ctx);
				toDrawTheCell(data[8], ctx);
				toDrawTheCell(data[12], ctx);
				break;
			case 2:
				ctx.clearRect(
					cellSize + space * 2,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[1], ctx);
				toDrawTheCell(data[5], ctx);
				toDrawTheCell(data[9], ctx);
				toDrawTheCell(data[13], ctx);
				break;
			case 3:
				ctx.clearRect(
					cellSize * 2 + space * 3,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[2], ctx);
				toDrawTheCell(data[6], ctx);
				toDrawTheCell(data[10], ctx);
				toDrawTheCell(data[14], ctx);
				break;
			case 4:
				ctx.clearRect(
					cellSize * 3 + space * 4,
					0,
					cellSize,
					cellSize * 4 + space * 5);
				toDrawTheCell(data[3], ctx);
				toDrawTheCell(data[7], ctx);
				toDrawTheCell(data[11], ctx);
				toDrawTheCell(data[15], ctx);
				break;

			default:
				break;
		};
	};
};