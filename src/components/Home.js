import React from 'react';
import { Link } from 'react-router-dom';

import {
	boxesgif,
	buttonsgif,
	globsgif,
	panelsgif
} from '../media';

export default () => {
	return (
		<div className='background home-background flex-column'>

			<div className='d-flex mb-5'>
				<Link to={'/globs'} className='home-link'>
					<img src={globsgif} alt='Globs!' />
				</Link>
				<Link to={'/boxes'} className='home-link'>
					<img src={boxesgif} alt='Boxes!' />
				</Link>
				<Link to={'/panels'} className='home-link'>
					<img src={panelsgif} alt='Panels!' />
				</Link>
				<Link to={'/buttons'} className='home-link'>
					<img src={buttonsgif} alt='Buttons!' />
				</Link>
			</div>

			<div className='home-link'>
				<Link to={'/'} className='unstyled-link'>
					I'm trying to see that dope loading screen again (will return you to this page in five seconds)
				</Link>
			</div>

		</div>
	);
};
