import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);

  const items = [
    {
      title: "Pay Contacts",
      description: "Transfer money just by typing phone numbers!"
    },
    {
      title: "Book Movie Tickets",
      description: "Book movie tickets online!"
    }
  ];

  const firstPosition = 0;
  const lastPosition = items.length - 1;

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(autoPlay);
  }, [active]);

  const startAutoPlay = () => {
    clearInterval(autoPlay);
    setAutoPlay(setInterval(() => {
      nextSlide();
    }, 3000));
  }

  const nextSlide = () => {
    setActive(active + 1 > lastPosition ? 0 : active + 1);
  }

  const prevSlide = () => {
    setActive(active - 1 < firstPosition ? lastPosition : active - 1);
    clearInterval(autoPlay);
    startAutoPlay();
  }

  const goToSlide = (index) => {
    setActive(index);
    startAutoPlay();
  }

  return (
    <section className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === active ? 'active' : ''}`}>
            <div className="content">
              <h2>{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>&lt;</button>
        <button id="next" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="indicators">
        <div className="number">0{active + 1}</div>
        <ul>
          {items.map((_, index) => (
            <li
              key={index}
              className={index === active ? 'active' : ''}
              onClick={() => goToSlide(index)}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Carousel;
