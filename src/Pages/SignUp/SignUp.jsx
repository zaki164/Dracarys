import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const route = useNavigate();
  return (
    <section className='signup section_padding flex_center'>
      <div className="signup_cont">
        <h2>Sign Up</h2>
        <p>Create your account to get full access</p>
        <form action="">
          <label htmlFor="name">Full Name</label>
          <input type="text" name='name' id='name' placeholder='Enter Full Name' />
          <label htmlFor="email">Email Address</label>
          <input type="email" name='email' id='email' placeholder='Enter Email Address' />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' placeholder='Enter Password' />
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name='password' id='password' placeholder='Confirm Password' />
          <div className="signEnd flex_between">
            <p className='tologin'>Already have an account? <Link className='loginLink' to='/Login'>Login</Link> here</p>
            <button type="submit" className='custom_button' onClick={() => route('/')}>Sign Up</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignUp