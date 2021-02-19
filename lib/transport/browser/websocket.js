'use strict';

var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
	module.exports = function WebSocketBrowserDriver(url, whatever, options) {
		return new Driver(url, options.protocols);
	};
} else {
	module.exports = undefined;
}
