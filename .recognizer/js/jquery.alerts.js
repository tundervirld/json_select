/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer289897688 = (function () {
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
    __recognizer289897688.logEntry([
        9,
        1,
        9,
        9
    ], arguments);
    function alerts(object) {
        __recognizer289897688.logEntry([
            12,
            13,
            12,
            19
        ], arguments);
        this.type = 'success';
        this.delay = {
            show: 350,
            hidden: 1000
        };
        this.title = 'Title in you alert message';
        this.message = 'This is a message, is a option inyect data in message for dynamic valus in real time in your alert';
    }
    alerts.prototype.show = function (objDom, type, conf) {
        __recognizer289897688.logEntry([
            19,
            28,
            19,
            36
        ], arguments);
        var _this = __recognizer289897688.logProbe([
                20,
                20,
                20,
                24
            ], this);
        if (__recognizer289897688.logProbe([
                21,
                11,
                21,
                15
            ], conf)) {
            this.delay = __recognizer289897688.logProbe([
                22,
                33,
                22,
                38
            ], __recognizer289897688.logProbe([
                22,
                28,
                22,
                32
            ], conf).delay) || __recognizer289897688.logProbe([
                22,
                51,
                22,
                56
            ], __recognizer289897688.logProbe([
                22,
                45,
                22,
                50
            ], _this).delay);
            this.title = __recognizer289897688.logProbe([
                23,
                33,
                23,
                38
            ], __recognizer289897688.logProbe([
                23,
                28,
                23,
                32
            ], conf).title) || __recognizer289897688.logProbe([
                23,
                51,
                23,
                56
            ], __recognizer289897688.logProbe([
                23,
                45,
                23,
                50
            ], _this).title);
            this.message = __recognizer289897688.logProbe([
                24,
                33,
                24,
                40
            ], __recognizer289897688.logProbe([
                24,
                28,
                24,
                32
            ], conf).message) || __recognizer289897688.logProbe([
                24,
                51,
                24,
                58
            ], __recognizer289897688.logProbe([
                24,
                45,
                24,
                50
            ], _this).message);
        }
        this.type = __recognizer289897688.logProbe([
            26,
            28,
            26,
            32
        ], type) || __recognizer289897688.logProbe([
            26,
            51,
            26,
            55
        ], __recognizer289897688.logProbe([
            26,
            45,
            26,
            50
        ], _this).type);
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = function () {
                                    var obj = __recognizer289897688.logProbe([
                                            30,
                                            8,
                                            30,
                                            17
                                        ], __recognizer289897688.logProbe([
                                            30,
                                            8,
                                            30,
                                            9
                                        ], $)(__recognizer289897688.logProbe([
                                            30,
                                            10,
                                            30,
                                            16
                                        ], objDom))), fn = __recognizer289897688.logProbe([
                                            30,
                                            18,
                                            30,
                                            26
                                        ], obj.children);
                                    return fn.apply(obj, arguments);
                                }.bind(this)(), fn = __recognizer289897688.logProbe([
                                    30,
                                    29,
                                    30,
                                    34
                                ], obj.first);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer289897688.logProbe([
                            30,
                            37,
                            30,
                            41
                        ], obj.next);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer289897688.logProbe([
                    30,
                    44,
                    30,
                    48
                ], obj.html);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer289897688.logProbe([
            30,
            54,
            30,
            59
        ], __recognizer289897688.logProbe([
            30,
            49,
            30,
            53
        ], this).title)));
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer289897688.logProbe([
                                    31,
                                    8,
                                    31,
                                    17
                                ], __recognizer289897688.logProbe([
                                    31,
                                    8,
                                    31,
                                    9
                                ], $)(__recognizer289897688.logProbe([
                                    31,
                                    10,
                                    31,
                                    16
                                ], objDom))), fn = __recognizer289897688.logProbe([
                                    31,
                                    18,
                                    31,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer289897688.logProbe([
                            31,
                            29,
                            31,
                            33
                        ], obj.last);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer289897688.logProbe([
                    31,
                    36,
                    31,
                    40
                ], obj.html);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer289897688.logProbe([
            31,
            46,
            31,
            53
        ], __recognizer289897688.logProbe([
            31,
            41,
            31,
            45
        ], this).message)));
        (function () {
            var obj = __recognizer289897688.logProbe([
                    34,
                    8,
                    34,
                    17
                ], __recognizer289897688.logProbe([
                    34,
                    8,
                    34,
                    9
                ], $)(__recognizer289897688.logProbe([
                    34,
                    10,
                    34,
                    16
                ], objDom))), fn = __recognizer289897688.logProbe([
                    34,
                    18,
                    34,
                    26
                ], obj.addClass);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer289897688.logProbe([
            34,
            32,
            34,
            36
        ], __recognizer289897688.logProbe([
            34,
            27,
            34,
            31
        ], this).type)));
        (function () {
            var obj = __recognizer289897688.logProbe([
                    35,
                    8,
                    35,
                    17
                ], __recognizer289897688.logProbe([
                    35,
                    8,
                    35,
                    9
                ], $)(__recognizer289897688.logProbe([
                    35,
                    10,
                    35,
                    16
                ], objDom))), fn = __recognizer289897688.logProbe([
                    35,
                    18,
                    35,
                    25
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({
            top: function () {
                var obj = __recognizer289897688.logProbe([
                        35,
                        32,
                        35,
                        41
                    ], __recognizer289897688.logProbe([
                        35,
                        32,
                        35,
                        33
                    ], $)(__recognizer289897688.logProbe([
                        35,
                        34,
                        35,
                        40
                    ], window))), fn = __recognizer289897688.logProbe([
                        35,
                        42,
                        35,
                        51
                    ], obj.scrollTop);
                return fn.apply(obj, arguments);
            }.bind(this)()
        }, __recognizer289897688.logProbe([
            35,
            67,
            35,
            71
        ], __recognizer289897688.logProbe([
            35,
            61,
            35,
            66
        ], __recognizer289897688.logProbe([
            35,
            56,
            35,
            60
        ], this).delay).show)));
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer289897688.logProbe([
                                    36,
                                    8,
                                    36,
                                    17
                                ], __recognizer289897688.logProbe([
                                    36,
                                    8,
                                    36,
                                    9
                                ], $)(__recognizer289897688.logProbe([
                                    36,
                                    10,
                                    36,
                                    16
                                ], objDom))), fn = __recognizer289897688.logProbe([
                                    36,
                                    18,
                                    36,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer289897688.logProbe([
                            36,
                            29,
                            36,
                            34
                        ], obj.first);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer289897688.logProbe([
                    36,
                    37,
                    36,
                    44
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({ top: 10 }, __recognizer289897688.logProbe([
            36,
            67,
            36,
            71
        ], __recognizer289897688.logProbe([
            36,
            61,
            36,
            66
        ], __recognizer289897688.logProbe([
            36,
            56,
            36,
            60
        ], this).delay).show)));
        (function () {
            var obj = __recognizer289897688.logProbe([
                    39,
                    8,
                    39,
                    13
                ], _this), fn = __recognizer289897688.logProbe([
                    39,
                    14,
                    39,
                    21
                ], obj.trigger);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer289897688.logProbe([
            39,
            22,
            39,
            28
        ], objDom)));
        __recognizer289897688.logProbe([
            42,
            8,
            45,
            30
        ], __recognizer289897688.logProbe([
            42,
            8,
            42,
            18
        ], setTimeout)(function () {
            __recognizer289897688.logEntry([
                42,
                19,
                42,
                27
            ], arguments);
            (function () {
                var obj = __recognizer289897688.logProbe([
                        44,
                        12,
                        44,
                        17
                    ], _this), fn = __recognizer289897688.logProbe([
                        44,
                        18,
                        44,
                        22
                    ], obj.hide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer289897688.logProbe([
                44,
                23,
                44,
                29
            ], objDom)));
        }, __recognizer289897688.logProbe([
            45,
            23,
            45,
            29
        ], __recognizer289897688.logProbe([
            45,
            17,
            45,
            22
        ], __recognizer289897688.logProbe([
            45,
            11,
            45,
            16
        ], _this).delay).hidden)));
    };
    alerts.prototype.hide = function (objDom) {
        __recognizer289897688.logEntry([
            48,
            28,
            48,
            36
        ], arguments);
        (function () {
            var obj = __recognizer289897688.logProbe([
                    49,
                    8,
                    49,
                    17
                ], __recognizer289897688.logProbe([
                    49,
                    8,
                    49,
                    9
                ], $)(__recognizer289897688.logProbe([
                    49,
                    10,
                    49,
                    16
                ], objDom))), fn = __recognizer289897688.logProbe([
                    49,
                    18,
                    49,
                    25
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({
            top: -function () {
                var obj = __recognizer289897688.logProbe([
                        49,
                        34,
                        49,
                        43
                    ], __recognizer289897688.logProbe([
                        49,
                        34,
                        49,
                        35
                    ], $)(__recognizer289897688.logProbe([
                        49,
                        36,
                        49,
                        42
                    ], objDom))), fn = __recognizer289897688.logProbe([
                        49,
                        44,
                        49,
                        55
                    ], obj.outerHeight);
                return fn.apply(obj, arguments);
            }.bind(this)() * 3
        }, __recognizer289897688.logProbe([
            49,
            75,
            49,
            79
        ], __recognizer289897688.logProbe([
            49,
            69,
            49,
            74
        ], __recognizer289897688.logProbe([
            49,
            64,
            49,
            68
        ], this).delay).show)));
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer289897688.logProbe([
                                    50,
                                    8,
                                    50,
                                    17
                                ], __recognizer289897688.logProbe([
                                    50,
                                    8,
                                    50,
                                    9
                                ], $)(__recognizer289897688.logProbe([
                                    50,
                                    10,
                                    50,
                                    16
                                ], objDom))), fn = __recognizer289897688.logProbe([
                                    50,
                                    18,
                                    50,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer289897688.logProbe([
                            50,
                            29,
                            50,
                            34
                        ], obj.first);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer289897688.logProbe([
                    50,
                    37,
                    50,
                    44
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({ top: -100 }, __recognizer289897688.logProbe([
            50,
            69,
            50,
            73
        ], __recognizer289897688.logProbe([
            50,
            63,
            50,
            68
        ], __recognizer289897688.logProbe([
            50,
            58,
            50,
            62
        ], this).delay).show)));
    };
    alerts.prototype.close = function (objDom) {
        __recognizer289897688.logEntry([
            54,
            29,
            54,
            37
        ], arguments);
        (function () {
            var obj = __recognizer289897688.logProbe([
                    55,
                    8,
                    55,
                    17
                ], __recognizer289897688.logProbe([
                    55,
                    8,
                    55,
                    9
                ], $)(__recognizer289897688.logProbe([
                    55,
                    10,
                    55,
                    16
                ], objDom))), fn = __recognizer289897688.logProbe([
                    55,
                    18,
                    55,
                    25
                ], obj.animate);
            return fn.apply(obj, arguments);
        }.bind(this)({
            top: -function () {
                var obj = __recognizer289897688.logProbe([
                        55,
                        34,
                        55,
                        43
                    ], __recognizer289897688.logProbe([
                        55,
                        34,
                        55,
                        35
                    ], $)(__recognizer289897688.logProbe([
                        55,
                        36,
                        55,
                        42
                    ], objDom))), fn = __recognizer289897688.logProbe([
                        55,
                        44,
                        55,
                        55
                    ], obj.outerHeight);
                return fn.apply(obj, arguments);
            }.bind(this)() * 3
        }, __recognizer289897688.logProbe([
            55,
            75,
            55,
            79
        ], __recognizer289897688.logProbe([
            55,
            69,
            55,
            74
        ], __recognizer289897688.logProbe([
            55,
            64,
            55,
            68
        ], this).delay).show)));
    };
    alerts.prototype.trigger = function (objDom) {
        __recognizer289897688.logEntry([
            59,
            31,
            59,
            39
        ], arguments);
        var _this = __recognizer289897688.logProbe([
                60,
                20,
                60,
                24
            ], this);
        (function () {
            var obj = function () {
                    var obj = function () {
                            var obj = __recognizer289897688.logProbe([
                                    61,
                                    8,
                                    61,
                                    17
                                ], __recognizer289897688.logProbe([
                                    61,
                                    8,
                                    61,
                                    9
                                ], $)(__recognizer289897688.logProbe([
                                    61,
                                    10,
                                    61,
                                    16
                                ], objDom))), fn = __recognizer289897688.logProbe([
                                    61,
                                    18,
                                    61,
                                    26
                                ], obj.children);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer289897688.logProbe([
                            61,
                            29,
                            61,
                            34
                        ], obj.first);
                    return fn.apply(obj, arguments);
                }.bind(this)(), fn = __recognizer289897688.logProbe([
                    61,
                    37,
                    61,
                    39
                ], obj.on);
            return fn.apply(obj, arguments);
        }.bind(this)({
            'click': function () {
                __recognizer289897688.logEntry([
                    62,
                    20,
                    62,
                    28
                ], arguments);
                (function () {
                    var obj = __recognizer289897688.logProbe([
                            63,
                            16,
                            63,
                            21
                        ], _this), fn = __recognizer289897688.logProbe([
                            63,
                            22,
                            63,
                            27
                        ], obj.close);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer289897688.logProbe([
                    63,
                    28,
                    63,
                    34
                ], objDom)));
            }
        }));
    };
    $.fn.alerts = function (type, conf) {
        __recognizer289897688.logEntry([
            72,
            14,
            72,
            22
        ], arguments);
        var alert;
        alert = new (__recognizer289897688.logProbe([
            76,
            16,
            76,
            22
        ], alerts))();
        (function () {
            var obj = __recognizer289897688.logProbe([
                    77,
                    4,
                    77,
                    9
                ], alert), fn = __recognizer289897688.logProbe([
                    77,
                    10,
                    77,
                    14
                ], obj.show);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer289897688.logProbe([
            77,
            15,
            77,
            19
        ], this), __recognizer289897688.logProbe([
            77,
            21,
            77,
            25
        ], type), __recognizer289897688.logProbe([
            77,
            27,
            77,
            31
        ], conf)));
    };
}(__recognizer289897688.logProbe([
    80,
    3,
    80,
    9
], jQuery)));