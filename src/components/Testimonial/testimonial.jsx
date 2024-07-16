import React from 'react';
import Slider from 'react-slick';
import './testimonial.css';
import guy from '../../image/guy.jpg'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'This is an amazing service! Highly recommend to everyone.',
    image: guy
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'A wonderful experience from start to finish.',
    image: guy
  },
  {
    id: 3,
    name: 'Michael Johnson',
    text: 'Exceptional quality and fantastic customer service.',
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
