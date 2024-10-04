import React from 'react'
import { FaGithub } from "react-icons/fa";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">

                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <a className="navbar-brand" href="https://github.com" target='_blank'><FaGithub /><span className='ms-1'>Github Finder</span></a>
                </ul>

            </div>
        </nav>

    )
}

export default Header