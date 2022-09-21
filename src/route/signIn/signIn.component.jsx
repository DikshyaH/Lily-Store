import {signInWithGooglePopUp, createUserDocumentFromAuth} from '../../utils/firebase.utils.js';

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
    </div>
    )
  }

export default SignIn;

   