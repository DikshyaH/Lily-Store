import Home from './route/home/home.component.jsx';
import {Routes, Route} from 'react-router-dom' ;
import Navigation from './components/navigation-bar/navigation.component.jsx';

const ContactUs=()=>{
  return(
    <div>Contact Us page</div>
  )
}

const SignIn=()=>{
  return(
    <div>SignIn page</div>
  )
}

const App = () => {
  return (
    <Routes>
    <Route path ='/' element={<Navigation/>}>
      <Route index element={<Home />}></Route>
      <Route path='contact-us' element ={<ContactUs/>}></Route>
      <Route path='signIn' element ={<SignIn/>}></Route>
    </Route>
    </Routes>
  ); 
};

export default App;
