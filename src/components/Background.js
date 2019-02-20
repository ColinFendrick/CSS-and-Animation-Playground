import React, { useState } from 'react'
import { useTrail } from 'react-spring'
import randomColor from 'randomcolor';

import { Panel, MainText } from '.'
const config = { mass: 5, tension: 2000, friction: 200 }

export default () => {
  const [counter, setCounter] = useState(0)

  const trail = useTrail(8, {
    config,
    opacity: 1,
    flex: counter % 2 === 0 ? 1 : 0.3,
    from: { opacity: 0, flex: 0 }
  })

  const colors = randomColor({ count: 7 })

  return (
    <div className="background" onClick={() => {
      setCounter(() => setCounter(counter + 1))
    }}>
      {trail.map((props, index) =>
        (index <= colors.length - 1) ?
        <Panel key={index}  style={{...props, backgroundColor: colors[index]}} />
        :
        <MainText key={index} style={props} />
      )}
    </div>
  )
}