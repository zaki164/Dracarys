import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Summary.css';

const Summary = () => {
  const summref = useRef();
  useEffect(() => {
    let myps = [...summref.current.children];
    let i = 0;
    setInterval(() => {
      myps.forEach(ele => {
        ele.classList.remove('active');
      })
      myps[i].classList.add('active');
      i++;
      if (i === myps.length) {
        i = 0;
      }
    }, 5000);
    // return () => {
    //   clearInterval(interval)
    //   console.log('return')
    // }
  }, [])
  return (
    <div className="summary" ref={summref}>
      <p>Summer Sale Discount Off 50%, <Link to="/">Shop Now</Link></p>
      <p className='active'>The Dracarys Themes.</p>
      <p>We are Beside you, <Link to="/">Search For Us</Link></p>
      <p>Made With Love</p>
    </div>
  )
}

export default Summary