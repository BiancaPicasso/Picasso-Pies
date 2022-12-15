import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom"
import React from 'react'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to=''>
          <h1> Picasso Pies </h1>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;