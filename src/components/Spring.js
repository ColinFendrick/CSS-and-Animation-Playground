import React from 'react'
import { useSpring, animated } from 'react-spring'

export default () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })
  return <animated.div style={animation}>I'm fading in bitch</animated.div>
}
