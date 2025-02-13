import '../css/style.css'
import { Link } from 'react-router-dom';

function HomeEventCard() {


    return (
        <Link to='/e' className='flex-column justify-between align-center home-event-card'>
            <div className='flex-column justify-center align-center home-event-top-section'>
                <div className='home-event-category'>Event Category</div>
                <img className='home-event-poster' src="/images/petra.jpg" alt="event poster" />
                <div className='flex-column justify-center align-center home-event-interested'>
                    <img src="/icons/outline/star.svg" alt="star" />
                </div>
            </div>
            <div className='flex-column justify-end align-center home-event-bottom-section'>
                <div className='flex-row home-event-bottom-content'>
                    <div className='flex-column align-center'>
                        <div className='home-event-month'>MMM</div>
                        <div className='home-event-day'>00</div>
                    </div>
                    <div className='flex-column home-event-description'>
                        <div className='home-event-title'>Event title that can go up to two lines</div>
                        <div className='home-event-venue'>Venue name that can go up to one line</div>
                        <div className='home-event-time'>00:00 PM - 00:00 PM</div>
                        <div className='flex-row home-event-info'>
                            <div className='flex-row align-center'>
                                <img className='home-event-info-icon' src="/icons/ticket.svg" alt="ticket" />
                                <div className='home-event-info-text'>JOD 99</div>
                            </div>
                            <div className='color-black'>&bull;</div>
                            <div className='flex-row align-center'>
                                <img className='home-event-info-icon' src="/icons/star.svg" alt="star" />
                                <div className='home-event-info-text'>99 interested</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default HomeEventCard