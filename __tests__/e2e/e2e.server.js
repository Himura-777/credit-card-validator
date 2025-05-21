import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../../webpack.config.js'

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, 'localhost', (err) => {
	if (err) {
		return;
	}
	if (process.send) {
		process.send('ok');
	}
});