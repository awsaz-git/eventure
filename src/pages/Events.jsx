import { useEffect } from 'react';
import Hero from '../modules/Hero.jsx'
import EventSection from '../modules/EventSection.jsx'

function Events() {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const searchInput = document.querySelector('#search');

        if (params.get('search') !== null) {
            console.log(params.get('search'));
            searchInput.value = params.get('search');
        }

    }, []);

    return (
        <>
            <Hero headline1={'Find What Excites'} headline2={'You.'} />
            <EventSection />
        </>
    );
}

export default Events