import { useState, useContext } from "react";

import { signInWithRegularUserDocument} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";

// import { UserContext } from "../../contexts/user.context";

import Button from "../all-buttons/buttons.component";

import './sign-in-with-email.style.scss';


const defaultFormFields = {
    email : '',
    password : '',
};



const SignInWithEmail = () =>
{
   const [currentFormFields, setFormFields] = useState(defaultFormFields);
   const {email ,password} = currentFormFields;

//    const {setCurrentUserContext} = useContext(UserContext);

   const resetFormFields =()=>{
    setFormFields(defaultFormFields);
   }
   
    const handleChange =(event)=>{
    const {name, value} = event.target;

    setFormFields({...currentFormFields, [name]:value});
    
   }

   const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
        const {user} = await signInWithRegularUserDocument(email,password);
        console.log(user);
        // setCurrentUserContext(user);
        resetFormFields();

    } catch (error) {
        switch (error.code){
            case 'auth/wrong-password':
                alert('You have entered an incorrect password');
                break;
            case 'auth/user-not-found':
                alert('You have entered an incorrect email address');
                break;
            default:
                console.log(error);

        }
    } 
   }

    return(
        <div className = 'sign-in-with-email-container'>
            <h2>Already have an account? </h2>
            <form onSubmit={handleSubmit}>
                <FormInput label = "Email" type ="email" required onChange={handleChange} name = "email" value={email} />

                <FormInput label = "Password" type ="password" required onChange={handleChange} name = "password" value={password} />
                
                <Button type ="submit" >Sign In</Button>
                
            </form>
        </div>

    )
}

export default SignInWithEmail;




