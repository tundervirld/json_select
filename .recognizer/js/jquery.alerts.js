/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer611862069 = (function () {
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
    __recognizer611862069.logEntry([
        9,
        1,
        9,
        9
    ], arguments);
    function alerts(object) {
        __recognizer611862069.logEntry([
            12,
            13,
            12,
            19
        ], arguments);
        this.type = 'success';
        this.position = { 'top': 75 };
        this.delay = {
            show: 500,
            hidden: 1000
        };
        this.prefix = '.';
        this.title = 'Title in you message';
        this.message = 'This is a message, is a option inyect data in message for dynamic valus in real time in your alert';
    }
    alerts.prototype.show = function (objDom, type, conf) {
        __recognizer611862069.logEntry([
            21,
            28,
            21,
            36
        ], arguments);
        var _this = __recognizer611862069.logProbe([
                22,
                20,
                22,
                24
            ], this);
        if (__recognizer611862069.logProbe([
                23,
                11,
                23,
                15
            ], conf)) {
            this.position = __recognizer611862069.logProbe([
                24,
                33,
                24,
                41
            ], __recognizer611862069.logProbe([
                24,
                28,
                24,
                32
            ], conf).position) || __recognizer611862069.logProbe([
                24,
                51,
                24,
                59
            ], __recognizer611862069.logProbe([
                24,
                45,
                24,
                50
            ], _this).position);
            this.delay = __recognizer611862069.logProbe([
                25,
                33,
                25,
                38
            ], __recognizer611862069.logProbe([
                25,
                28,
                25,
                32
            ], conf).delay) || __recognizer611862069.logProbe([
                25,
                51,
                25,
                56
            ], __recognizer611862069.logProbe([
                25,
                45,
                25,
                50
            ], _this).delay);
        }
        this.type = __recognizer611862069.logProbe([
            27,
            24,
            27,
            28
        ], type) || __recognizer611862069.logProbe([
            27,
            47,
            27,
            51
        ], __recognizer611862069.logProbe([
            27,
            41,
            27,
            46
        ], _this).type);
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer611862069.logProbe([
                                    30,
                                    8,
                                    30,
                                    17
                                ], __recognizer611862069.logProbe([
                                    30,
                                    8,
                                    30,
                                    9
                                ], $)(__recognizer611862069.logProbe([
                                    30,
                                    10,
                                    30,
                                    16
                                ], objDom))), fn = __recognizer611862069.logProbe([
                                    30,
                                    18,
                                    30,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer611862069.logProbe([
                            30,
                            29,
                            30,
                            34
                        ], obj.first);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer611862069.logProbe([
                    30,
                    37,
                    30,
                    45
                ], obj.addClass);
            return fn.apply(obj, arguments);
        }.bind(this)('show'));
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = function () {
                                    var obj = __recognizer611862069.logProbe([
                                            31,
                                            8,
                                            31,
                                            17
                                        ], __recognizer611862069.logProbe([
                                            31,
                                            8,
                                            31,
                                            9
                                        ], $)(__recognizer611862069.logProbe([
                                            31,
                                            10,
                                            31,
                                            16
                                        ], objDom))), fn = __recognizer611862069.logProbe([
                                            31,
                                            18,
                                            31,
                                            26
                                        ], obj.children);
                                    return fn.apply(obj, arguments);
                                }.bind(this)(), fn = __recognizer611862069.logProbe([
                                    31,
                                    29,
                                    31,
                                    34
                                ], obj.first);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer611862069.logProbe([
                            31,
                            37,
                            31,
                            41
                        ], obj.next);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer611862069.logProbe([
                    31,
                    44,
                    31,
                    48
                ], obj.html);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer611862069.logProbe([
            31,
            54,
            31,
            59
        ], __recognizer611862069.logProbe([
            31,
            49,
            31,
            53
        ], this).title)));
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer611862069.logProbe([
                                    32,
                                    8,
                                    32,
                                    17
                                ], __recognizer611862069.logProbe([
                                    32,
                                    8,
                                    32,
                                    9
                                ], $)(__recognizer611862069.logProbe([
                                    32,
                                    10,
                                    32,
                                    16
                                ], objDom))), fn = __recognizer611862069.logProbe([
                                    32,
                                    18,
                                    32,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer611862069.logProbe([
                            32,
                            29,
                            32,
                            33
                        ], obj.last);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer611862069.logProbe([
                    32,
                    36,
                    32,
                    40
                ], obj.html);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer611862069.logProbe([
            32,
            46,
            32,
            53
        ], __recognizer611862069.logProbe([
            32,
            41,
            32,
            45
        ], this).message)));
        (function () {
            var obj = __recognizer611862069.logProbe([
                    35,
                    8,
                    35,
                    17
                ], __recognizer611862069.logProbe([
                    35,
                    8,
                    35,
                    9
                ], $)(__recognizer611862069.logProbe([
                    35,
                    10,
                    35,
                    16
                ], objDom))), fn = __recognizer611862069.logProbe([
                    35,
                    18,
                    35,
                    26
                ], obj.addClass);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer611862069.logProbe([
            35,
            32,
            35,
            36
        ], __recognizer611862069.logProbe([
            35,
            27,
            35,
            31
        ], this).type)));
        (function () {
            var obj = __recognizer611862069.logProbe([
                    36,
                    8,
                    36,
                    17
                ], __recognizer611862069.logProbe([
                    36,
                    8,
                    36,
                    9
                ], $)(__recognizer611862069.logProbe([
                    36,
                    10,
                    36,
                    16
                ], objDom))), fn = __recognizer611862069.logProbe([
                    36,
                    18,
                    36,
                    25
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({ top: 0 }, __recognizer611862069.logProbe([
            36,
            47,
            36,
            51
        ], __recognizer611862069.logProbe([
            36,
            41,
            36,
            46
        ], __recognizer611862069.logProbe([
            36,
            36,
            36,
            40
        ], this).delay).show)));
        __recognizer611862069.logProbe([
            39,
            8,
            41,
            30
        ], __recognizer611862069.logProbe([
            39,
            8,
            39,
            18
        ], setTimeout)(function () {
            __recognizer611862069.logEntry([
                39,
                19,
                39,
                27
            ], arguments);
            (function () {
                var obj = __recognizer611862069.logProbe([
                        40,
                        12,
                        40,
                        17
                    ], _this), fn = __recognizer611862069.logProbe([
                        40,
                        18,
                        40,
                        22
                    ], obj.hide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer611862069.logProbe([
                40,
                23,
                40,
                29
            ], objDom)));
        }, __recognizer611862069.logProbe([
            41,
            23,
            41,
            29
        ], __recognizer611862069.logProbe([
            41,
            17,
            41,
            22
        ], __recognizer611862069.logProbe([
            41,
            11,
            41,
            16
        ], _this).delay).hidden)));
    };
    alerts.prototype.hide = function (objDom) {
        __recognizer611862069.logEntry([
            44,
            28,
            44,
            36
        ], arguments);
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer611862069.logProbe([
                                    45,
                                    8,
                                    45,
                                    17
                                ], __recognizer611862069.logProbe([
                                    45,
                                    8,
                                    45,
                                    9
                                ], $)(__recognizer611862069.logProbe([
                                    45,
                                    10,
                                    45,
                                    16
                                ], objDom))), fn = __recognizer611862069.logProbe([
                                    45,
                                    18,
                                    45,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer611862069.logProbe([
                            45,
                            29,
                            45,
                            34
                        ], obj.first);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer611862069.logProbe([
                    45,
                    37,
                    45,
                    45
                ], obj.addClass);
            return fn.apply(obj, arguments);
        }.bind(this)('hide'));
        (function () {
            var obj = __recognizer611862069.logProbe([
                    46,
                    8,
                    46,
                    17
                ], __recognizer611862069.logProbe([
                    46,
                    8,
                    46,
                    9
                ], $)(__recognizer611862069.logProbe([
                    46,
                    10,
                    46,
                    16
                ], objDom))), fn = __recognizer611862069.logProbe([
                    46,
                    18,
                    46,
                    25
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({
            top: -function () {
                var obj = __recognizer611862069.logProbe([
                        46,
                        34,
                        46,
                        43
                    ], __recognizer611862069.logProbe([
                        46,
                        34,
                        46,
                        35
                    ], $)(__recognizer611862069.logProbe([
                        46,
                        36,
                        46,
                        42
                    ], objDom))), fn = __recognizer611862069.logProbe([
                        46,
                        44,
                        46,
                        55
                    ], obj.outerHeight);
                return fn.apply(obj, arguments);
            }.bind(this)() * 3
        }, __recognizer611862069.logProbe([
            46,
            75,
            46,
            79
        ], __recognizer611862069.logProbe([
            46,
            69,
            46,
            74
        ], __recognizer611862069.logProbe([
            46,
            64,
            46,
            68
        ], this).delay).show)));
    };
    $.fn.alerts = function (type, conf) {
        __recognizer611862069.logEntry([
            50,
            14,
            50,
            22
        ], arguments);
        var alert;
        alert = new (__recognizer611862069.logProbe([
            54,
            16,
            54,
            22
        ], alerts))();
        (function () {
            var obj = __recognizer611862069.logProbe([
                    55,
                    4,
                    55,
                    9
                ], alert), fn = __recognizer611862069.logProbe([
                    55,
                    10,
                    55,
                    14
                ], obj.show);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer611862069.logProbe([
            55,
            15,
            55,
            19
        ], this), __recognizer611862069.logProbe([
            55,
            21,
            55,
            25
        ], type), __recognizer611862069.logProbe([
            55,
            27,
            55,
            31
        ], conf)));
    };
}(__recognizer611862069.logProbe([
    58,
    3,
    58,
    9
], jQuery)));