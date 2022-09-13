// import logo from './logo.svg';
import '../../App.css';

// import 'categories.styles.scss';

import AllCategoriesHolder from '../../components/all-categories/all-categories.component';

import DressesImage from '../../images/Dresses.jpg';
import ShoesImage from '../../images/Shoes.jpg';
import BagsImage from '../../images/Bags.jpg';
import AccessoriesImage from '../../images/Accessories.jpg';
import HomeDecor from '../../images/HomeDecor.jpg';

import { Outlet } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      title : 'Shoes',
      id : '1',
      imageURL : ShoesImage
    },
    {
      title : 'Dresses',
      id : '2',
      imageURL : DressesImage
    },
    {
      title : 'Bags',
      id : '3',
      imageURL : BagsImage
    },
    {
      title : 'Accessories',
      id : '4',
      imageURL : AccessoriesImage
    },
    {
      title : 'Home Decor',
      id : '5',
      imageURL : HomeDecor
    }

  ]
  
  return (
    <div className="App">
      <Outlet/>
      <AllCategoriesHolder categories = {categories}></AllCategoriesHolder>
      
    </div>
  );
}

export default Home;
