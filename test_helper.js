const mongoose = require('mongoose');

// Use es6 implementation of promises
mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect('mongodb://localhost/users_test');
	mongoose.connection
		.once('open', () => { done(); })
		.on('error', (error) => {
			console.warn('Warning', error);
		});
});


beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		// Ready to fun the next test
		done();
	});
});