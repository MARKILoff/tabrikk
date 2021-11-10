import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"


const TopBar = ({ user }) => {

    return (
        <div className="container">
            <div className="left">
                <span>Siroj</span>
            </div>
            <div className="center">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
            </div>
            <div className="right">
                {
                    user ? (
                        <img src="https://files.oyebesmartest.com/uploads/large/11586817969vxi.png" alt="" />
                    ) : (
                        <>
                            <Link to="/register">
                                Register
                            </Link>
                            <Link to="/login">
                                Login
                            </Link>
                        </>
                    )
                }

            </div>

        </div >
    )


}

export default TopBar
