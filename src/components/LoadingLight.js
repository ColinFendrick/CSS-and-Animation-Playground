import React, { useEffect } from 'react';

export default ({ history, timeout = 3200 }) => {
	useEffect(() => {
		setTimeout(() => {
			history.push('/home');
		}, timeout);}, []);

	return (
		<div className='light-container'>
			<div className='light-wrap'>
				<div className='untranslate'>LOADING...</div>
				<div className='light-panel'></div>
				<div className='light'></div>
				<div className='light'></div>
				<div className='light'></div>
				<div className='light'></div>
			</div>
		</div>
	);
};
