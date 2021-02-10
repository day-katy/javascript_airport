'use strict';

class Airport {
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
  }

  planes() {
    return this._hangar;
  }

  clearForLanding(plane) {
    if(this._weather.isStormy()){
      throw new Error('cannot land during a storm');
    }
    this._hangar.push(plane);
  }
 
  clearForTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot takeoff during a storm');
    }
    this._hangar = [];
  }

  isStormy() {
    return false;
  }
};



