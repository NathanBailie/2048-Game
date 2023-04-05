import BasicSettings from './BasicSettings';


export default class CellDrawing extends BasicSettings {
	basicSettings = new BasicSettings();

	cellSize = this.basicSettings.cellSize;
	center = this.basicSettings.center;
	space = this.basicSettings.space;
	bordRad = this.basicSettings.bordRad;
	speed = this.basicSettings.speed;


	chooseFontSize = (num) => {
		let fontSize = "56px";
		if (num < 128) {
			fontSize = "56px";
		};
		if (num >= 128) {
			fontSize = "43px";
		};
		if (num >= 1024) {
			fontSize = "33px";
		};
		return fontSize;
	};
};

