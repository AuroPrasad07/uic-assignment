import React from 'react'
import './Hotels.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const Hotels = () => {
  return (
    <div className='hotels'>
      <div className="img-one">
        <div className="about-hotel">
            <p id='hotel-name'>Beach Resort</p>
            <p>Kovalam, Kerala</p>
            <div className="btn">
                <button>Case study</button>
                <MdKeyboardArrowRight className='arrow-icon'/>
            </div>
        </div>
      </div>
      <div className="img-two">
      <div className="about-hotel left">
            <p id='hotel-name'>Beach Resort</p>
            <p>Goa</p>
            <div className="btn">
                <button>Case study</button>
                <MdKeyboardArrowRight className='arrow-icon'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels
