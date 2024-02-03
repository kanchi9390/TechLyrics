import { BsList } from "react-icons/bs";

import './index.css'

const Header=()=>{
    return(
        <nav className="navbar-section">
            <div className="logo-section">
                <img src="https://res.cloudinary.com/dt3ffhf9m/image/upload/v1706789996/KasperTech-assignment/tkmdru93igqqkcj4j8gf.png" alt="raft" className="website-logo"/>
                <p className="website-name">Raft</p>
            </div>
            <BsList className="nav-icon"/>
            <div className='nav-links-section'>
                <p className='nav-link'>Home</p>
                <p className='nav-link'>Science</p>
                <p className='nav-link'>Platform</p>
                <p className='nav-link'>About Us</p>
                <p className='nav-link'>News</p>
                <div className='contact-button-div'>
                    <button className='contact-button'>Contact Us</button>
                </div>
            </div>
        </nav>
    )
}

export default Header