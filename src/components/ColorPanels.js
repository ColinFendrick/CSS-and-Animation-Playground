import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';
import ColorScheme from 'color-scheme';

import { MainText } from '.';
import { genRanInt, lightOrDark } from '../helpers';

const config = { mass: 5, tension: 2000, friction: 200 };

export default () => {
	const [counter, setCounter] = useState(0);

	const [ranInt, ranScheme, ranVariant] = (() => {
		const schemes = ['mono', 'contrast', 'triade', 'tetrade', 'analogic'];
		const variants = ['default', 'pastel', 'soft', 'light', 'hard', 'pale'];

		return [
			genRanInt(256),
			schemes[genRanInt(schemes.length)],
			variants[genRanInt(variants.length)]
		];
	})();

	const trail = useTrail(9, {
		config,
		opacity: 1,
		flex: counter % 2 === 0 ? 1 : 0.3,
		from: { opacity: 0, flex: 0 }
	});

	const scheme = new ColorScheme();
	const colors = scheme.from_hue(ranInt).scheme(ranScheme).variation(ranVariant).colors();

	return (
		<div className='background' onClick={() => {
			setCounter(() => setCounter(counter + 1));
		}}>
			{trail.map((props, index) =>
				(index < 8) ?
					<animated.div className='panel' key={index}  style={{ ...props, backgroundColor: `#${colors[index]}` }} /> :
					<MainText key={index} style={{ ...props, color: `${lightOrDark(colors[0]) === 'light' ? 'black' : 'white' }` }} />
			)}
		</div>
	);
};
