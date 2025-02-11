import Hero from '../modules/Hero.jsx'
import HomeEventSection from '../modules/HomeEventSection.jsx';
import CategoriesList from '../modules/CategoriesList.jsx';
import React, { useState, useEffect } from 'react';

function Home() {
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const dropdownItem = document.querySelectorAll('.dropdown-item');

        dropdownItem.forEach(item => {
            item.addEventListener('click', () => {
                const city = item.innerHTML;
                console.log(city);
                if (city !== 'Anywhere' && city !== null) {
                    setSelectedCity('in ' + city);
                } else {
                    setSelectedCity('');
                }
            })
        });

    }, []);

    return (
        <>
            <Hero headline1={'Your Next Adventure'} headline2={'Awaits.'} />
            <CategoriesList />
            <HomeEventSection header={'Popular Events ' + selectedCity} />
            <HomeEventSection header={'Discover Best Online Events'} />
        </>
    );
}

export default Home