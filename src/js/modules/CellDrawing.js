import BasicSettings from './BasicSettings';


export default class CellDrawing extends BasicSettings {
	basicSettings = new BasicSettings();

	cellSize = this.basicSettings.cellSize;
	center = this.basicSettings.center;
	space = this.basicSettings.space;
	bordRad = this.basicSettings.bordRad;
	speed = this.basicSettings.speed;



	chooseTextColor = (num) => {
		let color;
		switch (num) {
			case 0: color = "#CDC1B4"; break;
			case 2: color = "#776E65"; break;
			case 4: color = "#776E65"; break;
			case 8: color = "#f9f6f2"; break;
			default: color = "#f9f6f2";
		};
		return color;
	};

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

