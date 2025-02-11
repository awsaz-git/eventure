import { useEffect } from 'react'
import '../css/style.css'
import HomeEventCard from './HomeEventCard.jsx'

function HomeEventSection(props) {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                }
            })
        })

        const header = document.querySelectorAll('.home-header');
        const card = document.querySelectorAll('.home-event-card');
        const button = document.querySelectorAll('.load-more-button');

        card.forEach(element => {
            observer.observe(element);
        });

        header.forEach(element => {
            observer.observe(element);
        });

        button.forEach(element => {
            observer.observe(element);
        });

    }, []);

    return (
        <div className='flex-column justify-center align-center home-events-container'>
            <div className='flex-column align-center home-events-content'>
                <div className='home-header'>{props.header}</div>
                <div className='home-events-grid'>
                    <HomeEventCard />
                    <HomeEventCard />
                    <HomeEventCard />
                    <HomeEventCard />
                    <HomeEventCard />
                    <HomeEventCard />
                </div>
                <button className='button-1 width-xlarge load-more-button'>Load More</button>
            </div>
        </div>
    );
}

export default HomeEventSection