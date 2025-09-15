import React from 'react'
import "./Findout.css";
const Findout = () => {
  return (

    <section className="findout">
      <div className="simplicity-container">
        <div className="simplicity-box">
          <p className='weretext'>We’re all about<br /> simplicity, speed<br /> and results</p>

          <p className='ourunique'>Our unique approach combines pre-designed templates with customisation options to match your brand’s unique identity. This means you get a beautifully designed, fully responsive, and optimised website faster than ever, with the confidence that everything is crafted with intention and expertise.<br />
            We’re not just building websites; we’re powering up your online presence <span className='focus'>so you can focus on what you do best.</span></p>

          <div className="simplicity-buttons">
            <button className="btn-purple">Find Out More</button>
            <button className="btn-green">Talk To Us</button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Findout