import '../css/style.css'
import CategoryItem from './CategoryItem.jsx';

function CategoriesList() {

    return (
        <div className='flex-column justify-center align-center categories-container'>
            <div className='flex-column categories-content'>
                <div className='home-header'>Explore Categories</div>
                <div className='flex-row align-center justify-between categories-list'>
                    <CategoryItem categoryName={'Travel & Adventure'} imagePath={'/images/travel-adventure.jpg'} />
                    <CategoryItem categoryName={'Community'} imagePath={'/images/community.jpg'} />
                    <CategoryItem categoryName={'Sports & Outdoors'} imagePath={'/images/sports-outdoors.jpg'} />
                    <CategoryItem categoryName={'Workshops & Classes'} imagePath={'/images/workshops.jpg'} />
                    <CategoryItem categoryName={'Concerts & Entertainment'} imagePath={'/images/concerts.jpg'} />
                    <CategoryItem categoryName={'Culture & Arts'} imagePath={'/images/arts.jpg'} />
                </div>
            </div>
        </div>
    );
}

export default CategoriesList