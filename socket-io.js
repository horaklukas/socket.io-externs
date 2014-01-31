/**
 * @type {Object}
 * @const
 */
var io = {};

/**
 * @param {string} uri
 * @param {?Object.<string, string>} options
 * @return {Socket}
 */
io.connect = function(uri, options) {};

/** @constructor*/
var Socket = function() {};

/** 
 * @param {string} event
 * @param {function()} handler
 */
Socket.prototype.on = function(event, handler) {};

/**
 * @param {string} name Name of event to emit
 * @param {...} args Variable number of arguments for pass to event
 */
Socket.prototype.emit = function(name, args) {};