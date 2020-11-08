import React from 'react';
import { Link } from 'react-router-dom';

import {
	animatedbuttonsgif,
	boxesgif,
	buttonsgif,
	globsgif,
	panelsgif
} from '../media';

export default () => {
	return (
		<div className='background home-background flex-column'>
			<div className='home-link mb-3 mt-2'>
				<h3>Click on a panel to view a demo</h3>
			</div>
			<div className='d-flex mb-5 flex-wrap'>
				<Link to='/animated-buttons' className='home-link'>
					<img src={animatedbuttonsgif} alt='Animated Buttons!' />
				</Link>
				<Link to='/globs' className='home-link'>
					<img src={globsgif} alt='Globs!' />
				</Link>
				<Link to='/boxes' className='home-link'>
					<img src={boxesgif} alt='Boxes!' />
				</Link>
				<Link to='/panels' className='home-link'>
					<img src={panelsgif} alt='Panels!' />
				</Link>
				<Link to='/buttons' className='home-link'>
					<img src={buttonsgif} alt='Buttons!' />
				</Link>
				<Link to='/world' className='home-link'>
					world map
				</Link>
			</div>

			<div className='home-link position-bottom'>
				<Link to={'/'} className='unstyled-link'>
					I'm trying to see that dope loading screen again (will return you to this page in five seconds)
				</Link>
			</div>

		</div>
	);
};
