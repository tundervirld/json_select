/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer608600503 = (function () {
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
        __recognizer608600503.logEntry([
            2,
            9,
            2,
            17
        ], arguments);
        var _coreConfig = {
                swfPath: 'js/zeroClipboard/ZeroClipboard.swf',
                trustedDomains: [__recognizer608600503.logProbe([
                        11,
                        45,
                        11,
                        49
                    ], __recognizer608600503.logProbe([
                        11,
                        36,
                        11,
                        44
                    ], __recognizer608600503.logProbe([
                        11,
                        29,
                        11,
                        35
                    ], window).location).host)],
                cacheBust: true,
                forceEnhancedClipboard: false
            };
        (function () {
            var obj = __recognizer608600503.logProbe([
                    20,
                    8,
                    20,
                    15
                ], console), fn = __recognizer608600503.logProbe([
                    20,
                    16,
                    20,
                    19
                ], obj.log);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer608600503.logProbe([
            20,
            20,
            20,
            31
        ], _coreConfig)));
        (function () {
            var obj = __recognizer608600503.logProbe([
                    21,
                    8,
                    21,
                    12
                ], this), fn = __recognizer608600503.logProbe([
                    21,
                    13,
                    21,
                    17
                ], obj.copy);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer608600503.logProbe([
            21,
            18,
            21,
            20
        ], id), __recognizer608600503.logProbe([
            21,
            22,
            21,
            33
        ], _coreConfig)));
    },
    copy: function (id, _coreConfig) {
        __recognizer608600503.logEntry([
            24,
            10,
            24,
            18
        ], arguments);
        var clientTarget = new (__recognizer608600503.logProbe([
                25,
                31,
                25,
                44
            ], ZeroClipboard))(__recognizer608600503.logProbe([
                25,
                46,
                25,
                51
            ], __recognizer608600503.logProbe([
                25,
                46,
                25,
                47
            ], $)(__recognizer608600503.logProbe([
                25,
                48,
                25,
                50
            ], id))), __recognizer608600503.logProbe([
                25,
                54,
                25,
                65
            ], _coreConfig));
        (function () {
            var obj = __recognizer608600503.logProbe([
                    33,
                    8,
                    33,
                    15
                ], console), fn = __recognizer608600503.logProbe([
                    33,
                    16,
                    33,
                    19
                ], obj.log);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer608600503.logProbe([
            33,
            20,
            33,
            32
        ], clientTarget)));
        (function () {
            var obj = __recognizer608600503.logProbe([
                    37,
                    8,
                    37,
                    20
                ], clientTarget), fn = __recognizer608600503.logProbe([
                    37,
                    21,
                    37,
                    23
                ], obj.on);
            return fn.apply(obj, arguments);
        }.bind(this)('ready', function (event) {
            __recognizer608600503.logEntry([
                37,
                34,
                37,
                42
            ], arguments);
            (function () {
                var obj = __recognizer608600503.logProbe([
                        40,
                        12,
                        40,
                        24
                    ], clientTarget), fn = __recognizer608600503.logProbe([
                        40,
                        25,
                        40,
                        27
                    ], obj.on);
                return fn.apply(obj, arguments);
            }.bind(this)('copy', function (event, args) {
                __recognizer608600503.logEntry([
                    40,
                    37,
                    40,
                    45
                ], arguments);
                var idTextToCopy = function () {
                        var obj = __recognizer608600503.logProbe([
                                42,
                                35,
                                42,
                                50
                            ], __recognizer608600503.logProbe([
                                42,
                                35,
                                42,
                                36
                            ], $)(__recognizer608600503.logProbe([
                                42,
                                43,
                                42,
                                49
                            ], __recognizer608600503.logProbe([
                                42,
                                37,
                                42,
                                42
                            ], event).target))), fn = __recognizer608600503.logProbe([
                                42,
                                51,
                                42,
                                55
                            ], obj.data);
                        return fn.apply(obj, arguments);
                    }.bind(this)('clipboard-target');
                (function () {
                    var obj = __recognizer608600503.logProbe([
                            43,
                            22,
                            43,
                            35
                        ], __recognizer608600503.logProbe([
                            43,
                            16,
                            43,
                            21
                        ], event).clipboardData), fn = __recognizer608600503.logProbe([
                            43,
                            36,
                            43,
                            43
                        ], obj.setData);
                    return fn.apply(obj, arguments);
                }.bind(this)('text/plain', function () {
                    var obj = __recognizer608600503.logProbe([
                            43,
                            58,
                            43,
                            73
                        ], __recognizer608600503.logProbe([
                            43,
                            58,
                            43,
                            59
                        ], $)(__recognizer608600503.logProbe([
                            43,
                            60,
                            43,
                            72
                        ], idTextToCopy))), fn = __recognizer608600503.logProbe([
                            43,
                            74,
                            43,
                            78
                        ], obj.html);
                    return fn.apply(obj, arguments);
                }.bind(this)()));
            }));
            (function () {
                var obj = __recognizer608600503.logProbe([
                        46,
                        12,
                        46,
                        24
                    ], clientTarget), fn = __recognizer608600503.logProbe([
                        46,
                        25,
                        46,
                        27
                    ], obj.on);
                return fn.apply(obj, arguments);
            }.bind(this)('aftercopy', function (event) {
                __recognizer608600503.logEntry([
                    46,
                    42,
                    46,
                    50
                ], arguments);
                (function () {
                    var obj = __recognizer608600503.logProbe([
                            48,
                            16,
                            48,
                            23
                        ], console), fn = __recognizer608600503.logProbe([
                            48,
                            24,
                            48,
                            27
                        ], obj.log);
                    return fn.apply(obj, arguments);
                }.bind(this)('Copied text to clipboard: ' + __recognizer608600503.logProbe([
                    48,
                    70,
                    48,
                    82
                ], __recognizer608600503.logProbe([
                    48,
                    65,
                    48,
                    69
                ], __recognizer608600503.logProbe([
                    48,
                    59,
                    48,
                    64
                ], event).data)['text/plain'])));
            }));
        }));
        (function () {
            var obj = __recognizer608600503.logProbe([
                    52,
                    8,
                    52,
                    20
                ], clientTarget), fn = __recognizer608600503.logProbe([
                    52,
                    21,
                    52,
                    23
                ], obj.on);
            return fn.apply(obj, arguments);
        }.bind(this)('error', function (event) {
            __recognizer608600503.logEntry([
                52,
                34,
                52,
                42
            ], arguments);
            (function () {
                var obj = __recognizer608600503.logProbe([
                        53,
                        12,
                        53,
                        19
                    ], console), fn = __recognizer608600503.logProbe([
                        53,
                        20,
                        53,
                        23
                    ], obj.log);
                return fn.apply(obj, arguments);
            }.bind(this)('ZeroClipboard error of type "' + __recognizer608600503.logProbe([
                53,
                65,
                53,
                69
            ], __recognizer608600503.logProbe([
                53,
                59,
                53,
                64
            ], event).name) + '": ' + __recognizer608600503.logProbe([
                53,
                86,
                53,
                93
            ], __recognizer608600503.logProbe([
                53,
                80,
                53,
                85
            ], event).message)));
            (function () {
                var obj = __recognizer608600503.logProbe([
                        54,
                        12,
                        54,
                        25
                    ], ZeroClipboard), fn = __recognizer608600503.logProbe([
                        54,
                        26,
                        54,
                        33
                    ], obj.destroy);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }));
    }
};