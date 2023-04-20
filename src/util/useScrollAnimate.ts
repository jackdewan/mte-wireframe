import { useEffect } from "react";

export const useScrollAnimate = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.6,
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
};
