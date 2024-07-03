import React from 'react'
import NavbarB from './../components/Header/NavbarB'
import Routers from "../routers/routers"

import Navbar from "./../components/Header/Header"

const Layout = ( ) => {

  return (
    <>
      <Navbar />
      <div>
        <Routers />
      </div>
      <NavbarB />
    </>
  )
}

export default Layout