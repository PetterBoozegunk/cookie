/*jslint browser: true */
(function (window) {
    "use strict";

    var trim = function (str) {
            return str.replace(/(^\s+|\s+$)/g, "");
        },
        util,
        cookie;

    util = {
        getTime : function (time) {
            var splitTime = time.toString().split(":"),
                timeObj = {
                    hour: splitTime[0] || 0,
                    minute: splitTime[1] || 0,
                    second: splitTime[2] || 0,
                    millisecond: splitTime[3] || 0
                };

            return timeObj;
        },
        getExpires : function (days, time) {
            var today = new Date(),
                dateToday = today.getDate(),

                timeObj = util.getTime(time),

                expires = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    parseInt(dateToday + days, 10),
                    timeObj.hour,
                    timeObj.minute,
                    timeObj.second,
                    timeObj.millisecond
                );

            return "; expires=" + expires;
        }
    };

    cookie = {
        set : function (name, value, days, time) {
           var expires = util.getExpires(days || 0, time || "");

            document.cookie = name + "=" + value + expires + "; path=/";

            return value;
        },
        get : function (name) {
            var cookies = document.cookie.split(";"),
                i,
                l = cookies.length,
                split,
                cookieName,
                value,
                cookieValue;

            for (i = 0; i < l; i += 1) {
                split = cookies[i].split("=");
                cookieName = trim(split[0]);
                value = trim(split[1]);

                if (cookieName === name) {
                    cookieValue = value;
                    break;
                }
            }

            return cookieValue;
        },
        remove : function (name) {
            var inthepast = new Date(-1);

            document.cookie = name + "=''; expires=" + inthepast + "; path=/";
        }
    };

    window.cookie = cookie;

}(window));