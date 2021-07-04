//Code of the Header with the Logout button
import React from 'react';
import {withRouter} from 'react-router-dom'

import './header.css';
const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);