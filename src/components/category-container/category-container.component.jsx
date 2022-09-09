import './category-container.style.scss';

const CategoryItem = ({category}) => {
    const {imageURL, title} = category;
    return(
    <div className = "category-container">
    <div className = "category-image" style={{backgroundImage :`url(${(imageURL)})`}}></div>
    <div className = "category-container-body">
      <h2>{title}</h2> 
      <p>Explore {'>'}</p>
    </div>
    </div>
    )
}

export default CategoryItem;