import Home from './route/home/home.component.jsx';
import {Routes, Route} from 'react-router-dom' ;
import Navigation from './components/navigation-bar/navigation.component.jsx';

const Shop=()=>{
  return(
    <div>This is the shop page</div>
  )
}

const App = () => {
  return (
    <Routes>
    <Route path ='/' element={<Navigation/>}>
      <Route index element={<Home />}></Route>
      <Route path='shop' element ={<Shop/>}></Route>
    </Route>
    </Routes>
  ); 
};

export default App;
