import { FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";

import './index.css'

const Footer=()=>{
    return(
        <div className='footer-section'>
            <div className='footer-div'>
                <div className="logo-section">
                    <img src="https://res.cloudinary.com/dt3ffhf9m/image/upload/v1706789996/KasperTech-assignment/tkmdru93igqqkcj4j8gf.png" alt="raft" className="footer-logo"/>
                    <p className="footer-name">Raft</p>
                </div>
                <div className="footer-card">
                    <p className='footer-section-p1'>Home</p>
                    <p className='footer-section-p2'>Offering</p>
                    <p className='footer-section-p2'>Benefits</p>
                    <p className='footer-section-p2'>Testimonials</p>
                    <p className='footer-section-p2'>News</p>
                </div>
                <div className="footer-card">
                    <p className='footer-section-p1'>Science</p>
                    <p className='footer-section-p2'>Benefits</p>
                    <p className='footer-section-p2'>Examples</p>
                    <p className='footer-section-p2'>Scientists</p>
                </div>
                <div className="footer-card">
                    <p className='footer-section-p1'>Platform</p>
                    <p className='footer-section-p2'>Offering</p>
                    <p className='footer-section-p2'>Services & Products</p>
                    <p className='footer-section-p2'>Key Facts</p>
                    <p className='footer-section-p2'>Case Studies</p>
                    <p className='footer-section-p2'>Testimonials</p>
                </div>
                <div className="footer-card">
                    <p className='footer-section-p1'>About Us</p>
                    <p className='footer-section-p2'>Mission & Vision</p>
                    <p className='footer-section-p2'>Company Values</p>
                    <p className='footer-section-p2'>Team</p>
                    <p className='footer-section-p2'>Jobs</p>
                    <p className='footer-section-p2'>Awards</p>
                </div>
                <div className="footer-card">
                    <p className='footer-section-p1'>Resources</p>
                    <p className='footer-section-p2'>Press Kit</p>
                </div>
            </div>
            <div className='footer-div' style={{alignItems:'center',textAlign:'center'}}>
                <p className='footer-section-p1'>© 2023 Psychology and Counseling. All Rights Reserved. With love by Elmous</p>
                <div className='footer-icons' >
                    <FaInstagram className="footer-section-p1"/>
                    <FaTwitter className="footer-section-p1"/>
                    <FaLinkedin className="footer-section-p1"/>
                </div>
            </div>
        </div>
    )
}

export default Footer