import '../css/style.css'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className='flex-column align-center footer-container'>
            <div className='flex-column align-center justify-start footer-content'>
                <div className='flex-row justify-between footer-top'>
                    <div className='footer-links'>
                        <div>Eventure</div>
                        <Link to='/about' className='footer-text'>About</Link>
                        <Link to='/contact' className='footer-text'>Contact</Link>
                        <div className='footer-text'>FAQs</div>
                        <div className='footer-text'>Terms of Service</div>
                        <div className='footer-text'>Privacy Policy</div>
                    </div>
                    <div className='footer-links'>
                        <div>Help</div>
                        <div className='footer-text'>Account Support</div>
                        <div className='footer-text'>Creating Events</div>
                        <div className='footer-text'>Ticket Purchase Terms & Conditions</div>
                    </div>
                    <div className='footer-links'>
                        <div>Categories</div>
                        <div className='footer-text'>Travel & Adventure</div>
                        <div className='footer-text'>Community</div>
                        <div className='footer-text'>Sports & Outdoors</div>
                        <div className='footer-text'>Workshops & Classes</div>
                        <div className='footer-text'>Concerts & Entertainment</div>
                        <div className='footer-text'>Culture & Arts</div>
                    </div>
                    <div className='footer-links'>
                        <div>Follow Us</div>
                        <div className='footer-text'>Instagram</div>
                        <div className='footer-text'>LinkedIn</div>
                    </div>
                </div>
                <div className='footer-line'></div>
                <div className='footer-copyright'>&copy;{new Date().getFullYear()} Eventure Jo LLC. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer