import BasicSettings from './BasicSettings';


export default class CellDrawing extends BasicSettings {
	basicSettings = new BasicSettings();

	cellSize = this.basicSettings.cellSize;
	center = this.basicSettings.center;
	space = this.basicSettings.space;
	bordRad = this.basicSettings.bordRad;
	speed = this.basicSettings.speed;


	chooseCellColor = (num) => {
		let color;
		switch (num) {
			case 0: color = "#CDC1B4"; break;
			case 2: color = "#EEE4DA"; break;
			case 4: color = "#EDE0C8"; break;
			case 8: color = "#f2b179"; break;
			case 16: color = "#F59563"; break;
			case 32: color = "#F67C5F"; break;
			case 64: color = "#F65E3B"; break;
			case 128: color = "#EDCF72"; break;
			case 256: color = "#EDCC61"; break;
			case 512: color = "#EDC850"; break;
			case 1024: color = "#EDC53F"; break;
			case 2048: color = "#EDC22E"; break;
			default: color = "#CDC1B4";
		};
		return color;
	};

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

