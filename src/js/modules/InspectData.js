export default class InspectData {

  inspect = (data, finishWindow, play) => {
    let first = this.minusInspect(1, data) ? true : false;
    let second = this.plusInspect(1, data) ? true : false;
    let third = this.minusInspect(4, data) ? true : false;
    let fourth = this.plusInspect(4, data) ? true : false;

    if (first || second || third || fourth) {
      return true;
    } else {
      play = false;
      finishWindow.style.opacity = 1;
    };
  };

  minusInspect = (num, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i - num]) {
        if (num === 4) {
          if (data[i - num].num === data[i].num ||
            data[i - num].num === 0) {
            return true;
          };
        };
        if (num === 1) {
          if ((data[i - num].num === data[i].num ||
            data[i - num].num === 0) &&
            i !== 0 &&
            i !== 4 &&
            i !== 8 &&
            i !== 12) {
            return true;
          };
        };
      };
    };
  };

  plusInspect = (num, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i + num]) {
        if (num === 4) {
          if (data[i + num].num === data[i].num ||
            data[i + num].num === 0) {
            return true;
          };
        };
        if (num === 1) {
          if ((data[i + num].num === data[i].num ||
            data[i + num].num === 0) &&
            i !== 3 &&
            i !== 7 &&
            i !== 11 &&
            i !== 15) {
            return true;
          };
        };
      };
    };
  };
}