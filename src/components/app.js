import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Planet from '../routes/planet';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Planet path="/details/:id" />
				</Router>
			</div>
		);
	}
}
