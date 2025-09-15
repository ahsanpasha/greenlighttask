import React from "react";
import "./GivingBack.css";
const GivingBack = () => {
  const givingBackData = [
    {
      img: "/Images/Group 433.png",
      title: "Family in Action",
      desc: "We donate 1% of our profits to vital charities, keeping families in tact.",
    },
    {
      img: "/Images/f790ae35-c9d4-4b4b-a6a2-564d04d17e9c.png",
      title: "Learning Support",
      desc: "We love and employ young adults with skills to create workshops, design visuals, and earn meaningful income.",
    },
    {
      img: "/Images/AdobeStock_232517445.png",
      title: "Community Support",
      desc: "We keep website free for businesses in need, ensuring they can trade and operate during challenging times.",
    },
  ];

  const testimonials = [
    {
      review:
        "Green Light Digital took my website to the next level in record time! The design options were fantastic, and the customization process was so smooth. Now, my site looks polished and professional, and I didn’t have to break the bank. Highly recommend!",
      name: "John Doe",
      role: "- Alex P, Small Business Owner",
    },
    {
      review:
        "The Green Light team is incredible! They guided me through every step of the process, from selecting a template to launching my site. I now have a beautiful, functional website that perfectly represents my brand. Couldn’t be happier!",
      name: "Sarah Khan",
      role: "- Jenna R, Small Business Owner",
    },
    {
      review:
        "Working with Green Light Digital was the best decision for my business. They made web design easy, fast, and affordable, while still giving me a custom feel. My site is stylish and efficient, and the customer support was outstanding!",
      name: "David Smith",
      role: "- Ray T, Small Business Owner",
    },
  ];

  const socials = [
    // { img: "/Images/Group 440.png" },
    { img: "/Images/BUSINESS.png" },
    { img: "/Images/BUSINESS.png" },

    { img: "/Images/Group 441.png" },
    { img: "/Images/sign-mockupmockyyys-mint.png" },
  ];

  return (
    <div className="greenlight-sections" id='reviews'>
      {/* Giving Back */}
      <section >
        <div className="giving-back-header">
          <div className="giving-back-texts">
            <h2 className="giving-back-title">Greenlight giving back</h2>
            <p className="giving-back-subtext">
              First and foremost, we are business, but we can also do our bit to be the good guys! Here’s how we’re supporting the local community.
            </p>
          </div>
          <button className="giving-back-btn">Find Out More</button>
        </div>

        <div className="giving-back-cards">
          {givingBackData.map((item, i) => (
            <div className="giving-back-card" key={i}>
              <img src={item.img} alt={item.title} className="giving-back-img" />
              <h3 className="giving-back-card-title">{item.title}</h3>
              <p className="giving-back-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonialssssss">
        <div className='our-websites mynewwwww'>
          <div className='our-websitesfirst'>
            <p className='giving-back-title'>
              What our clients say
            </p>
            <div className='our-websitesfirstimg'>
              <img src='/Images/arrow.svg' className="arrowwwwbb" alt='' />
              <img src='/Images/arrow2.svg' className="arrowwwwbb" alt='' />
            </div>
          </div>
          <button className='giving-back-btn' style={{ backgroundColor: "#240D4B", color: "white", width: "239px" }}>
            Read More Reviews
          </button>
        </div>
        <div className="giving-back-cards">
          {testimonials.map((item, i) => (
            <div className="client-card" key={i}>
              <img src="/Images/Group 434.png" className="star" alt="" />
              <p className="client-name">{item.review}</p>
              <p className="client-role mytoppadding">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div cl>
        <div className="followsocial">
          <p className="giving-back-title">
            Follow us on social media
          </p>
          <div className="iconsdiv">
            <img src="/Images/fb.svg"  className="fvvvvv" alt="" />
            <img src="/Images/linkedin.svg" alt="" className="fvvvvv" />
            <img src="/Images/insta.svg" alt="" className="fvvvvv" />
          </div>
        </div>
        <div className="giving-back-cards mdsfhsdkjhfksdjf">
          {socials.map((item, i) => (
            <img src={item.img} className="imagesmalll" alt="" key={i} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default GivingBack;