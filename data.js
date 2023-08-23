// CHANGE the Variables below according to your needs:

//Your homeassistant address. Ex: var hassaddress = "http://192.168.1.10:8123"
var hassaddress = ""; 

//Your homeassistant long lived token
var hasspass = ""; 

// your home floorplan file path. Ex: var floorplan1stFloor = "./images/floorplan.png"
var floorplan1stFloor = "./images/floorplan.png"; // your floorplan image path for 1st floor
var floorplan2ndFloor = "./images/floorplan.png"; // your floorplan image path for 2nd floor

// below you need to add your DEVICES in the following format:
// ['domain.device_id', X position, Y position, 'type'],
//
// real example:
// ["binary_sensor.office_window", 620, 40, "window"],
//
// All lines should end with a comma "," EXCEPT FOR THE LAST ONE. IF you have only one item, then it does not have to end with a comma.
//
// Types will define the icons and can be specified for the following DOMAINS: SWITCH, BINARY_SENSOR, SENSOR, MEDIA_PLAYER and WEATHER
// 
// CURRENTLY SUPPORTED ICONS PER DOMAIN:
//
// SWITCH: washingmachine, microwave, smartplug, dishwasher, heater, fridge, waterfountain
// BINARY_SENSOR: window, door
// SENSOR: battery, temperature, humidity
// MEDIA_PLAYER: tv, alexa, googleassistant
// WEATHER: 5dayforecast or omitted/none
//
// If a type is not informed, then the standard Icon for the category will be used
//
// You do not need/have to specify a type for DOMAIN=LIGHT, so it can be omitted.
//
// Full example:
//var devices1stFloor = [
//  ["binary_sensor.janela_escritorio", 620, 40, "window"],
//  ["light.lamp_escr", 565, 80], // no type specified :)
//  ["media_player.echo_dot_1", 15, 15, "assistant"],
//  ["binary_sensor.janela_suite", 95, 0, "window"],
//];


// devices for 1st floor
var devices1stFloor = [
  ["binary_sensor.janela_escritorio", 640, 30, "window"],
  ["binary_sensor.porta_entrada", 225, 510, "door"],
  ["light.lamp_cozinha", 450, 510],
  ["media_player.echo_dot_1", 115, 30, "alexa"],
  ["media_player.echo_dot_5", 275, 380, "alexa"],
  ["media_player.tv", 285, 285, "tv"],
  ["media_player.tv_suite", 243, 83, "tv"],
  ["switch.aquecedor_oleo_0", 545, 30, "heater"],
  ["switch.aquecedor_0", 260, 30, "heater"],
  ["switch.aquecedor_gas_0", 650, 530, "heater"],
  ["switch.microondas_0", 530, 455, "microwave"],
  ["switch.lava_loucas_0", 500, 530, "dishwasher"],
  ["switch.lava_roupas_0", 593, 530, "washingmachine"],
  ["switch.geladeira_0", 542, 530, "fridge"],
  ["switch.filtro_0", 400, 530, "waterfountain"],
  ["sensor.temp_externa", 605, 310, "temperature"],
  ["sensor.temp_suite", 243, 146, "temperature"],
  ["sensor.temp_sala_temperature", 275, 440, "temperature"],
  ["weather.apartamentocta", 110, 210, "5dayforecast"],
  ["weather.cta_weather", 190, 350]
];

// devices for the second floor
// leave empty if you only have 1 floor
// empty example: var devices2ndFloor = [];
var devices2ndFloor = [
  ["binary_sensor.janela_escritorio", 640, 30, "window"],
  ["binary_sensor.janela_suite", 194, 20, "window"],
  ["light.lamp_escr", 565, 83],
  ["light.lamp_suite", 183, 96],
  ["light.lamp_varanda", 595, 370],
  ["media_player.echo_dot_1", 115, 30, "alexa"],
  ["media_player.tv", 285, 285, "tv"],
  ["switch.geladeira_0", 542, 530, "fridge"],
  ["switch.filtro_0", 400, 530, "waterfountain"],
  ["sensor.temp_externa", 625, 420, "temperature"],
  ["sensor.temp_suite", 243, 146, "temperature"],
  ["sensor.temp_sala_temperature", 275, 440, "temperature"]
];