cookie
======

A simple cookie handler

cookieHandler.js has three (3) methods: get, set and remove.

get and remove only takes one (string) argument: The name of the cookie to get or remove.

set takes four (4) arguments:
<dl>
<dt>name</dt>
<dd>The name of the cookie (string)</dd>
<dt>value</dt>
<dd>The value of the cookie (string)</dd>
<dt>days</dt>
<dd>The number of days before the cookie expires (number)</dd>
<dt>time</dt>
<dd>The exakt time the cookie expires (string). ex: 19:45:30:67 (hour:minute:second:millisecond)</dd>
<dl>

full path to the mehods will be:
window.cookie.get, window.cookie.set and window.cookie.remove.
