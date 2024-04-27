import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () =>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform =`translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform =`translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li><div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div><h3>Vinit Kumar</h3>
                    <span>TCS, India</span>
                    </div>
                </div>
                <p>Transformative experience, top-notch faculty!</p>
            </div>
            </li>
            <li><div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div><h3>Rajesh Kumar</h3>
                    <span>TCS, India</span>
                    </div>
                </div>
                <p>Amazing opportunities and lifelong friendships.</p>
            </div>
            </li>
            <li><div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div><h3>Rahul Kumar</h3>
                    <span>TCS, India</span>
                    </div>
                </div>
                <p>Incredible resources for academic and personal growth.</p>
            </div>
            </li>
            <li><div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div><h3>Mohit Kumar</h3>
                    <span>Microsoft, India</span>
                    </div>
                </div>
                <p>A hub of innovation and creativity.</p>
            </div>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials
