import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

export default ({ target, country }) => {
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<Tooltip
			innerClassName='p-3'
			placement='right'
			isOpen={tooltipOpen}
			target={target}
			toggle={toggle}
		>
			{country}:
			<br />
		</Tooltip>
	);
};
