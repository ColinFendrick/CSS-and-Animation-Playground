import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';

import { MyTooltip } from '.';
import worlddata from '../data/world';

export default () => {
	const projection = geoMercator();
	const pathGenerator = geoPath().projection(projection);


	const countries = worlddata.features.map((d, i) => (
		<React.Fragment key={`country-path${i}`}>
			<path
				d={pathGenerator(d)}
				className='countries'
				onClick={() => window.location.href = `https://en.wikipedia.org/wiki/${d.properties.name}`}
				id={`${d.id}-country`}
				href='#'
			/>
			<MyTooltip target={`${d.id}-country`} country={d.properties.name} />
		</React.Fragment>
	));

	return (
		<div className='background'>
			<svg className='worldmap'>
				{countries}
			</svg>
		</div>
	);
};
