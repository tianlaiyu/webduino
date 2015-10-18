'use strict';

goog.provide('Blockly.Blocks.webduino');
goog.require('Blockly.Blocks');

Blockly.Blocks.colour.HUE = 120;

/* demo */

Blockly.Blocks['demo_show_text'] = {
  init: function () {
    this.appendValueInput("show_")
      .appendField("顯示文字：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['demo_image_url'] = {
  init: function () {
    this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("圖片網址");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['demo_image_click'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField("點擊圖片，執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['demo_button_click'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField("點選")
      .appendField(new Blockly.FieldDropdown([
        ["按鈕1", "1"],
        ["按鈕2", "2"],
        ["按鈕3", "3"],
        ["按鈕4", "4"],
        ["按鈕5", "5"]
      ]), "name_")
      .appendField("執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['demo_area_color'] = {
  init: function () {
    this.appendValueInput("color_")
      .appendField("設定區域顏色：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wbe3vd
Blockly.Blocks['tutorial_youtube'] = {
  init: function () {
    this.appendValueInput("name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE, "設定 Youtube：");
    this.appendDummyInput()
      .appendField("   ID：")
      .appendField(new Blockly.FieldTextInput("..."), "id_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#kqjbv8
Blockly.Blocks['tutorial_youtube_volume'] = {
  init: function () {
    this.appendValueInput("volume_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET, "設定")
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VOLUME, "音量：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tih6od
Blockly.Blocks['tutorial_youtube_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET, "設定")
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SPEED, " 的播放速度：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SLOW, "0.5"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_NORMAL, "1"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_FAST, "1.25"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VERYFAST, "1.5"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SUPERFAST, "2"]
      ]), "speed_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tcfvai
Blockly.Blocks['tutorial_youtube_control'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET, "設定")
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUS, " 的狀態為：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPLAY, "1"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPAUSE, "2"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETSTOP, "0"]
      ]), "status_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#metxhc
Blockly.Blocks['tutorial_youtube_status'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUS, " 的狀態為：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSPLAY, "1"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSPAUSE, "2"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSSTOP, "0"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSSTART, "-1"]
      ]), "status_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vcm5tv
Blockly.Blocks['tutorial_youtube_id'] = {
  init: function () {
    this.appendValueInput("id_")
      .appendField("更換")
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField("影片，要更換的 id：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

/**
 * console
 * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vnzmgi
 */
Blockly.Blocks['console'] = {
  init: function () {
    this.appendValueInput('console')
      .appendField(Blockly.Msg.CUSTOM_JS_CONSOLE, 'console');
    this.setColour(0);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/');
  }
};

/**
 * date and time
 * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rrm4nf
 */
Blockly.Blocks['getdate'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CUSTOM_JS_Date, "現在的日期")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.CUSTOM_JS_Date_1, "1"],
        [Blockly.Msg.CUSTOM_JS_Date_2, "2"],
        [Blockly.Msg.CUSTOM_JS_Date_3, "3"],
        [Blockly.Msg.CUSTOM_JS_Date_4, "4"],
        [Blockly.Msg.CUSTOM_JS_Date_5, "5"],
        [Blockly.Msg.CUSTOM_JS_Date_6, "6"]
      ]), "date_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(20);
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['gettime'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CUSTOM_JS_Time, "現在的時間")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.CUSTOM_JS_Time_1, "1"],
        [Blockly.Msg.CUSTOM_JS_Time_2, "2"],
        [Blockly.Msg.CUSTOM_JS_Time_3, "3"],
        [Blockly.Msg.CUSTOM_JS_Time_4, "4"]
      ]), "time_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(20);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bq2fue
Blockly.Blocks['board_ready'] = {
  init: function () {
    this.appendValueInput("device_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_READY_WEBDUINO);
    this.appendDummyInput()
      .appendField("   ")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "check_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN, "串聯");
    this.appendStatementInput("callbacks_");
    this.setTooltip('');
    this.setColour(290);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gkt6j9
Blockly.Blocks['board_ready_serial_port'] = {
  init: function () {
    this.appendValueInput("path_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_READY_PATH, "開發板 路徑：");
    this.appendValueInput("baudrate_")
      .setCheck("Number")
      .appendField("baudRate");
    this.appendDummyInput()
      .appendField("   ")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "check_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN, "串聯");
    this.appendStatementInput("callbacks_");
    this.setTooltip('');
    this.setColour(290);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tzhs2o
Blockly.Blocks['board_error'] = {
  init: function () {
    this.appendValueInput("device_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_ERROR_IF);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BOARD_ERROR);
    this.appendStatementInput("callbacks_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_ERROR_DO, "執行：");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ophu3b
Blockly.Blocks['all_board_ready'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN_OK, "當開發板串連完成");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN_DO, "執行：");
    this.setTooltip('');
    this.setColour(0);
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jo278f
Blockly.Blocks['board_query_pin_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_QUERY_PIN, "偵測開發板")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_QUERY_PIN_NUM, "號 腳位");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_PIN_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(120);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['board_pin_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIN_STATE, "腳位狀態");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(120);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['led_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LED, "Led")
      .appendField(Blockly.Msg.WEBDUINO_LED_PIN, "pin")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['led_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "led_")
      .appendField(Blockly.Msg.WEBDUINO_LED_SET_STATE, "set state")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['led_toggle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "led_")
      .appendField(Blockly.Msg.WEBDUINO_LED_TOGGLE, "toggle");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['led_intensity'] = {
  init: function () {
    this.appendValueInput("intensity_")
      .setCheck("Number")
      .appendField(new Blockly.FieldVariable("led"), "led_")
      .appendField(Blockly.Msg.WEBDUINO_LED_INTENSITY, "強度 (0-1)：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#u7a4oh
Blockly.Blocks['led_callback'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LED_IF, "如果")
      .appendField(new Blockly.FieldVariable("led"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_LED_STATE_IS, " 的狀態為：")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_LED_STATE_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rgbled_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RGBLED, "RGBLed")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_RED, "red")
      .appendField(new Blockly.FieldDropdown([
        ["3", "3"],
        ["5", "5"],
        ["6", "6"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"]
      ]), "red_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_GREEN, "green")
      .appendField(new Blockly.FieldDropdown([
        ["3", "3"],
        ["5", "5"],
        ["6", "6"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"]
      ]), "green_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_BLUE, "blue")
      .appendField(new Blockly.FieldDropdown([
        ["3", "3"],
        ["5", "5"],
        ["6", "6"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"]
      ]), "blue_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rgbled_setcolor'] = {
  init: function () {
    this.appendValueInput("color_")
      .appendField(new Blockly.FieldVariable(" "), "rgbled_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_SETCOLOR, "set color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['car_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_CAR)
      .appendField(Blockly.Msg.WEBDUINO_CAR_F)
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "f_")
      .appendField(Blockly.Msg.WEBDUINO_CAR_B)
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "b_")
      .appendField(Blockly.Msg.WEBDUINO_CAR_L)
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "l_")
      .appendField(Blockly.Msg.WEBDUINO_CAR_R)
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "r_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['car_move'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(new Blockly.FieldVariable(" "), "car_")
      .appendField(new Blockly.FieldDropdown([
        ["↑", "forward"],
        ["↓", "backward"],
        ["↺", "left"],
        ["↻", "right"],
        ["✕", "stop"]
      ]), "move_")
      .appendField(Blockly.Msg.WEBDUINO_CAR_MOVE_FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_CAR_MOVE_SEC);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fish_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH);
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fish_angle'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(new Blockly.FieldVariable(" "), "fish_")
      .appendField(new Blockly.FieldDropdown([
        ["➚ " + Blockly.Msg.WEBDUINO_FISH_SOAR, "soar"],
        ["➘ " + Blockly.Msg.WEBDUINO_FISH_SINK, "sink"]
      ]), "angle_")
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_SEC);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fish_move'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(new Blockly.FieldVariable(" "), "fish_")
      .appendField(new Blockly.FieldDropdown([
        ["↑ " + Blockly.Msg.WEBDUINO_FISH_MOVE, ""],
        ["↺ " + Blockly.Msg.WEBDUINO_FISH_LEFT, "1"],
        ["↻ " + Blockly.Msg.WEBDUINO_FISH_RIGHT, "2"]
      ]), "direction_")
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_SEC);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_SPEED)
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"]
      ]), "speed_");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['timer'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(Blockly.Msg.WEBDUINO_TIMER_AFTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TIMER_SECOND);
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_TIMER_DO, "do");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['delay'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(Blockly.Msg.WEBDUINO_DELAY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DELAY_SECONDS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ultrasonic_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_NEW_TRIG, "UltraSonic,  Trig:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "trig_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_NEW_ECHO, "  Echo:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "echo_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#s2p7t7
Blockly.Blocks['ultrasonic_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET_DISTANCE, "get distance over every ");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ultrasonic_get_promise'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vv8fx4
Blockly.Blocks['ultrasonic_distance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_DISTANCE, "'s distance");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nrzdoq
Blockly.Blocks['button_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_NEW, "Button ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hj3nxn
Blockly.Blocks['button_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WHEN, "當")
      .appendField(new Blockly.FieldVariable("button"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WAS, "進行")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_PRESSED, "pressed"],
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_RELEASED, "released"],
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_LONGPRESS, "longPress"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_TO, "時");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ninxcs
Blockly.Blocks['pir_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIR, "PIR ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vzwp59
Blockly.Blocks['pir_status'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIR_WHEN, "當")
      .appendField(new Blockly.FieldVariable("pir"), "item_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_PIR_STATUS_DETECTED, "detected"],
        [Blockly.Msg.WEBDUINO_PIR_STATUS_ENDED, "ended"]
      ]), "status_")
      .appendField(Blockly.Msg.WEBDUINO_PIR_DETECTED, "偵測到人體紅外線變化");
    this.appendStatementInput("var_")
      .appendField(Blockly.Msg.WEBDUINO_PIR_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sound_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOUND, "Sound ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sound_status'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOUND_WHEN, "當")
      .appendField(new Blockly.FieldVariable("sound"), "item_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SOUND_STATUS_DETECTED, "detected"],
        [Blockly.Msg.WEBDUINO_SOUND_STATUS_ENDED, "ended"]
      ]), "status_")
      .appendField(Blockly.Msg.WEBDUINO_SOUND_DETECTED, "偵測到聲音變化");
    this.appendStatementInput("var_")
      .appendField(Blockly.Msg.WEBDUINO_SOUND_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shock_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_NEW, "Shock ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shock_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_WHEN, "當")
      .appendField(new Blockly.FieldVariable("shock"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_WAS, "狀態為")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SHOCK_EVENT_HIGH, "high"],
        [Blockly.Msg.WEBDUINO_SHOCK_EVENT_LOW, "low"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_TO, "時");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dht_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_NEW, "DHT ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dht_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dht"), "var_");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET, "get temperature and humidity over every ");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dht_get_number'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dht"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_NOW, "測得目前的")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_DHT_GET_T, "temperature"],
        [Blockly.Msg.WEBDUINO_DHT_GET_H, "humidity"]
      ]), "dht_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzer_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER, "Buzzer ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#76fim8
Blockly.Blocks['buzzer_music'] = {
  init: function () {
    this.appendValueInput("music_name_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1, "建立音樂，音樂名稱：");
    this.appendStatementInput("music_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_EDIT, "音符與節奏：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5k77h6
Blockly.Blocks['buzzer_notes_tempos'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_TONE, "音調：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_NO, "0"],
        ["C", "C"],
        ["CS", "CS"],
        ["D", "D"],
        ["DS", "DS"],
        ["E", "E"],
        ["F", "F"],
        ["FS", "FS"],
        ["G", "G"],
        ["GS", "GS"],
        ["A", "A"],
        ["AS", "AS"],
        ["B", "B"]
      ]), "tone_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_PITCH, "   音高：")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_TEMPOS, "   節奏 ( 幾分之1秒 )：")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"]
      ]), "tempos_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vnhdso
Blockly.Blocks['buzzer_play'] = {
  init: function () {
    this.appendValueInput("play_music_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_USE, "使用")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_PLAY, "播放：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#t2cidp
Blockly.Blocks['buzzer_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_LET, "讓")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_EVENT_STOP, ".stop()"],
        [Blockly.Msg.WEBDUINO_BUZZER_EVENT_PAUSE, ".pause()"],
        [Blockly.Msg.WEBDUINO_BUZZER_EVENT_RESUMEPLAY, ".play()"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_EVENT_PLAY, "播放");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#du7e52
Blockly.Blocks['buzzer_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_CHECK, "判斷")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_STATE, "的狀態為：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_STATE_STOP, "stopped"],
        [Blockly.Msg.WEBDUINO_BUZZER_STATE_PAUSE, "paused"],
        [Blockly.Msg.WEBDUINO_BUZZER_STATE_PLAYING, "playing"]
      ]), "state_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tgex67
Blockly.Blocks['buzzer_music_array'] = {
  init: function () {
    this.appendValueInput("music_name_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC2, "快速建立音樂，音樂名稱：");
    this.appendValueInput("notes_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC2_NOTES, "音符：");
    this.appendValueInput("tempos_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC2_TEMPOS, "節奏：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vv3u4z
Blockly.Blocks['buzzer_load_music'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC, "選擇資料庫音樂：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC1, "m1"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC4, "m4"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC2, "m2"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC3, "m3"]
      ]), "music_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['relay_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RELAY, "Relay ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['relay_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "relay_")
      .appendField(Blockly.Msg.WEBDUINO_RELAY_SET_STATE, "set state")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['servo_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO, "Servo ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['servo_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO_TEXT, "伺服馬達")
      .appendField(new Blockly.FieldVariable("servo"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE, "  旋轉角度：")
      .appendField(new Blockly.FieldAngle("90"), "angle_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['servo_angle_set'] = {
  init: function () {
    this.appendValueInput("angle_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_TEXT, "伺服馬達")
      .appendField(new Blockly.FieldVariable("servo"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE, "  旋轉角度：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qyqz9n
Blockly.Blocks['data_firebase'] = {
  init: function () {
    this.appendValueInput("name_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_NAME, "< Firebase > 名稱：");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_URL, "網址：")
      .appendField(new Blockly.FieldTextInput("https://<YOUR-FIREBASE-APP>.firebaseio.com"), "url_");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['data_firebase_write'] = {
  init: function () {
    this.appendStatementInput("write_")
      .appendField(new Blockly.FieldVariable("myFirebase"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_WRITE, "寫入");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['data_firebase_data'] = {
  init: function () {
    this.appendValueInput("data_")
      .appendField(new Blockly.FieldTextInput("..."), "attr_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_IS, "為");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['data_firebase_read'] = {
  init: function () {
    this.appendValueInput("read_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_READ, "取出")
      .appendField(new Blockly.FieldVariable("myFirebase"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_ATTR, "的屬性")
      .appendField(new Blockly.FieldTextInput("..."), "attr_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_TO, "到");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['data_firebase_readonce'] = {
  init: function () {
    this.appendValueInput("read_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_READONCE, "取出")
      .appendField(new Blockly.FieldVariable("myFirebase"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_ATTRONCE, "的屬性")
      .appendField(new Blockly.FieldTextInput("..."), "attr_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_TO, "到");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['data_firebase_clear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_CLEAR, "清空資料庫")
      .appendField(new Blockly.FieldVariable("myFirebase"), "name_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#85nm6w
Blockly.Blocks[Blockly.Msg.WEBDUINO_TESTCAR_NEW, 'car_test_new'] = {
  init: function () {
    this.appendValueInput("var_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR, "自走車");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINRF, "腳位設定：右前")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "rf_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINRB, "右後")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "rb_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINLF, "左前")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "lf_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINLB, "左後")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "lb_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['car_test_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR, "自走車")
      .appendField(new Blockly.FieldVariable("car"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_ACTION, " 動作")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_TESTCAR_GOFRONT, "goFront_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_GOBACK, "goBack_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_GOLEFT, "goLeft_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_GORIGHT, "goRight_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_BACKLEFT, "backLeft_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_BACKRIGHT, "backRight_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_TURNRIGHT, "turnRight_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_TURNLEFT, "turnLeft_"],
        [Blockly.Msg.WEBDUINO_TESTCAR_STOP, "stop_"]
      ]), "move_");
    this.setColour(200);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e4r57n
Blockly.Blocks['temp_data_set'] = {
  init: function () {
    this.appendValueInput("name_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_SET, "設定暫存")
      .appendField(new Blockly.FieldDropdown([
        ["cookie", "1"],
        ["localStorage", "2"],
        ["sessionStorage", "3"]
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_SET_NAME, "   名稱：");
    this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_TEMP_SET_VALUE, "值：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#h7r3gt
Blockly.Blocks['temp_data_get'] = {
  init: function () {
    this.appendValueInput("name_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_GET, "讀取暫存")
      .appendField(new Blockly.FieldDropdown([
        ["cookie", "1"],
        ["localStorage", "2"],
        ["sessionStorage", "3"]
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_GET_NAME, "名稱：");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TEMP_GET_VALUE, "的值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#shuqaz
Blockly.Blocks['sound_recognition'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION, "開始語音辨識 ( 不支援 iOS )");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_LANG, "辨識語言：")
      .appendField(new Blockly.FieldDropdown([
        ["中文", "cmn-Hant-TW"],
        ["English", "en-US"]
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_INTER, "   即時辨識：")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "interimResults_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_MOBILE, "( 行動裝置勾選 off )");
    this.appendStatementInput("recognition_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#svda94
Blockly.Blocks['sound_recognition_check'] = {
  init: function () {
    this.appendValueInput("text_")
      .setCheck(["String", "Array"])
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_IF, "如果辨識的文字包含：");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rbw7g9
Blockly.Blocks['translate_speech'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SPEECH_APPID, "語音 appID:")
      .appendField(new Blockly.FieldTextInput(""), "id_");
    this.appendValueInput("speech_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_SPEECH_SET, "語音：")
      .appendField(new Blockly.FieldDropdown([
        ["中文", "zh-TW"],
        ["廣東話", "zh-HK"],
        ["日文", "ja-JP"],
        ["English", "en-US"]
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_SPEECH_SEX, "   性別：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEECH_MALE, "male"],
        [Blockly.Msg.WEBDUINO_SPEECH_FEMALE, "female"]
      ]), "sex_")
      .appendField(Blockly.Msg.WEBDUINO_SPEECH, "   發音：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['status_repeat'] = {
  init: function () {
    this.appendValueInput("times_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT, "狀態切換，重複");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_NUM, "次");
    this.setColour(100);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['status_repeat_join_item']));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
      'status_repeat_join_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'status_repeat_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    var v = [];
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        v[i] = this.getInput('ADD' + i).fieldRow[1].text_;
        this.removeInput('ADD' + i);
        i++;
      }
    }
    if (this.itemCount_ == 0) {} else {
      for (var i = 0; i < this.itemCount_; i++) {
        if (v[i]) {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput(v[i]), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        } else {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput("1"), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        }
      }
    }
  },
  newQuote_: Blockly.Blocks['text'].newQuote_
};

Blockly.Blocks['status_repeat_join_container'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_ADD, '加入狀態');
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['status_repeat_join_item'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUS, '狀態');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};



Blockly.Blocks['status_repeat_forever'] = {
  init: function () {
    this.appendValueInput("name_")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_FOREVER, "狀態重複切換")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_FOREVER_NAME, "名稱：");
    this.appendDummyInput();
    this.setColour(100);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['status_repeat_join_item']));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
      'status_repeat_join_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'status_repeat_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    var v = [];
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        v[i] = this.getInput('ADD' + i).fieldRow[1].text_;
        this.removeInput('ADD' + i);
        i++;
      }
    }
    if (this.itemCount_ == 0) {} else {
      for (var i = 0; i < this.itemCount_; i++) {
        if (v[i]) {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput(v[i]), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        } else {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput("1"), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        }
      }
    }
  },
  newQuote_: Blockly.Blocks['text'].newQuote_
};

Blockly.Blocks['status_repeat_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STOP, "停止")
      .appendField(new Blockly.FieldVariable("timer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STOPCONTENT, "的重複切換");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['max7219_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX, "Max7219")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_DIN, "din")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "din_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CS, "cs")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "cs_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CLK, "clk")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "clk_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vymr8o
Blockly.Blocks['max7219_draw'] = {
  init: function () {
    this.appendValueInput("code_")
      .setCheck("String")
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CODE, "顯示圖形，圖形代碼：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/max7219/genLED.html');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nxgvz5
Blockly.Blocks['max7219_animate'] = {
  init: function () {
    this.appendValueInput("times_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_TIMES, "顯示動畫，切換時間 (毫秒)：");
    this.appendValueInput("list_")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_LIST, "動畫代碼 (列表)：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduinoio.github.io/samples/content/max7219/genLED.html');
  }
};

Blockly.Blocks['max7219_animate_horse'] = {
  init: function () {
    this.appendValueInput("times_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_HORSE, "跑馬燈")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_MATRIX_LEFT, "left"],
        [Blockly.Msg.WEBDUINO_MATRIX_RIGHT, "right"]
      ]), "state_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_SPEED, "，速度 (格/毫秒)：");
    this.appendValueInput("code_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_HORSEODE, "代碼 (最少十六碼)：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduinoio.github.io/samples/content/max7219/genLED.html');
  }
};

Blockly.Blocks['max7219_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_STOP, "停止")
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_ANIMATE, "動畫");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['max7219_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CLOSE, "關閉")
      .appendField(new Blockly.FieldVariable("matrix"), "name_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['photocell_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL, "光敏電阻，類比腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xqkech
Blockly.Blocks['photocell_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("photocell"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_DETECTED, "開始偵測");
    this.appendStatementInput("detected_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#syxm8m
Blockly.Blocks['photocell_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("photocell"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_VAL, "偵測的數值");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pdtd2m
Blockly.Blocks['photocell_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("photocell"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_STOP, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['irrecv_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_IRRECV, "紅外線接收，腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['irrecv_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("irrecv"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_ON, "開始接收");
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['irrecv_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("irrecv"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_CODE, "接收的代碼");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['irrecv_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("irrecv"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_OFF, "停止接收");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['irled_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_IRLED, "紅外線發射，腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["9", "9"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['irled_launch'] = {
  init: function () {
    this.appendValueInput("code_")
      .setCheck("String")
      .appendField(new Blockly.FieldVariable("irled"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRLED_LAUNCHCODE, "發射代碼 ( 十六進位 )：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['adxl345_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ADXL345, "三軸加速度計，SDA")
      .appendField(new Blockly.FieldDropdown([
        ["A4", "4"]
      ]), "sda_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_SCL, "  SCL")
      .appendField(new Blockly.FieldDropdown([
        ["A5", "5"]
      ]), "scl_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['adxl345_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("adxl"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_ON, "開始偵測");
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['adxl345_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("adxl"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_S, "的")
      .appendField(new Blockly.FieldDropdown([
        ["x", "_x"],
        ["y", "_y"],
        ["z", "_z"],
        ["roll", "_r"],
        ["pitch", "_p"]
      ]), "val_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_VAL, "數值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['adxl345_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("adxl"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_OFF, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['joystick_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("搖桿，X")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "vrx_")
      .appendField("  Y")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "vry_")
      .appendField("  SW")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "sw_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['joystick_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("joystick"), "name_")
      .appendField("開始偵測");
    this.appendStatementInput("on_")
      .appendField("執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['joystick_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("joystick"), "name_")
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([
        ["X", "_x"],
        ["Y", "_y"],
        ["SW", "_z"]
      ]), "val_")
      .appendField("數值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['joystick_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("joystick"), "name_")
      .appendField("停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
