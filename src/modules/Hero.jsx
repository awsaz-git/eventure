import { useEffect, useState } from 'react';
import '../css/style.css';

function Hero(props) {
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;

    const [selectedCity, setSelectedCity] = useState('Anywhere');

    useEffect(() => {
        const dropdownItem = document.querySelectorAll('.dropdown-item');

        dropdownItem.forEach(item => {
            item.addEventListener('click', () => {
                setSelectedCity(item.innerHTML);
                params.set('city', item.innerHTML);
                window.history.pushState({}, '', '?' + params.toString());
            })

        });

        const form = document.querySelector('#search-form');
        const searchInput = document.querySelector('#search');

        form.addEventListener('submit', (event) => {
            if (pathname == '/events') {
                event.preventDefault();
            }
        });

        searchInput.addEventListener('input', () => {

            if (searchInput !== null) {
                params.set('search', searchInput.value);
                window.history.pushState({}, '', '?' + params.toString());
            }
        });

    }, []);

    const toggleDropdown = () => {
        const arrow = document.querySelector('#dropdown-arrow');
        const dropdown = document.querySelector('.dropdown-menu');

        arrow.classList.toggle('rotate');
        dropdown.classList.toggle('open');

    };

    return (
        <>
            <div className='flex-column justify-end hero-container'>
                <div className='flex-column align-center hero-content'>
                    <div className='hero-header'>
                        <div className='hero-title1'>{props.headline1}</div>
                        <div className='hero-title2'>{props.headline2}</div>
                    </div>
                    <div className='flex-row justify-between search-container'>
                        <form id='search-form' method='GET' action='/events' className='flex-row align-center location-search'>
                            <img className='search-icon-big' src="/icons/outline/magnifying-glass.svg" alt="search" />
                            <input name='search' id='search' className='input-1' type="text" />
                        </form>
                        <div className='flex-row justify-between align-center location-dropdown' onClick={toggleDropdown}>
                            <img className='search-icon-big' src="/icons/outline/map-pin.svg" alt="" />
                            <div className='city-text'>{selectedCity}</div>
                            <img id='dropdown-arrow' className='search-icon-small' src="/icons/outline/chevron-down.svg" alt="dropdown arrow" />
                            <div className='flex-column align-center dropdown-menu'>
                                <div className='dropdown-item'>Anywhere</div>
                                <div className='dropdown-item'>Amman</div>
                                <div className='dropdown-item'>Irbid</div>
                                <div className='dropdown-item'>Zarqa</div>
                                <div className='dropdown-item'>Al-Salt</div>
                                <div className='dropdown-item'>Al-Mafraq</div>
                                <div className='dropdown-item'>Al-Karak</div>
                                <div className='dropdown-item'>Madaba</div>
                                <div className='dropdown-item'>Jerash</div>
                                <div className='dropdown-item'>Ajloun</div>
                                <div className='dropdown-item'>Aqaba</div>
                                <div className='dropdown-item'>Ma'an</div>
                                <div className='dropdown-item'>Al-Tafeela</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Hero