import React from 'react'
import './Rating.css'
import { IoIosStar } from "react-icons/io";

const Rating = () => {
  return (
    <div className='ratings'>
      <div className="left">
        <h3>"Great Product <br /> Exceelent service."</h3><br />
        <p id='bold'>Mr. George Mathew</p>
        <p>GM / Komal Hotel</p><br /><br />
        <p>Hospitality, 200-500 Employess <br /> Used the software for: 2+ Years <br />Reviewer source: <br />Source: Software advice</p>
      </div>
      <div className="right">
        <div className="up">
            <div className="lhs">
                <h1>5/5</h1>
                <div className="star">
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                </div>
                <p>Overall</p>
            </div>
            <div className="rhs">
                <div className="review-type">
                    <h3>Easy of use</h3>
                    <div className="star">
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                    </div>
                </div>
                <div className="review-type">
                    <h3>Customer support</h3>
                    <div className="star">
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                    </div>
                </div>
                <div className="review-type">
                    <h3>Functionality</h3>
                    <div className="star">
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar id='gray-star'/>
                    </div>
                </div>
                <div className="review-type">
                    <h3>Value for money</h3>
                    <div className="star">
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                     <IoIosStar/>
                    </div>
                </div>
            </div>
        </div>
        <div className="down">
            <div className="logo">
                <img src="https://th.bing.com/th/id/OIP.V91Cw6i44RdEK89Hmzfv2AHaHa?rs=1&pid=ImgDetMain" alt="" width={150} height={100}/>
            </div>
            <div className="overall-review">
                <h3>Likelihood to recommend</h3>
                <div className="number">
                    <p>0</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rating
