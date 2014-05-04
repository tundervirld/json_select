/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer630757338 = (function () {
    'use strict';

    var global = this;

    function Tracer() {
        this._calls = [];
        this._args = [];
        this.global = global;

        this._probeValues = {};
    }
    Tracer.prototype = {
        logEntry: function (location, args) {
            this._calls.push({
                index: this._calls.length,
                position: location,
                // args: Array.prototype.slice.call(args),
                argsCount: args.length,
                time: Date.now()
            });
            this._args.push(Array.prototype.slice.call(args));
        },

        getCalls: function (since) {
            var calls = this._calls.filter(function(call) {
                return (since) ? call.time > since : true;
            });
            return stringify(calls);
        },

        getCallCount: function () {
            return this._calls.length;
        },

        logProbe: function (location, result) {
            this._probeValues[location.toString()] = result;
            return result;
        },

        updateProbeValues: function () {
            var self = this;

            var probeIds = Object.keys(this._probeValues);
            var output = probeIds.map(function(probeId) {
               return {
                   id: probeId,
                   type: self.getType(self._probeValues[probeId])
               };
            });

            return stringify(output);
        },

        getType: function (value) {
            var type = typeof value;

            if (type === 'number' && isNaN(value)) {
                type = 'NaN';
            }
            if (type === null) {
                type = 'null';
            }

            return type;
        },

        test: function () {
            console.log('[recognizer tracer] test function run successfully');
        },

        connect: function () {
            return this;
        }
    };

    /**
     * JSON stringify with circular references
     * Copyright (c) Isaac Z. Schlueter ("Author")
     * The BSD License
     */
    function getSerialize(a,b){var c=[],d=[];return b=b||function(a,b){return"[Circular "+getPath(b,c,d)+"]"},function(e,f){var g=f;return"object"==typeof f&&f&&(-1!==c.indexOf(f)?g=b(e,f):(c.push(f),d.push(e))),a&&(g=a(e,g)),g}}
    function getPath(a,b,c){var d=b.indexOf(a),e=[c[d]];for(d--;d>=0;d--)b[d][e[0]]===a&&(a=b[d],e.unshift(c[d]));return"~"+e.join(".")}
    function stringify(a,b,c,d){return JSON.stringify(a,getSerialize(b,d),c)}stringify.getSerialize=getSerialize;

    return new Tracer();

}());


/**
 * Instrumented code
 */

(function ($) {
    __recognizer630757338.logEntry([
        9,
        1,
        9,
        9
    ], arguments);
    function alerts(object) {
        __recognizer630757338.logEntry([
            12,
            13,
            12,
            19
        ], arguments);
        this.type = [
            'info',
            'warning',
            'error',
            'success'
        ], this.position = { 'top': 75 };
        this.delay = 200;
        this.class = 'message';
        this.prefix = '.';
        this.title = 'Title in you message';
        this.message = 'This is a message, is a option inyect data in message for dynamic valus in real time in your alert';
    }
    alerts.prototype.show = function (conf) {
        __recognizer630757338.logEntry([
            22,
            28,
            22,
            36
        ], arguments);
        var _this = __recognizer630757338.logProbe([
                23,
                20,
                23,
                24
            ], this);
        if (__recognizer630757338.logProbe([
                24,
                11,
                24,
                15
            ], conf)) {
            this.type = __recognizer630757338.logProbe([
                25,
                33,
                25,
                37
            ], __recognizer630757338.logProbe([
                25,
                28,
                25,
                32
            ], conf).type) || __recognizer630757338.logProbe([
                25,
                51,
                25,
                55
            ], __recognizer630757338.logProbe([
                25,
                45,
                25,
                50
            ], _this).type);
            this.position = __recognizer630757338.logProbe([
                26,
                33,
                26,
                41
            ], __recognizer630757338.logProbe([
                26,
                28,
                26,
                32
            ], conf).position) || __recognizer630757338.logProbe([
                26,
                51,
                26,
                59
            ], __recognizer630757338.logProbe([
                26,
                45,
                26,
                50
            ], _this).position);
            this.delay = __recognizer630757338.logProbe([
                27,
                33,
                27,
                38
            ], __recognizer630757338.logProbe([
                27,
                28,
                27,
                32
            ], conf).delay) || __recognizer630757338.logProbe([
                27,
                51,
                27,
                56
            ], __recognizer630757338.logProbe([
                27,
                45,
                27,
                50
            ], _this).delay);
        }
        (function () {
            var obj = __recognizer630757338.logProbe([
                    31,
                    8,
                    31,
                    35
                ], __recognizer630757338.logProbe([
                    31,
                    8,
                    31,
                    9
                ], $)(__recognizer630757338.logProbe([
                    31,
                    15,
                    31,
                    21
                ], __recognizer630757338.logProbe([
                    31,
                    10,
                    31,
                    14
                ], this).prefix) + __recognizer630757338.logProbe([
                    31,
                    29,
                    31,
                    34
                ], __recognizer630757338.logProbe([
                    31,
                    24,
                    31,
                    28
                ], this).class))), fn = __recognizer630757338.logProbe([
                    31,
                    36,
                    31,
                    44
                ], obj.addClass);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer630757338.logProbe([
            31,
            50,
            31,
            54
        ], __recognizer630757338.logProbe([
            31,
            45,
            31,
            49
        ], this).type)));
        this.action_ = __recognizer630757338.logProbe([
            33,
            28,
            33,
            34
        ], __recognizer630757338.logProbe([
            33,
            23,
            33,
            27
        ], this).prefix) + __recognizer630757338.logProbe([
            33,
            42,
            33,
            47
        ], __recognizer630757338.logProbe([
            33,
            37,
            33,
            41
        ], this).class) + __recognizer630757338.logProbe([
            33,
            55,
            33,
            61
        ], __recognizer630757338.logProbe([
            33,
            50,
            33,
            54
        ], this).prefix) + __recognizer630757338.logProbe([
            33,
            69,
            33,
            73
        ], __recognizer630757338.logProbe([
            33,
            64,
            33,
            68
        ], this).type);
        (function () {
            var obj = __recognizer630757338.logProbe([
                    35,
                    8,
                    35,
                    23
                ], __recognizer630757338.logProbe([
                    35,
                    8,
                    35,
                    9
                ], $)(__recognizer630757338.logProbe([
                    35,
                    15,
                    35,
                    22
                ], __recognizer630757338.logProbe([
                    35,
                    10,
                    35,
                    14
                ], this).action_))), fn = __recognizer630757338.logProbe([
                    35,
                    24,
                    35,
                    31
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({
            top: function () {
                var obj = __recognizer630757338.logProbe([
                        35,
                        38,
                        35,
                        53
                    ], __recognizer630757338.logProbe([
                        35,
                        38,
                        35,
                        39
                    ], $)(__recognizer630757338.logProbe([
                        35,
                        45,
                        35,
                        52
                    ], __recognizer630757338.logProbe([
                        35,
                        40,
                        35,
                        44
                    ], this).action_))), fn = __recognizer630757338.logProbe([
                        35,
                        54,
                        35,
                        65
                    ], obj.outerHeight);
                return fn.apply(obj, arguments);
            }.bind(this)()
        }, 500));
        __recognizer630757338.logProbe([
            38,
            8,
            40,
            23
        ], __recognizer630757338.logProbe([
            38,
            8,
            38,
            18
        ], setTimeout)(function () {
            __recognizer630757338.logEntry([
                38,
                19,
                38,
                27
            ], arguments);
            (function () {
                var obj = __recognizer630757338.logProbe([
                        39,
                        12,
                        39,
                        17
                    ], _this), fn = __recognizer630757338.logProbe([
                        39,
                        18,
                        39,
                        22
                    ], obj.hide);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }, __recognizer630757338.logProbe([
            40,
            17,
            40,
            22
        ], __recognizer630757338.logProbe([
            40,
            11,
            40,
            16
        ], _this).delay)));
    };
    alerts.prototype.hide = function () {
        __recognizer630757338.logEntry([
            43,
            28,
            43,
            36
        ], arguments);
        (function () {
            var obj = __recognizer630757338.logProbe([
                    44,
                    8,
                    44,
                    23
                ], __recognizer630757338.logProbe([
                    44,
                    8,
                    44,
                    9
                ], $)(__recognizer630757338.logProbe([
                    44,
                    15,
                    44,
                    22
                ], __recognizer630757338.logProbe([
                    44,
                    10,
                    44,
                    14
                ], this).action_))), fn = __recognizer630757338.logProbe([
                    44,
                    24,
                    44,
                    31
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({
            top: -function () {
                var obj = __recognizer630757338.logProbe([
                        44,
                        40,
                        44,
                        55
                    ], __recognizer630757338.logProbe([
                        44,
                        40,
                        44,
                        41
                    ], $)(__recognizer630757338.logProbe([
                        44,
                        47,
                        44,
                        54
                    ], __recognizer630757338.logProbe([
                        44,
                        42,
                        44,
                        46
                    ], this).action_))), fn = __recognizer630757338.logProbe([
                        44,
                        56,
                        44,
                        67
                    ], obj.outerHeight);
                return fn.apply(obj, arguments);
            }.bind(this)()
        }, 500));
    };
    $.fn.alerts = function (conf) {
        __recognizer630757338.logEntry([
            48,
            14,
            48,
            22
        ], arguments);
        var a;
        a = new (__recognizer630757338.logProbe([
            51,
            12,
            51,
            18
        ], alerts))();
        (function () {
            var obj = __recognizer630757338.logProbe([
                    52,
                    4,
                    52,
                    5
                ], a), fn = __recognizer630757338.logProbe([
                    52,
                    6,
                    52,
                    16
                ], obj.showAlerts);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer630757338.logProbe([
            52,
            17,
            52,
            21
        ], conf)));
    };
}(__recognizer630757338.logProbe([
    55,
    3,
    55,
    9
], jQuery)));