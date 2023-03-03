import React from 'react'
import {Link} from 'react-router-dom'

function LinkC({to, className, children, ...props}) {
  return (
    <Link to={to}>
      <span className={className}>
        {children}
      </span>
    </Link>
  )
}

export default LinkC