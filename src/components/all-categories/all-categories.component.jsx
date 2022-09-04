import './all-categories.style.scss'

import CategoryItem from '../category-container/category-container.component.jsx';

const AllCategoriesHolder = ({categories}) => {
    return(
        <div className ="all-categories">
        {categories.map((categorydetails) => (
            <CategoryItem key = {categorydetails.id} category = {categorydetails}></CategoryItem>
        ))}

      </div>
    )

}


export default AllCategoriesHolder; 