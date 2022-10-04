/* 
default button type

inverted button type

google sign in 
*/
import './buttons.style.scss';

const BUTTON_TYPE_CLASSES ={
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({children, buttonType,...otherformproperties}) =>{
    return(
        <button className = {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherformproperties}>{children}</button>
    )

}

export default Button;