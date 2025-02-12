import '../css/style.css'

function EventPage() {

    const navigateBack = () => {
        window.history.back();
    };

    return (
        <div className='flex-column align-center event-page-container'>
            <div className='flex-column event-page-content'>
                <div className='flex-column event-page-top'>
                    <img className='event-page-back-button' src="/icons/solid/arrow-left.svg" alt="back button" onClick={navigateBack} />
                    <img className='event-page-image' src="/images/amman-2.jpg" alt="event image" />
                    <div className='flex-row align-start justify-between event-page-name-section'>
                        <div className='event-page-title'>
                            Event Title that can go up to as many lines the event title is
                        </div>
                        <div className='flex-row align-center'>
                            <img src="/icons/outline/star.svg" alt="interested" />
                            <img src="/icons/outline/share.svg" alt="share" />
                        </div>
                    </div>
                </div>

                <div className='flex-column event-page-info-section'>
                    <div className='event-page-info-header'>Date and Time</div>
                    <div className='flex-row align-center event-page-info'>
                        <img className='event-page-info-icon' src="/icons/outline/calendar-days.svg" alt="calendar" />
                        <div className='event-page-info-text'>Day, 00 Month 0000</div>
                    </div>
                    <div className='flex-row align-center event-page-info'>
                        <img className='event-page-info-icon' src="/icons/outline/clock.svg" alt="calendar" />
                        <div className='event-page-info-text' >00:00 PM - 00:00 PM</div>
                    </div>
                </div>
                <div className='flex-column event-page-info-section'>
                    <div className='event-page-info-header'>Location</div>
                    <div className='flex-row align-start event-page-info'>
                        <img className='event-page-info-icon' src="/icons/outline/map-pin.svg" alt="calendar" />
                        <div className='address-text event-page-info-text'>Address line street name building number address info venue name location directions addtional location details near buildings etc..</div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.6214575763147!2d35.83003167611204!3d31.97116472473103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca10068eeddab%3A0x2e1b5902b11076fe!2sBusiness%20park!5e0!3m2!1sen!2sjo!4v1739367156163!5m2!1sen!2sjo"
                        className='location-embed' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
                <div className='flex-column event-page-info-section'>
                    <div className='event-page-info-header'>Hosted By</div>
                    <div className='flex-row align-center event-page-host-info'>
                        <img className='host-image' src="/images/muslim-giga-chad.jpg" alt="calendar" />
                        <div className='flex-column align-center justify-around event-page-host-name'>
                            <div className='event-page-info-text'>Host Name</div>
                            <button className='button-2 event-page-follow-button'>Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPage