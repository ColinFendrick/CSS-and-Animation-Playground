import React, { useState } from 'react'
import { useTrail } from 'react-spring'

import { Panel, MainText } from '.'
import colors from '../colors.json'
import ajax from '../colorrequest'
const config = { mass: 5, tension: 2000, friction: 200 }

export default () => {
  const [int, setInt] = useState(0)
  const [counter, setCounter] = useState(0)

  const success = res => {
    console.log(Object.keys(res))
    // res.colors.forEach((color, index) => {
    //   colorsArray[index] = `#${color.hex}`
    // })
  }
  const error = err => console.log(err)
  const url = 'http://www.colr.org/json/schemes/random?scheme_size_limit=>7'

  const getRanInt = max => Math.floor(Math.random() * Math.floor(max))

  const trail = useTrail(8, {
    config,
    opacity: 1,
    flex: counter % 2 === 0 ? 1 : 0.3,
    from: { opacity: 0, flex: 0 }
  })

  return (
    <div className="background" onClick={() => {
      setInt(() => getRanInt(colors.length))
      setCounter(() => setCounter(counter + 1))
      ajax('GET', url, success, error)
    }}>
      {trail.map((props, index) =>
        (index <= colors[int].length - 1) ?
          <Panel key={index} backgroundColor={colors[int][index]} style={props} />
        :
        <MainText key={index} style={props} />
      )}
    </div>
  )
}