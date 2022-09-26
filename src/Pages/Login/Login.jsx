import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const route = useNavigate();
  return (
    <section className='login section_padding flex_center'>
      <div className="login_cont">
        <h2>Login</h2>
        <p>Enter Login details to get access</p>
        <form action="">
          <label htmlFor="username">Username Or Email Address</label>
          <input type="text" name='username' id='username' placeholder='Username / Email Address' />
          <label htmlFor="password">Username Or Email Address</label>
          <input type="password" name='password' id='password' placeholder='Enter Password' />
          <div className="log_info flex_between">
            <div className="log_keep">
              <input type="checkbox" name="keeplog" id="keeplog" />
              <label htmlFor="keeplog" className='keeplabel'>Keep Me Logged In</label>
            </div>
            <Link className='forgotpass' to='/'>Forgot Password?</Link>
          </div>
          <div className="logEnd flex_between">
            <p className='tosignup'>Don't have an account? <Link className='signLink' to='/SignUp'>Sign Up</Link> here</p>
            <button type="submit" className='custom_button' onClick={() => route('/')}>Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login