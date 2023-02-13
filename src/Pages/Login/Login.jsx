import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { CompLoader } from '../../components';

const Login = () => {
  const route = useNavigate();
  const { loginWithRedirect, loginWithPopup, logout, isAuthenticated, user, isLoading, error } = useAuth0();
  return (
    <section className='login section_padding flex_center min-vh-100'>
      {/* {error && <h1>error... something went wrong... </h1>}
      {!error && isLoading && <CompLoader />}
      {!error && !isLoading && !user && <button className='btn btn-warning' onClick={() => loginWithPopup({
      appState: {
        returnTo: "http://localhost:3000/#/Login",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    })}>logIn</button>} */}
      {
        !error && !isLoading && user && (
          <>
          <button className='btn btn-danger' onClick={() => logout()}>logout</button>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          </>
        )
      }
    </section>
  )
}

export default Login

    {/* <div className="login_cont">
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
      </div> */}