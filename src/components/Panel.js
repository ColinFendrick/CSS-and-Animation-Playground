import React from 'react'
import { animated } from 'react-spring'

export default ({ backgroundColor, style }) => 
  <animated.div className="panel" style={{ backgroundColor, ...style }} />
