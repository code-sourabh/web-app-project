import React from 'react';
import Slider from 'react-slick';
import './testimonial.css';
import guy from '../../image/guy.jpg'

const testimonials = [
  {
    id: 1,
    name: 'Silviu Hinta',
    text: 'BranchUp, praised Webrass for timely remediating cloud issues using AWS Well-Architected Framework.',
    image: guy
  },
  {
    id: 2,
    name: 'Harmit Singh',
    text: 'Bolttech, lauded Webrass for scaling engineering talent and deliveries to support their mission.',
    image: guy
  },
  {
    id: 3,
    name: 'Roeland Verhamme',
    text: ' Verhamme, Expect Me, praised Webrass for crucial support in talent acquisition and strategic scaling.',
    image: guy
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-red-500"></span>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
