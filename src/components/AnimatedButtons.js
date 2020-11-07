import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default () => {
	const [text, updateContent] = useState({
		bottom: 'Started from the bottom...',
		left: 'Started from the left...',
		right: 'Started from the right...',
		top: 'Started from the top...'
	});
	const [{ y: yTop, color: colorTop }, setTop] = useSpring(() => ({ y: -100, color: '#fff' }));
	const [{ x: xRight, color: colorRight }, setRight] = useSpring(() => ({ x: 100, color: '#fff' }));
	const [{ y: yBottom, color: colorBottom }, setBottom] = useSpring(() => ({ y: 100, color: '#fff' }));
	const [{ x: xLeft, color: colorLeft }, setLeft] = useSpring(() => ({ x: -100, color: '#fff' }));


	return (
		<div className='background flex-wrap'>

			<div className='w-100 d-flex justify-content-center'>
				<button
					className='animated-btn'
					onMouseEnter={() => {
						updateContent({ ...text, top: '...now we here' });
						setTop({ y: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, top: 'Started from the top...' });
						setTop({ y: -100, color: '#fff' });
					}}
				>
					<animated.span style={{ colorTop }} className='animated-span'>
						{text.top}
					</animated.span>
					<animated.div
						style={{ transform: yTop.interpolate(v => `translateY(${v}%`) }}
						className='covering'
					/>
				</button>
			</div>


			<div className='w-100 d-flex justify-content-center'>
				<button
					className='animated-btn'
					onMouseEnter={() => {
						updateContent({ ...text, left: '...now we here' });
						setLeft({ x: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, left: 'Started from the left...' });
						setLeft({ x: -100, color: '#fff' });
					}}
				>
					<animated.span style={{ colorLeft }} className='animated-span'>
						{text.left}
					</animated.span>
					<animated.div
						style={{ transform: xLeft.interpolate(v => `translateX(${v}%`) }}
						className='covering'
					/>
				</button>

				<button
					className='animated-btn'
					onMouseEnter={() => {
						updateContent({ ...text, right: '...now we here' });
						setRight({ x: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, right: 'Started from the right...' });
						setRight({ x: 100, color: '#fff' });
					}}
				>
					<animated.span style={{ colorRight }} className='animated-span'>
						{text.right}
					</animated.span>
					<animated.div
						style={{ transform: xRight.interpolate(v => `translateX(${v}%`) }}
						className='covering'
					/>
				</button>
			</div>

			<div className='w-100 d-flex justify-content-center'>
				<button
					className='animated-btn'
					onMouseEnter={() => {
						updateContent({ ...text, bottom: '...now we here' });
						setBottom({ y: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, bottom: 'Started from the bottom...' });
						setBottom({ y: 100, color: '#fff' });
					}}
				>
					<animated.span style={{ colorBottom }} className='animated-span'>
						{text.bottom}
					</animated.span>
					<animated.div
						style={{ transform: yBottom.interpolate(v => `translateY(${v}%`) }}
						className='covering'
					/>
				</button>
			</div>

		</div>
	);
};
