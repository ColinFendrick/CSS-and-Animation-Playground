import React, { useState, useRef } from 'react';
import { animated, useTransition, useSpring, useChain, config } from 'react-spring';

import boxes from '../data/boxes';

export default () => {
	const [open, set] = useState(false);

	const springRef = useRef();
	const { size, opacity, ...rest } = useSpring({
		ref: springRef,
		config: config.stiff,
		from: { size: '20%', background: 'hotpink' },
		to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
	});

	const transRef = useRef();
	const transitions = useTransition(open ? boxes : [], item => item.name, {
		ref: transRef,
		unique: true,
		trail: 400 / boxes.length,
		from: { opacity: 0, transform: 'scale(0)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0)' }
	});

	useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

	return (
		<div className='background align-items-center justify-content-center'>
			<animated.div className='cool-boxes' style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
				{transitions.map(({ item, key, props }) => (
					<animated.div
						className='transition-box'
						style={{ ...props, background: item.css, height: item.height, width: item.height }}
						key={key}
					/>
				))}
			</animated.div>
		</div>
	);
};
