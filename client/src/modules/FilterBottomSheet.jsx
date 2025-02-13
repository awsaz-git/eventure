import '../css/style.css'

function FilterBottomSheet() {

    const closeFilterSheet = () => {
        const bottomSheet = document.querySelector('.filter-bottomsheet-container');
        const overlay = document.querySelector('.overlay');

        bottomSheet.style.bottom = '-100vh';
        overlay.classList.toggle('open');
        document.body.style.overflowY = '';
    }

    return (
        <div className='flex-column align-center justify-start filter-bottomsheet-container'>
            <div className='flex-column filter-bottomsheet-content'>
                <img id='filter-exit-button' className='filter-exit-icon' src="/icons/outline/x-mark.svg" alt="exit" onClick={closeFilterSheet} />
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
        </div>
    );
}

export default FilterBottomSheet