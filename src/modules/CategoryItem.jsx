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
            <div className='category-image'>
            </div>
            <div className='category-name'>{props.categoryName}</div>
        </div>
    );
}

export default CategoryItem