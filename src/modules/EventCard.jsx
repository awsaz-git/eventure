import '../css/style.css'
import { Link } from 'react-router-dom';

function EventCard() {

    return (
        <Link to='/e' className='event-card'>
            <div className='event-top'>
                <div className='event-star'>
                    <img src="/icons/outline/star.svg" alt="interested" />
                </div>
                <img className='event-poster' src="/images/petra.jpg" alt="event poster" />
                <div className='event-category'>Event Category</div>
            </div>
            <div className='flex-column align-start justify center event-bottom'>
                <div className='event-title'>Event title that can go up to two lines</div>
                <div className='event-venue-date'>Mmm 00 | Event venue that can go up to one line</div>
                <div className='event-time'>00:00 PM - 00:00 PM</div>
                <div className='flex-row align-center event-info'>
                    <img className='event-info-icon' src="/icons/ticket-green.svg" alt="ticket" />
                    <div className='event-info-text'>JOD 999</div>
                </div>
            </div>
        </Link>
    );
}

export default EventCard