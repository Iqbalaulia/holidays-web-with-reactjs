import React from 'react'
import { Fade } from 'react-reveal/Fade'

export default function Meta({data, current}) {
  return (
    <Fade delay={300}>
        <div className="text-center" style={{marginBottom: 30}}>
            <div className="h2"> { data[current] && data[current].title}</div>
            <p className="lead text-gray-500">
                {data[current] && data[current].description}
            </p>
        </div>
    </Fade>
  )
}
