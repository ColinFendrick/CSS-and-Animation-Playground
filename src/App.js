import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	AnimatedButtons,
	CoolButtons,
	ColorPanels,
	CoolBoxes,
	LoadingLight,
	Home,
	Globs
} from './components';

const App = () => (
	<div className='App'>
		<Switch>
			<Route path='/animated-buttons' component={AnimatedButtons} />
			<Route path='/buttons' component={CoolButtons} />
			<Route path='/panels' component={ColorPanels} />
			<Route path='/globs' component={Globs} />
			<Route path='/boxes' component={CoolBoxes} />
			<Route path='/home' component={Home} />
			<Route path='/' component={LoadingLight} />
		</Switch>
	</div>
);

export default App;
