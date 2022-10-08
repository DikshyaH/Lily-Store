import { useState, useContext } from "react";

import { createRegularUserDocument } from "../../utils/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";

import Button from "../all-buttons/buttons.component";

import './signUp.style.scss';


const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
};

const SignUp = () =>
{
   const [currentFormFields, setFormFields] = useState(defaultFormFields);
   const {displayName ,email ,password ,confirmPassword} = currentFormFields;

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
    if(password!==confirmPassword){ 
        alert("Passwords do not match");
        return;
    }
    try {
        const {user} = await createRegularUserDocument(email,password);
        // setCurrentUserContext(user);
        // const customer = await createUserDocumentFromAuth(user,{displayName});
        // console.log(customer);
        resetFormFields();

    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            console.log("Email entered is already registered",error);    
        }else{
        console.log("Error while creating user",error);
        }
    } 
   }

    return(
        <div className = 'sign-up-container'>
            <h2>Don't have an account ? </h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label = "Display Name" type ="text" required onChange={handleChange} name = "displayName" value={displayName} />

                <FormInput label = "Email" type ="email" required onChange={handleChange} name = "email" value={email} />

                <FormInput label = "Password" type ="password" required onChange={handleChange} name = "password" value={password} />
                
                <FormInput label = "Confirm Password" type ="password" required onChange={handleChange} name = "confirmPassword" value={confirmPassword} />

                <Button type ="submit" >Sign Up</Button>
                
            </form>
        </div>

    )
}

export default SignUp;




