# Websockets in ServiceNow apps

The repository contains example files for Knowledge18 session **CCDT0515** WEBSOCKETS - Modern communications channels in ServieNow:
1. **webserver.js** - NodeJS web server, which handles websocket connections. You need to install the following npm modules:
  - express
  - socket.io
  - body-parser
2. **widget.html** - HTML code for a service portal widget.
3. **widget.js** - Widget client controller code.

>Make sure you add socket.io as a dependency in your service portal widget, CDN: https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js
