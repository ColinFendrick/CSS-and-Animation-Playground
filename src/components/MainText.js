import React from 'react';
import { animated } from 'react-spring';

export default ({ style, text }) => (
	<animated.div className='main-wrapper' style={style}>
		<div className='main-text'>{text}</div>
	</animated.div>
);
