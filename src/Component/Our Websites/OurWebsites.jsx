import React, { useRef } from 'react';
import "./OurWebsites.css";

const OurWebsites = () => {
  const scrollRef = useRef(null);

  const websites = [
    {
      id: 1,
      img: "/Images/Web 1920 – 2.png",
      title: "Cagney’s",
      subtitle: "Booking System | Hospitality"
    },
    {
      id: 2,
      img: "/Images/Fluid Power Components.png",
      title: "FPC Solutions",
      subtitle: "E-Commerce | Industrial "
    },
    {
      id: 3,
      img: "/Images/Screenshot 2024-10-28 at 13.11.14.png",
      title: "Mamma Post Natal",
      subtitle: "Brochure | Fitness"
    },
    {
      id: 4,
      img: "/Images/Fluid Power Components.png",
      title: "Inorlo",
      subtitle: "E-Commerce | Technology"
    }
  ];

  const scroll = (direction) => {
    const scrollAmount = 300; 
        if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='our-websitesmain' id='ourwebsite'>
      <div className='our-websites'>
        <div className='our-websitesfirst'>
          <p className='our-websitesfirsttitle'>Our Websites</p>
          <div className='our-websitesfirstimg'>
            <img
              src='/Images/arrow.svg'
              alt='left arrow'
              className='arrowwwwbb'
              onClick={() => scroll('left')}
              style={{ cursor: 'pointer' }}
            />
            <img
              src='/Images/arrow2.svg'
              alt='right arrow'
              className='arrowwwwbb'
              onClick={() => scroll('right')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <button className='our-websitesbtn'>See more websites</button>
      </div>

      <div className='our-websitescontainer' ref={scrollRef}>
        {websites.map((site) => (
          <div className='our-websitessecond' key={site.id}>
            <img src={site.img} className='imageweb' alt={site.title} />
            <p className='cagneytext'>{site.title}</p>
            <p className='secondtext'>{site.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWebsites;
