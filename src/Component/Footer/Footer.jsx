import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='footer' id='talktous'>
                <div>
                    <p className='lettalk'>Let’s talk</p>
                    <p className='footertext'>
                        If you have any questions or would like to get started, get in touch using our form and a member of our team will be in touch as soon as possible.<br />
                        Alternatively, you can reach us via:
                    </p>
                    <div className='emaildiv'>
                        <img src='/Images/email.svg' alt='' className='neweewewewe' />
                        <p className='emailtextttt'>info@greenlight-digital.co.uk</p>
                    </div>
                    <div className='emaildiv'>
                        <img src='/Images/phone.svg' className='neweewewewe' alt='' />
                        <p>01234 567 890</p>
                    </div>
                    <div className='socialiconssssssss'>
                        <img src='/Images/facebook.svg' className='neweewewewe' style={{ cursor: "pointer" }} alt='' />
                        <img src='/Images/ld.svg' alt='' className='neweewewewe' style={{ cursor: "pointer" }} />
                        <img src='/Images/fotterinsta.svg' alt='' className='neweewewewe' style={{ cursor: "pointer" }} />
                    </div>
                </div>

                <div className='fotterright'>
                    <div className='inputdivfooter'>
                        <div>
                            <p className='nametext'>Name</p>
                            <input type='text' className='inputtfotter' />
                        </div>
                        <div>
                            <p className='nametext'>Email</p>
                            <input type='text' className='inputtfotter' />
                        </div>
                        <div>
                            <p className='nametext'>Telephone</p>
                            <input type='text' className='inputtfotter' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='nametext'>Message</p>
                            <textarea type='text' className='inputtfottertext' />
                        </div>
                        <div className='submitdiv'>        <button className='sendbtn'>Submit</button></div>

                    </div>
                </div>



            </div>
            <div >

                <div className="herotopdivnewherojdfh padd" style={{
                    backgroundColor: "#012221", margin: "0px",
                    display: "flex", flexDirection: "row", justifyContent: "space-between",
                }}>
                    <img src='/Images/logogreen.svg' className="bottomlogo" alt='' />
                    <div
                        style={{ display: "flex", flexDirection: "column-reverse", gap: "34px", alignItems: "center" }}
                    >
                        <div className="herotopdivnew myfjsdbfk">
                            <div className="emaildivnewhero">
                                <img src="/Images/eeeemail.svg" alt="" />
                                <p className="infoemail">info@greenlight-digital.co.uk</p>
                            </div>
                            <div className="emaildivnewhero">
                                <img src="/Images/phoooone.svg" alt="" />
                                <p className="infoemail">01234 567 890</p>
                            </div>
                            <div className="socialiconsnewhero">
                                <img src="/Images/ffb.svg" style={{cursor:"pointer"}}  alt="" />
                                <img src="/Images/lln.svg" style={{cursor:"pointer"}}  alt="" />
                                <img src="/Images/iinsta.svg" style={{cursor:"pointer"}}  alt="" />
                            </div>
                        </div>
                        <div className="heroresponsivenavbarnewee myfjsdbfk">
                            <p className="webbbbbbbb" style={{ fontFamily: "HeroNew", cursor: 'pointer' }} onClick={() => {
                                const element = document.getElementById('ourwebsite');
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>Our websites</p>
                            <p className="webbbbbbbb" style={{ fontFamily: "HeroNew", cursor: 'pointer' }} onClick={() => {
                                const element = document.getElementById('abouts');
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>About Us</p>
                            <p className="webbbbbbbb" style={{ fontFamily: "HeroNew", cursor: 'pointer' }} onClick={() => {
                                const element = document.getElementById('reviews');
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>Giving Back</p>


                            <p className="webbbbbbbb" style={{ fontFamily: "HeroNew", cursor: 'pointer' }} onClick={() => {
                                const element = document.getElementById('reviews');
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>Reviews</p>
                            <p className="webbbbbbbb" style={{ fontFamily: "HeroNew", cursor: 'pointer' }} onClick={() => {
                                const element = document.getElementById('talktous');
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>Talk to us</p>

                            {/* <button className="talktousbtn">Talk to us</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer