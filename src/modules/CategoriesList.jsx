import '../css/style.css'
import CategoryItem from './CategoryItem.jsx';

function CategoriesList() {

    return (
        <div className='flex-column justify-center align-center categories-container'>
            <div className='flex-column categories-content'>
                <div className='home-header'>Explore Categories</div>
                <div className='flex-row align-center justify-between categories-list'>
                    <CategoryItem categoryName={'Category Name'} />
                    <CategoryItem categoryName={'Category Name'} />
                    <CategoryItem categoryName={'Category Name'} />
                    <CategoryItem categoryName={'Category Name'} />
                    <CategoryItem categoryName={'Category Name'} />
                    <CategoryItem categoryName={'Category Name'} />
                </div>
            </div>
        </div>
    );
}

export default CategoriesList