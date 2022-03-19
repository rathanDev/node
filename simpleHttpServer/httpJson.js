var http = require("http");

http

    .createServer(function (request, response) {

        console.log("received request");

        request.on("end", function () {
            response.writeHead(200, {'Content-Type': 'application/json'});
        });

        var jsonBody = `
        {
            "data": {
                "1001_hold_t": 5.0,
                "1001_lahh": -1.0,
                "1001_lc": 0.0,
                "1003_pdah": -1.0,
                "1201_acl_manual_value": 0.0,
                "1201_auto": 3.0,
                "1201_d": 100.0,
                "1201_h": 100.0,
                "1201_i": 2.5,
                "1201_manual": 1.0,
                "1201_manual_value": 0.0,
                "1201_p": 1.0,
                "1201_sp": 50.0,
                "1201_ti": 73.5,
                "1201_ze": 100.0,
                "1201_zi": 100.01,
                "2001_auto": 3.0,
                "2001_d": 0.0,
                "2001_hh": 190.0,
                "2001_i": 3.0,
                "2001_ll": 5.0,
                "2001_manual": 1.0,
                "2001_manual_value": 0.0,
                "2001_p": 5.0,
                "2001_pi": 92.0,
                "2001_sp": 10.0,
                "2001_ze": 100.01,
                "2003_ze": 58.21,
                "2003_zi": 58.11,
                "2004_manual_value": 0.0,
                "2004_update": 6.0,
                "2004_ze": 11.01,
                "2004_zi": 11.11,
                "2005_h": 0.8,
                "2005_hh": 0.95,
                "2005_vahh": -1.0,
                "2005_vi": 0.1451,
                "2301_auto": 3.0,
                "2301_d": 12.0,
                "2301_h": 110.0,
                "2301_hh": 220.0,
                "2301_i": 20.0,
                "2301_manual": 1.0,
                "2301_manual_value": 0.0,
                "2301_p": 5.0,
                "2301_sp": 100.0,
                "2301_ti": 149.0,
                "2302_auto": 3.0,
                "2302_d": 0.0,
                "2302_hh": 320.0,
                "2302_i": 5.0,
                "2302_ll": 5.0,
                "2302_manual": 1.0,
                "2302_manual_value": 0.0,
                "2302_p": 6.5,
                "2302_pi": 211.0,
                "2302_sp": 300.0,
                "2302_ze": 100.01,
                "2401_ll": 10.0,
                "2401_pdi": 79.55,
                "2401_pi": 171.55,
                "2401_updat_t": 15.0,
                "3002_lahh": -1.0,
                "3002_lall": -1.0,
                "3208_pdah": -1.0,
                "3406_pdah": -1.0,
                "3601_ze": 0.01,
                "3601_zi": 0.01,
                "3602_auto": 3.0,
                "3602_d": 100.0,
                "3602_h": 150.0,
                "3602_i": 2.0,
                "3602_lou_manual_value": 0.0,
                "3602_manual": 1.0,
                "3602_p": 1.0,
                "3602_sp": 135.0,
                "3602_temp_manual_value": 0.0,
                "3602_ti": 122.5,
                "3602_ze": 0.0,
                "3602_zi": 0.11,
                "4000_auto": 3.0,
                "4000_d": 0.0,
                "4000_emp": 25.2,
                "4000_esd": -1.0,
                "4000_esl_esh": 2000.0,
                "4000_fault": 0.0,
                "4000_i": 1.5,
                "4000_manual": 1.0,
                "4000_manual_value": 0.0,
                "4000_p": 1.0,
                "4000_sp": 25.0,
                "4000_speed_manual": 1600.0,
                "4000_str_stp": -1.0,
                "4000_ze": 58.2,
                "4005_vahh": -1.0,
                "4101_vahh": -1.0,
                "4203_lall": -1.0,
                "4405_lall": -1.0,
                "4505_lall": -1.0,
                "I_K6": -1.0,
                "I_K7": -1.0,
                "PID_auto_manual": 1.0,
                "ctrl_logic": 3.0,
                "eng_bat_volt": 24.1,
                "eng_cool_temp": 183.1,
                "eng_oil_press": 82.0,
                "eng_oil_temp": 198.0,
                "eng_op_hour": 9100.0,
                "eng_rpm": 1616.1,
                "esd": -1.0,
                "flow_limit": 0.0,
                "ready_sd": -1.0,
                "ready_start": 0.0,
                "ctrl_suc": 0,
                "ctrl_dis": 0,
                "ctrl_load": -1,
                "4000_start": -1,
                "4000_stop": 0,
                "4000_esl": 0,
                "4000_esh": -1,
                "ready_load": -1,
                "system_state": "running",
                "3602_mode": "auto",
                "1201_mode": "auto",
                "2302_mode": "auto",
                "2001_mode": "auto",
                "2301_mode": "auto",
                "4000_mode": "auto",
                "DateTime": "2020-05-07T00:00:00"
            }
        }
        `;

        response.end(jsonBody);

    })

    .listen(8080);


