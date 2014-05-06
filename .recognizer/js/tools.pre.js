/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer805388873 = (function () {
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

ToolsPre = {
    init: function (id) {
        __recognizer805388873.logEntry([
            2,
            9,
            2,
            17
        ], arguments);
        var _coreConfig = {
                swfPath: 'js/zeroClipboard/ZeroClipboard.swf',
                trustedDomains: [__recognizer805388873.logProbe([
                        11,
                        45,
                        11,
                        49
                    ], __recognizer805388873.logProbe([
                        11,
                        36,
                        11,
                        44
                    ], __recognizer805388873.logProbe([
                        11,
                        29,
                        11,
                        35
                    ], window).location).host)],
                cacheBust: true,
                forceEnhancedClipboard: false
            };
        (function () {
            var obj = __recognizer805388873.logProbe([
                    19,
                    8,
                    19,
                    12
                ], this), fn = __recognizer805388873.logProbe([
                    19,
                    13,
                    19,
                    17
                ], obj.copy);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer805388873.logProbe([
            19,
            18,
            19,
            20
        ], id), __recognizer805388873.logProbe([
            19,
            22,
            19,
            33
        ], _coreConfig)));
    },
    copy: function (id, _coreConfig) {
        __recognizer805388873.logEntry([
            22,
            10,
            22,
            18
        ], arguments);
        var clientTarget = new (__recognizer805388873.logProbe([
                23,
                31,
                23,
                44
            ], ZeroClipboard))(__recognizer805388873.logProbe([
                23,
                46,
                23,
                51
            ], __recognizer805388873.logProbe([
                23,
                46,
                23,
                47
            ], $)(__recognizer805388873.logProbe([
                23,
                48,
                23,
                50
            ], id))), __recognizer805388873.logProbe([
                23,
                54,
                23,
                65
            ], _coreConfig));
        (function () {
            var obj = __recognizer805388873.logProbe([
                    25,
                    8,
                    25,
                    20
                ], clientTarget), fn = __recognizer805388873.logProbe([
                    25,
                    21,
                    25,
                    23
                ], obj.on);
            return fn.apply(obj, arguments);
        }.bind(this)('ready', function (event) {
            __recognizer805388873.logEntry([
                25,
                34,
                25,
                42
            ], arguments);
            (function () {
                var obj = __recognizer805388873.logProbe([
                        29,
                        12,
                        29,
                        24
                    ], clientTarget), fn = __recognizer805388873.logProbe([
                        29,
                        25,
                        29,
                        27
                    ], obj.on);
                return fn.apply(obj, arguments);
            }.bind(this)('copy', function (event, args) {
                __recognizer805388873.logEntry([
                    29,
                    37,
                    29,
                    45
                ], arguments);
                var idOriginTextToCopy = function () {
                        var obj = __recognizer805388873.logProbe([
                                30,
                                41,
                                30,
                                56
                            ], __recognizer805388873.logProbe([
                                30,
                                41,
                                30,
                                42
                            ], $)(__recognizer805388873.logProbe([
                                30,
                                49,
                                30,
                                55
                            ], __recognizer805388873.logProbe([
                                30,
                                43,
                                30,
                                48
                            ], event).target))), fn = __recognizer805388873.logProbe([
                                30,
                                57,
                                30,
                                61
                            ], obj.data);
                        return fn.apply(obj, arguments);
                    }.bind(this)('clipboard-target');
                (function () {
                    var obj = __recognizer805388873.logProbe([
                            31,
                            22,
                            31,
                            35
                        ], __recognizer805388873.logProbe([
                            31,
                            16,
                            31,
                            21
                        ], event).clipboardData), fn = __recognizer805388873.logProbe([
                            31,
                            36,
                            31,
                            43
                        ], obj.setData);
                    return fn.apply(obj, arguments);
                }.bind(this)('text/plain', function () {
                    var obj = __recognizer805388873.logProbe([
                            31,
                            58,
                            31,
                            79
                        ], __recognizer805388873.logProbe([
                            31,
                            58,
                            31,
                            59
                        ], $)(__recognizer805388873.logProbe([
                            31,
                            60,
                            31,
                            78
                        ], idOriginTextToCopy))), fn = __recognizer805388873.logProbe([
                            31,
                            80,
                            31,
                            84
                        ], obj.html);
                    return fn.apply(obj, arguments);
                }.bind(this)()));
            }));
            (function () {
                var obj = __recognizer805388873.logProbe([
                        34,
                        12,
                        34,
                        24
                    ], clientTarget), fn = __recognizer805388873.logProbe([
                        34,
                        25,
                        34,
                        27
                    ], obj.on);
                return fn.apply(obj, arguments);
            }.bind(this)('aftercopy', function (event) {
                __recognizer805388873.logEntry([
                    34,
                    42,
                    34,
                    50
                ], arguments);
                (function () {
                    var obj = __recognizer805388873.logProbe([
                            37,
                            16,
                            37,
                            29
                        ], __recognizer805388873.logProbe([
                            37,
                            16,
                            37,
                            17
                        ], $)('.message')), fn = __recognizer805388873.logProbe([
                            37,
                            30,
                            37,
                            36
                        ], obj.alerts);
                    return fn.apply(obj, arguments);
                }.bind(this)('success', {
                    delay: {
                        show: 350,
                        hidden: 5000
                    },
                    title: 'Texto copiado.',
                    message: 'El json esta en el porta papeles, puede copiarlo en su editor de JSON preferido.'
                }));
            }));
        }));
        (function () {
            var obj = __recognizer805388873.logProbe([
                    45,
                    8,
                    45,
                    20
                ], clientTarget), fn = __recognizer805388873.logProbe([
                    45,
                    21,
                    45,
                    23
                ], obj.on);
            return fn.apply(obj, arguments);
        }.bind(this)('error', function (event) {
            __recognizer805388873.logEntry([
                45,
                34,
                45,
                42
            ], arguments);
            (function () {
                var obj = __recognizer805388873.logProbe([
                        46,
                        12,
                        46,
                        19
                    ], console), fn = __recognizer805388873.logProbe([
                        46,
                        20,
                        46,
                        23
                    ], obj.log);
                return fn.apply(obj, arguments);
            }.bind(this)('ZeroClipboard error of type "' + __recognizer805388873.logProbe([
                46,
                65,
                46,
                69
            ], __recognizer805388873.logProbe([
                46,
                59,
                46,
                64
            ], event).name) + '": ' + __recognizer805388873.logProbe([
                46,
                86,
                46,
                93
            ], __recognizer805388873.logProbe([
                46,
                80,
                46,
                85
            ], event).message)));
            (function () {
                var obj = __recognizer805388873.logProbe([
                        47,
                        12,
                        47,
                        25
                    ], ZeroClipboard), fn = __recognizer805388873.logProbe([
                        47,
                        26,
                        47,
                        33
                    ], obj.destroy);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }));
    }
};