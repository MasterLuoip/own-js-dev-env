import express from 'express';
import path from 'path';
import open from 'open';
import wepack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = wepack(config);

// router use 'webpack-dev-middleware'
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
// router
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
	res.json([
		{"id": 1, "firstName": "Bob"},
		{"id": 2, "firstName": "Tammy"},
		{"id": 3, "firstName": "Lee"}
	])
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
