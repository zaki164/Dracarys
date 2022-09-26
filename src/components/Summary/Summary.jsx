import { useRef, useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import './Summary.css';

const Summary = () => {
  const summref = useRef();
  // const route = useNavigate();
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
  })
  return (
    <>
      <div className="summary" ref={summref}>
        <p>Summer Sale Discount Off 50%, <a href='#/'>Shop Now</a></p>
        {/* <p>Summer Sale Discount Off 50%, <span onClick={() => route('/')}>Shop Now</span></p> */}
        <p className='active'>The Dracarys Themes.</p>
        <p>We are Beside you, <a href='#/'>Search For Us</a></p>
        {/* <p>We are Beside you, <span onClick={() => route('/')}>Search For Us</span></p> */}
        <p>Made With Love</p>
      </div>
    </>
  )
}

export default Summary