import { Link, useLocation } from 'react-router-dom';
import '../css/style.css'
import Sidebar from './Sidebar.jsx'

function Navbar() {
    const location = useLocation();

    const openSidebar = () => {
        const sidebar = document.querySelector('.sidebar-container');
        const overlay = document.querySelector('.overlay');

        sidebar.style.right = '0';
        overlay.classList.toggle('open');
    }

    return (
        <nav className='content-center items-center nav-container'>
            <div className='flex-row justify-between align-center mobile-nav'>
                <Link to="/">
                    <img className='nav-logo' src="/images/logo-2.png" alt="eventure logo" />
                </Link>
                <img className='nav-icon' src="/icons/white/bars-3-bottom-right.svg" alt="side bar" onClick={openSidebar} />
            </div>
            <div className='flex-row justify-between align-center desktop-nav'>
                <Link to="/">
                    <img className='nav-logo' src="/images/logo-2.png" alt="eventure logo" />
                </Link>
                <div className='flex-row nav-button-container'>
                    <Link to="/" className='flex-column justify-center align-center nav-button'>
                        <div>Home</div>
                        <div className={`nav-button-selected ${location.pathname === '/' ? '' : 'not'}`}></div>
                    </Link>
                    <Link to="/events" className='flex-column justify-center align-center nav-button'>
                        <div>Events</div>
                        <div className={`nav-button-selected ${location.pathname === '/events' ? '' : 'not'}`}></div>
                    </Link>
                    <Link to="/forum" className='flex-column justify-center align-center nav-button'>
                        <div>Forum</div>
                        <div className={`nav-button-selected ${location.pathname === '/forum' ? '' : 'not'}`}></div>
                    </Link>
                    <Link to="/about" className='flex-column justify-center align-center nav-button'>
                        <div>About</div>
                        <div className={`nav-button-selected ${location.pathname === '/about' ? '' : 'not'}`}></div>
                    </Link>
                </div>
                <button id='login-button' className='button-3 width-small'>Login</button>
            </div>
            <Sidebar />
        </nav>
    );
}

export default Navbar