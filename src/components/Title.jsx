import React from 'react'

function Title(props) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading text-white pb-2 md:pb-5 leading-tight underline decoration-green underline-offset-[15px] md:underline-offset-[20px] decoration-3 md:decoration-4 ">
        {props.children}
    </h1>
  )
}

export default Title