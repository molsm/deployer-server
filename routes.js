const Send = require('./controllers/Send');

module.exports = function (app) {
	app.get('/send', Send.action);
}