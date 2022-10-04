import {signInWithGooglePopUp, createUserDocumentFromAuth} from '../../utils/firebase.utils.js';

import SignUp from '../../components/sign-Up/signUp.component.jsx';
import './signIn.styles.scss';

import Button from '../../components/all-buttons/buttons.component.jsx';

const SignIn=()=>{
    const gogglelogin = async () =>{
      const {user} = await signInWithGooglePopUp(); 
      const customer = await createUserDocumentFromAuth(user);
      console.log(customer);
    }
    return(
    <div>
      <h2>Already have an account? </h2>
      <span> Sign In with Google</span>
      <Button buttonType="google" onClick={gogglelogin}>Sign In with Google </Button>
      <SignUp/>
    </div>
    )
  }

export default SignIn;

   