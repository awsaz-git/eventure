import '../css/style.css'
import { Link } from 'react-router-dom';

function EventCard(props) {

    return (
        <Link to={`/e/${props.id}`} className='event-card'>
            <div className='event-top'>
                <div className='event-star'>
                    <img src="/icons/outline/star.svg" alt="interested" />
                </div>
                <img className='event-poster' src="/images/petra.jpg" alt="event poster" />
                <div className='event-category'>Event Category</div>
            </div>
            <div className='flex-column align-start justify center event-bottom'>
                <div className='event-title'>{props.eventTitle}</div>
                <div className='event-venue-date'>{props.eventDate} | Event venue that can go up to one line</div>
                <div className='event-time'>{props.startTime} - {props.endTime}</div>
                <div>
                    <div className='flex-row align-center event-info'>
                        <img className='event-info-icon' src="/icons/ticket-green.svg" alt="ticket" />
                        <div className='event-info-text'>JOD 999</div>
                    </div>
                    <div className='flex-row align-center event-info'>
                        <img className='event-info-icon' src="/icons/star.svg" alt="star" />
                        <div className='event-info-text intereseted'>99 intereseted</div>
                    </div>
                </div>

            </div>
        </Link>
    );
}

export default EventCard