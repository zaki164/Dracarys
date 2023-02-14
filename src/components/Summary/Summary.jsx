import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Summary.scss';

const Summary = () => {
  const { user } = useAuth0();
  const summref = useRef();
  useEffect(() => {
    let myps = [...summref.current.children];
    let i = 0;
    const interval = setInterval(() => {
      myps.forEach(ele => {
        ele.classList.remove('active');
      })
      myps[i].classList.add('active');
      i++;
      if (i === myps.length) {
        i = 0;
      }
    }, 5000);
    return () => {
      clearInterval(interval)
    }
  }, [user])
  return (
    <div className="summary" ref={summref}>
      {user && <p>Welcome <span>{user.name}</span>, We have all you need </p> }
      <p>Summer Sale Discount Off 50%, <Link to="/">Shop Now</Link></p>
      <p className='active'>The Dracarys Themes.</p>
      <p>We are Beside you, <Link to="/">Search For Us</Link></p>
      <p>Made With Love</p>
    </div>
  )
}

export default Summary