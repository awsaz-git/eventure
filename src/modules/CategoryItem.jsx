import '../css/style.css'
import { useEffect } from 'react';

function CategoryItem(props) {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                }
            })
        })

        const category = document.querySelectorAll('.categories-item');

        category.forEach(element => {
            observer.observe(element);
        });

    }, []);

    return (
        <div className='flex-column align-center justify-between categories-item'>
            <img src={props.imagePath} alt='category image' className='category-image' />
            <div className='category-name'>{props.categoryName}</div>
        </div>
    );
}

export default CategoryItem