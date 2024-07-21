import React from 'react';
import Slider from 'react-slick';
import './testimonial.css';
import staff from "../../image/staff.jpg"
import healthcare from "../../image/healthcare.jpg"
import biotech from "../../image/biotech.jpg"

const testimonials = [
  {
    id: 1,
    name: 'Staffing Company',
    text: 'By moving to AWS with assistance from Webrass,the clients recieved AWS Enterprise level support for a lower cost',
    image: staff
  },
  {
    id: 2,
    name: 'A Healthcare Provider',
    text: 'Webrass and AWS assistance implements a healthcare sciences-focused data capture and data analytics solution fully managed by Webrass',
    image: healthcare
  },
  {
    id: 3,
    name: 'A Biotech Company',
    text: 'Leveraged Webrass advanced services to assess,design, and implemnt an overall Devops process while using Webrass Foundational and Webrass operations',
    image:biotech
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
      <h2 className="testimonial-title">Case Studies</h2>
      <span className="block w-28 mx-auto h-2 skew-x-[10deg] bg-red-500"></span>
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
