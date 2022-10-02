import {signInWithGooglePopUp, createUserDocumentFromAuth} from '../../utils/firebase.utils.js';

import SignUp from '../../components/sign-Up/signUp.component.jsx';
import './signIn.styles.scss';

const SignIn=()=>{
    const gogglelogin = async () =>{
      const {user} = await signInWithGooglePopUp(); 
      const customer = await createUserDocumentFromAuth(user);
      console.log(customer);
    }
    return(
    <div>
      <h1>SignIn page</h1>
      <button onClick={gogglelogin}>Sign In with Google</button>
      <SignUp/>
    </div>
    )
  }

export default SignIn;

   