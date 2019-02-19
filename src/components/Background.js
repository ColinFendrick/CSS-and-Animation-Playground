import React from 'react'
import { useTrail } from 'react-spring'

import { Panel, MainText } from '.'

const colors = ["#E8CCAD", "#DCA090", "#D0757E", "#C55C87", "#B94599", "#A931AD", "#741FA1"]
const config = { mass: 5, tension: 2000, friction: 200 }

export default ({ children }) => {
  const trail = useTrail(8, {
    config,
    opacity: 1,
    flex: 1,
    from: { opacity: 0, flex: 0.1 }
  })

  return (
    <div className="background">
      {trail.map((props, index) =>
        (index <= colors.length - 1) ?
        <Panel key={index} backgroundColor={colors[index]} style={props} />
        :
          <MainText key={index} style={props} />
      )}
    </div>
  )
}