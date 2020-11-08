import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';

import worlddata from '../data/world';

export default () => {
	const projection = geoMercator();
	const pathGenerator = geoPath().projection(projection);

	const countries = worlddata.features.map((d, i) => <path
		key={'path' + i}
		d={pathGenerator(d)}
		className='countries'
		onMouseEnter={() => console.log(d)}
		onClick={() => window.location.href = `https://en.wikipedia.org/wiki/${d.properties.name}`}
	/>);

	return (
		<div className='background'>
			<svg className='worldmap'>
				{countries}
			</svg>
		</div>
	);
};
