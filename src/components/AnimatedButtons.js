import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default () => {
	const TEXT = {
		BOTTOM: 'Started from the bottom...',
		LEFT: 'Started from the left...',
		RIGHT: 'Started from the right...',
		TOP: 'Started from the top...',
		DONE: '...now we here'
	};
	const [text, updateContent] = useState({
		bottom: TEXT.BOTTOM,
		left: TEXT.LEFT,
		right: TEXT.RIGHT,
		top: TEXT.TOP
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
						updateContent({ ...text, top: TEXT.DONE });
						setTop({ y: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, top: TEXT.TOP });
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
						updateContent({ ...text, left: TEXT.DONE });
						setLeft({ x: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, left: TEXT.LEFT });
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
						updateContent({ ...text, right: TEXT.DONE });
						setRight({ x: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, right: TEXT.RIGHT });
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
						updateContent({ ...text, bottom: TEXT.DONE });
						setBottom({ y: 0, color: '#000' });
					}}
					onMouseLeave={() => {
						updateContent({ ...text, bottom: TEXT.BOTTOM });
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
