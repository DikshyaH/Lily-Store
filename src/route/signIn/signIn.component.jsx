import {signInWithGooglePopUp} from '../../utils/firebase.utils.js';

import SignUp from '../../components/sign-Up/signUp.component.jsx';
import './signIn.styles.scss';

import Button from '../../components/all-buttons/buttons.component.jsx';

import SignInWithEmail from '../../components/sign-in-with-email/sign-in-with-email.component.jsx';

// import GoogleImage from '../../images/google-sign-in.png';

const SignIn=()=>{
    const gogglelogin = async () =>{
      await signInWithGooglePopUp(); 
      // const customer = await createUserDocumentFromAuth(user);
      // console.log(customer);
    }
    return(
    <div className='sign-in-page-components'>
      <SignInWithEmail/>
      {/* <div style={{Image :`url(${(GoogleImage)})`}}></div> */}
      <Button type='button' buttonType="google" onClick={gogglelogin}>Sign In With Google</Button>
      <SignUp/>
    </div>
    )
  }

export default SignIn;

   