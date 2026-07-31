import React from 'react'
import '../css/Header.css'
export default function Header() {
    return (
        <>
            <nav className='grandparent-navigation'>
                <div className='parent-navigation'>
                    <div className='parent-left-navigation'>
                        <div className='logo-navigation'>
                            <h1>Vector AI </h1>
                        </div>
                    </div>
                    <div className='parent-center-navigation'>
                        <nav className='navigation-center-nav'>
                            <ul className='center-ul'>
                                <li className='center-li'>Home</li>
                                <li className='center-li'>About</li>
                                <li className='center-li'>Contact</li>
                                <li className='center-li'>Pricing</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='parent-right-navigation'>
                        <div>Login</div>
                        <div>Register</div>
                    </div>

                </div>

            </nav>


        </>
    )
}