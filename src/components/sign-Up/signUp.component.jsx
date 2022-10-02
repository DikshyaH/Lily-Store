const SignUp = () =>
{
    return(
        <div>
            <h1>SignUp with Email and Password</h1>
            <form onSubmit={() => {}}>
                <label>Name</label>
                <input type ="text" required></input>

                <label>Email</label>
                <input type ="email" required></input>

                <label>Password</label>
                <input type ="password" required></input>
                
                <label>Confirm Password</label>
                <input type ="password" required></input>

                <button type ="submit">Sign Up</button>
                
            </form>
        </div>

    )
}

export default SignUp;




