import React, { useState, useEffect } from 'react';
import { Tooltip, Spinner } from 'reactstrap';
import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:3030',
	headers: {
		'Content-type': 'application/json'
	}
});

export default ({ target, country }) => {
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [preview, setPreview] = useState(null);
	const toggle = () => setTooltipOpen(!tooltipOpen);

	useEffect(() => {
		const source = axios.CancelToken.source();
		(async () => {

			if (!preview && tooltipOpen) {
				setLoading(true);

				try {
					const previewData = await http.get(`http://localhost:3030/${country}`, {
						cancelToken: source.token
					});
					setPreview(previewData.data);
					setLoading(false);
				} catch (e) {
					setLoading(false);
				}
			}
		})();

		return () => {
			source.cancel('Aborting request: user scrolled out');
		};
	}, [preview, tooltipOpen]);

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
			<br />

			{loading ? <Spinner color='primary' /> :
				<img src={preview} alt='Wikipedia preview' className='website-preview' />
			}
		</Tooltip>
	);
};
