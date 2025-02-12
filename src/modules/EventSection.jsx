import '../css/style.css'
import EventCard from './EventCard.jsx'

function EventSection() {

    const openFilterSheet = () => {
        const bototmSheet = document.querySelector('.filter-bottomsheet-container');
        const overlay = document.querySelector('.overlay');

        bototmSheet.style.bottom = '0';
        overlay.classList.toggle('open');
        document.body.style.overflowY = 'hidden';
    }

    return (
        <div className='flex-column align-center justify-center events-container'>
            <div className='flex-column align-end events-content'>
                <button className='flex-row justify-around align-center button-1 width-medium filter-button' onClick={openFilterSheet}>
                    <div>Filter</div>
                    <img src="/icons/outline/adjustments-horizontal.svg" alt="filter" />
                </button>
                <div className='flex-row justify-between filter-container'>
                    <div className='flex-column filter-content'>
                        <div className='filters-title'>
                            Filters
                        </div>
                        <div className='flex-column filter-section'>
                            <div>Price</div>
                            <div className='flex-column filter-options'>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox price' type="checkbox" value="Free" />
                                    <div>Free</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox price' type="checkbox" value="Paid" />
                                    <div>Paid</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-column filter-section'>
                            <div>Date</div>
                            <div className='flex-column filter-options'>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox date' type="checkbox" value="Today" />
                                    <div>Today</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox date' type="checkbox" value="Tomorrow" />
                                    <div>Tomorrow</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox date' type="checkbox" value="ThisWeek" />
                                    <div>This Week</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox date' type="checkbox" value="ThisWeekend" />
                                    <div>This Weekend</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-column filter-section'>
                            <div>Category</div>
                            <div className='flex-column filter-options'>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox category' type="checkbox" value="TravelAdventure" />
                                    <div>Travel & Adventure</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox category' type="checkbox" value="Community" />
                                    <div>Community</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox category' type="checkbox" value="SportsOutdoors" />
                                    <div>Sports & Outdoors</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox category' type="checkbox" value="WorkshopsClasses" />
                                    <div>Workshops & Classes</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox category' type="checkbox" value="ConcertsEntertainment" />
                                    <div>Concerts & Entertainment</div>
                                </div>
                                <div className='flex-row align-center filter-option'>
                                    <input className='checkbox-1 filter-checkbox category' type="checkbox" value="CulturalArts" />
                                    <div>Cultural & Arts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='events-list'>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </div>
    );
}

export default EventSection