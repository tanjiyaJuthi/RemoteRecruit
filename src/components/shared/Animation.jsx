import { useEffect, useRef, useState } from "react";

const Animation = ({ children, className = "", direction = "up" }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animations = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all
        duration-700
        ease-out
        ${
          show
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${animations[direction]} opacity-0`
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Animation;