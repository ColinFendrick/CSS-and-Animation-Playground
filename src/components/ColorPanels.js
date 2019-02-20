import React, { useState } from 'react'
import { useTrail } from 'react-spring'
import ColorScheme from 'color-scheme'

import { Panel, MainText } from '.'
const config = { mass: 5, tension: 2000, friction: 200 }

export default () => {
  const [counter, setCounter] = useState(0)

  const genRanInt = max => Math.floor(Math.random() * Math.floor(max))

  const trail = useTrail(9, {
    config,
    opacity: 1,
    flex: counter % 2 === 0 ? 1 : 0.3,
    from: { opacity: 0, flex: 0 }
  })

  const scheme = new ColorScheme();
  const colors = scheme.from_hue(genRanInt(500)).scheme('contrast').variation('soft').colors()

  return (
    <div className="background" onClick={() => {
      setCounter(() => setCounter(counter + 1))
    }}>
      {trail.map((props, index) =>
        (index < 8) ?
        <Panel key={index}  style={{...props, backgroundColor: `#${colors[index]}`}} />
        :
        <MainText key={index} style={props} />
      )}
    </div>
  )
}