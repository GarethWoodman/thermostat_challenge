'use strict';

class Thermostat{
  constructor(){
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }
  getCurrentTemperature(){
    return this.temperature;
  }
  up() {
    if (this.isMaximumTempeature()) {
      return;
    }
    this.temperature += 1;
  }
  down() {
    if(this.isMinimumTemperature()){
      return;
    }
    this.temperature -= 1;
  }
  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  switchPowerSavingModeOn(){
    this.powerSavingMode = true;
  }
  isMaximumTempeature(){
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON
  }
};
