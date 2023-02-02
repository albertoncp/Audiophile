import React from 'react'
import { useStateContext } from '../../lib/context';
import "./Nav.scss"
const Nav = () => {

    const { setShowNav, showNav} = useStateContext();

  return (
    <div onClick={() => setShowNav(false)}  className='navContainer' >
        <div onClick={(e) => e.stopPropagation()} >
            <div>yeeee</div>
        </div>
    </div>
  )
}

export default Nav