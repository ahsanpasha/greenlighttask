import React from 'react'
import './Expect.css'
const Expect = () => {
    return (
        <div className='expect-container'>

            <div className='expect-section'>
                <p className='expect-title'>
                    HERE’S WHAT TO EXPECT:
                </p>
                <div className='expect-card'>
                    <img src="/Images/fast.svg" className='fastttt' alt="" />
                    <div>
                        <p className='fast-text'>Fast Turnarounds</p>
                        <p className='getwebsiteeee'>Get your website live in record time without compromising on quality.</p>
                    </div>
                </div>
                 <div className='expect-card'>
                    <img src="/Images/wallet.svg" className='fastttt' alt="" />
                    <div>
                        <p className='fast-text'>Affordable options</p>
                        <p className='getwebsiteeee'>High-end designs at prices that won’t break the bank.</p>
                    </div>
                </div>
                 <div className='expect-card neweeeeeeeee' >
                    <img src="/Images/eye.svg" alt="" className='fastttt' />
                    <div>
                        <p className='fast-text'>Clear and honest deliverables</p>
                        <p className='getwebsiteeee'>No jargon, no surprises—just exactly what you need.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expect