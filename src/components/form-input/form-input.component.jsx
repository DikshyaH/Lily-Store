import './form-input.style.scss';

const FormInput =({label,...otherformproperties}) =>{
 return(
    <div className = "form-group">
    <input className = "form-input" {...otherformproperties}/>    

    {label && (
        <label className = {`${otherformproperties.value.length ? 'shrink': null} form-input-label`}>{label}</label>
        )}
    
    </div>
 )
}

export default FormInput;