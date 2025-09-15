import React from 'react'
import "./GetWebsite.css";
const GetWebsite = () => {
  return (
    <div className='getwebsite' id='abouts'>
      <img src='/Images/Group 428.png' alt='' className='getwebsiteimg' />
      <div className='getwebsitemainnnnnn'>
        <p className='getwebsitetext'>
          Get your website in<br />
          <span className='getwebsitetext1'>three easy steps</span>
        </p>
        <div className='getwebsitedivmain'>
          <div className='getwebsitediv'>
            <div className='getwebsiteimgnew'>
              <img src='/Images/arrowselect.svg' className='arrowselectt' alt='' />
            </div>
            <div>
              <p className='selecttext'>
                Select
              </p>
              <p className='selecttextdesc'>
                From our library of professional-grade templates,
              </p>
            </div>
          </div>
          <img src='/Images/Line 5.png' alt='' className='lineee' />
          <div className='getwebsitediv'>
            <div className='getwebsiteimgnew'>
              <img src='/Images/setting.svg' alt='' className='arrowselectt' />
            </div>
            <div>
              <p className='selecttext'>
                Customise
              </p>
              <p className='selecttextdesc'>
                With brand-specific colors, fonts, and images to <br />
                make the site uniquely yours.              </p>
            </div>
          </div>
          <img src='/Images/Line 5.png' alt='' className='lineee' />

          <div className='getwebsitediv'>
            <div className='getwebsiteimgnew'>
              <img src='/Images/launch.svg' alt='' className='arrowselectt' />
            </div>
            <div>
              <p className='selecttext'>
                Launch
              </p>
              <p className='selecttextdesc'>
                A website that’s ready to go live and drive results.              </p>
            </div>
          </div>

          <div className='getwebsitedivbtnnnnnn'>
            <img src='/Images/Path 300.png' alt='' className='lineee1333' />
            <button className='getwebsitetalkbtnnn'>
              Talk to us
            </button>
          </div>
          <img src='/Images/Group 364.png' className='grupppp' alt='' />
        </div>
      </div>
    </div>
  )
}

export default GetWebsite