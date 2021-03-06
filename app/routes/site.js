'use strict';

var siteCtrl = require(path.join(global.__ctrldir, 'site'));

/**
 * The site routes
 * @param {Object} app An ExpressJS object
 */
module.exports = function (app) {
	app.route('/')
		.get(siteCtrl.index);

	app.route('/dashboard/:page')
		.get(siteCtrl.index);

	app.route('/:page')
		.get(siteCtrl.index);
};
