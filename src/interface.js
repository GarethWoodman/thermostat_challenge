$(document).ready(function() {
	let thermostat = new Thermostat();
	updateTemperature()
	

	$('#temperature-up').on('click', function() {
		thermostat.up();
		updateTemperature()
	})

	$('#temperature-down').click(function() {
		thermostat.down();
		updateTemperature()
	})

	$('#temperature-reset').click(function() {
		thermostat.resetTemperature();
		updateTemperature();
	})

	$('#power-saving-on').click(function() {
		thermostat.switchPowerSavingModeOn();
		$('#power-saving').text('on');
		updateTemperature();
	})

	$('#power-saving-off').click(function() {
		thermostat.switchPowerSavingModeOff();
		$('#power-saving').text('off');
		updateTemperature();
	})

	function updateTemperature() {
		$('#temperature').text(thermostat.temperature);
		$('#temperature').attr('class', thermostat.energyUsage());
	}
})