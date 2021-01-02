import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	AnimatedButtons,
	CoolButtons,
	ColorPanels,
	CoolBoxes,
	DraggableList,
	LoadingLight,
	Home,
	Globs,
	WorldMap
} from './components';

const App = () => (
	<div className='App'>
		<Switch>
			<Route path='/animated-buttons' component={AnimatedButtons} />
			<Route path='/buttons' component={CoolButtons} />
			<Route path='/panels' component={ColorPanels} />
			<Route path='/draggablelist' render={() => <DraggableList items={'Lorem ipsum dolor sit'.split(' ')}/>} />
			<Route path='/globs' component={Globs} />
			<Route path='/boxes' component={CoolBoxes} />
			<Route path='/home' component={Home} />
			<Route path='/world' component={WorldMap} />
			<Route path='/' component={LoadingLight} />
		</Switch>
	</div>
);

export default App;
