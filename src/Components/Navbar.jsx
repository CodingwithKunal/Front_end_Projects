import React, { useEffect, useState } from 'react'


const Navbar = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark')
    }, [theme])
    return (
        <>
            <div className="nav">
                <div className="nav_logo">Digital India</div>
                <div className="nav_links">
                    <a href="#" >Services</a>
                    <a href="#" >Work</a>
                    <a href="#" >About</a>
                    <a href="#" >Culture</a>
                    
                    <label className="switch">
                        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme}/>
                        <span className="slider  round"/>
                    </label>

                </div>
            </div>
        </>
    )
}

export default Navbar
