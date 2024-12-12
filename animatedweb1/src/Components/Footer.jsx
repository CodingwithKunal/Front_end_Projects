import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    <ul className="list-inline mt-2">
                        <li className="list-inline-item">
                            <a href="#" className="text-white">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">Terms of Service</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
