import { React } from 'react'
import logo from './../images/logo3.png'
import './LoggedIn.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

library.add(faChevronDown, faBell)



export default function LoggedIn() {

    function dropdown () {
        const elem = document.querySelectorAll('#dropdown');
        const head = document.querySelector('#drop-head');
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.position = 'relative'
            elem[i].style.top = '30px'
            elem[i].style.display = 'block'
            head.style.top = '48px'
        }
    }

  return (
    <header className="loggedin-nav">
        <div className="logo-container">
            <div id="nav-logo-container">
                <img id="nav-logo" alt="logo" src={logo}/> 
            </div>
            <div className="nav-links">
                <a href="/exqure-frontend/transactions">Transactions</a>
                <div className="nav-drop">
                    <a id="drop-head" href="/exqure-frontend/">Customer Support</a> <br/>
                    <div id="dropdown">
                        <a id="dropdown-l" href="/exqure-frontend/transactions-crypto">Crypto Transactions</a> <br/>
                        <a id="dropdown-l" href="/exqure-frontend/homepage">Landing</a><br/>
                        <a id="dropdown-l" href="/exqure-frontend/login">Login</a><br/>
                    </div>
                </div>
                <FontAwesomeIcon id="chevron" onClick={dropdown} icon="fa-solid fa-chevron-down" />
                <a href="/help">Help</a>
            </div>
            <div className="nav-profile">
                <button id="bell"><FontAwesomeIcon icon="fa-regular fa-bell" size="2x" /></button>
                <button id="userpreview"> VA <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></button>
            </div>
        </div>
    </header>
  )
}