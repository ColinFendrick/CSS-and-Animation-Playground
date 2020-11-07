import React, { useEffect } from 'react';

import '../Light.css';

export default ({ history, timeout = 5000 }) => {
	useEffect(() => {
		setTimeout(() => {
			history.push('/home');
		}, timeout);}, []);

	return (
		<div className='light-container'>
			<div className='light-wrap'>
				<div className='panel'></div>
				<div className='light'></div>
				<div className='light'></div>
				<div className='light'></div>
				<div className='light'></div>
			</div>
		</div>
	);
};
