export default class CellMovement {

	moveCellsVertically(startCopy, targetCopy, speed, animation, playAnimation) {
		if (startCopy.y < targetCopy.y) {
			startCopy.y += Math.min(speed, targetCopy.y - startCopy.y);
			animation = requestAnimationFrame(playAnimation);
		} else if (startCopy.y > targetCopy.y) {
			startCopy.y -= Math.min(speed, startCopy.y - targetCopy.y);
			animation = requestAnimationFrame(playAnimation);
		};
	};
};