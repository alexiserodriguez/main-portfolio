import React from 'react'

function HeroText(props) {
  return (
    <h1 className="text-3xl md:text-5xl font-heading text-white pb-4 leading-tight">
        {props.children}
    </h1>
  )
}

export default HeroText