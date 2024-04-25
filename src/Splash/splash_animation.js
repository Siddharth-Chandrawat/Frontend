import React, { useEffect } from 'react';

function SplashAnimation() {
  useEffect(() => {
    const logoSpan = document.querySelectorAll(".logo");

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          span.classList.remove("active");
          span.classList.add("fade");
        });
      }, 2000);

      setTimeout(() => {
        const intro = document.querySelector(".splash-screen");
        intro.style.top = "-100vh";
      }, 2300);
    }, 0);
  }, []);

  return null;
}

export default SplashAnimation;
