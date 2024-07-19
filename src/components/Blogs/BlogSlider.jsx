import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogSlider.css'; // Make sure to create this CSS file

const slides = [
    {
        title: "Achieving An Ideal Cloud Migration",
        
        excerpt: "Cloud migration can seem challenging, and in some cases, it might pose a high-risk venture. But this is only true when an organization doesn’t have the right cloud partner or a fitting solution bespoke to their business objectives. The pandemic has intensified the gravity of being future-ready, data-driven, and hosted in virtual environments for businesses that look to compete at the forefront of the digital world...",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqSW-e72sMuIJ-PyRdLXE-l94SYNOJ4htlVukek78wAgjeC7K7Vm3K8u04BOX-Mq-HGw&usqp=CAU',
      },
      {
        title: "HHow Cloud Adoption is Revolutionizing the Retail Industry",
        
        excerpt: "The retail sector has always faced significant challenges in the past. Data security, inventory management, global expansion, and the inability to meet growing customer expectations have been the prominent obstacles for most retailers. To address all these issues in one go, cloud technology emerged as a silver bullet for retailers. It provided centralized access to data, enabling retailers to offer improved customer experiences and adapt swiftly to market changes, competition, and scalability demands. In this post, we will take a look at how the cloud is revolutionizing the retail sector in the present day and what retail businesses can do to extract the best out of this powerful technology. ...",
        image: 'https://joshsoftware.com/wp-content/uploads/2023/01/Powering-Retail-with-Cloud-Computing-conclusion-2.jpg',
      },
      {
        title: "Top Benefits of Data Virtualization for Your Business",
        
        excerpt: "Data virtualization enables businesses to decouple the database layer between the storage and application layers. It works similar to a hypervisor but for the database. This layer lies between the database and the operating system. While many organizations use data visualizations for their systems, others are skeptical...",
        image: 'https://miro.medium.com/v2/resize:fit:894/1*-ci3Jq-5fDyACkPl87JGWQ.jpeg',
      }
];

const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleReadMore = () => {
    navigate('/about')
    window.scrollTo(0,0);
  };

  return (
    <div className="blog-slider">
      <div className="blog-slider__banner">
        <h1>Webrass Blogs</h1>
        <span className="underline"></span>
      </div>

      <div className="blog-slider__container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`blog-slider__slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="blog-slider__image">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="blog-slider__content">
              <h2>{slide.title}</h2>
              
              <p className="blog-slider__excerpt line-clamp-5">{slide.excerpt}</p>
              <button onClick={handleReadMore} className="blog-slider__button">
                Read More
              </button>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="blog-slider__nav blog-slider__nav--prev">&#8249;</button>
        <button onClick={nextSlide} className="blog-slider__nav blog-slider__nav--next">&#8250;</button>

        <div className="blog-slider__indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`blog-slider__indicator ${index === currentSlide ? 'active' : ''}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;