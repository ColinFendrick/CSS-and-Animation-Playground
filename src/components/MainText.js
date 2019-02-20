import React from 'react'
import { animated } from 'react-spring'

export default ({ style }) =>
  <animated.div className="main-wrapper" style={style}>
    <div className="main-text">I love you <br/> click me and I change color</div>
  </animated.div>