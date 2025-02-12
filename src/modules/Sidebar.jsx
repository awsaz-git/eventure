import { Link, useLocation } from 'react-router-dom';
import '../css/style.css';

function Sidebar() {
    const location = useLocation();

    const closeSidebar = () => {
        const sidebar = document.querySelector('.sidebar-container');
        const overlay = document.querySelector('.overlay');

        sidebar.style.right = '-100vw';
        overlay.classList.toggle('open');
        document.body.style.overflowY = '';
    }

    return (
        <>
            <div className='overlay'>

            </div>
            <div className='flex-column justify-center sidebar-container'>
                <div className='flex-column justify-between sidebar-content'>
                    <div className='flex-column justify-center align-center sidebar-back-button' onClick={closeSidebar}>
                        <img className='chevron-right' src="/icons/white/chevron-right.svg" alt="back button" />
                    </div>
                    <img className='sidebar-logo' src="/images/logo-3.png" alt="logo" />
                    <div className='flex-column sidebar-nav'>
                        <Link to="/" className='flex-row justify-start align-center sidebar-button' onClick={closeSidebar}>
                            <div className={`sidebar-button-selected ${location.pathname === '/' ? '' : 'not'}`}></div>
                            <div>Home</div>
                        </Link>
                        <Link to="/events" className='flex-row justify-start align-center sidebar-button' onClick={closeSidebar}>
                            <div className={`sidebar-button-selected ${location.pathname === '/events' ? '' : 'not'}`}></div>
                            <div>Events</div>
                        </Link>
                        <Link to="/forum" className='flex-row justify-start align-center sidebar-button' onClick={closeSidebar}>
                            <div className={`sidebar-button-selected ${location.pathname === '/forum' ? '' : 'not'}`}></div>
                            <div>Forum</div>
                        </Link>
                        <Link to="/about" className='flex-row justify-start align-center sidebar-button' onClick={closeSidebar}>
                            <div className={`sidebar-button-selected ${location.pathname === '/about' ? '' : 'not'}`}></div>
                            <div>About</div>
                        </Link>
                    </div>
                    <div className='flex-row justify-center align-center'>
                        <button id='login-button' className='button-2 width-medium'>Login</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Sidebar;
