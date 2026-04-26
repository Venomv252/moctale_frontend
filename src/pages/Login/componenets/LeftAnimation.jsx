import React, { useEffect, useRef } from "react";

const images = [
  "https://www.moctale.in/media/PC/PC1.jpg",
  "https://www.moctale.in/media/PC/PC2.jpg",
  "https://www.moctale.in/media/PC/PC3.jpg",
  "https://www.moctale.in/media/PC/PC4.jpg",
  "https://www.moctale.in/media/PC/PC5.jpg",
  "https://www.moctale.in/media/PC/PC6.jpg",
  "https://www.moctale.in/media/PC/PC7.jpg",
  "https://www.moctale.in/media/PC/PC8.jpg",
  "https://www.moctale.in/media/PC/PC9.jpg",
  "https://www.moctale.in/media/PC/PC10.jpg",
  "https://www.moctale.in/media/PC/PC11.jpg",
  "https://www.moctale.in/media/PC/PC12.jpg",
  "https://www.moctale.in/media/PC/PC13.jpg",
  "https://www.moctale.in/media/PC/PC14.jpg",
  "https://www.moctale.in/media/PC/PC15.jpg",
  "https://www.moctale.in/media/PC/PC16.jpg",
  "https://www.moctale.in/media/PC/PC17.jpg",
  "https://www.moctale.in/media/PC/PC18.jpg",
  "https://www.moctale.in/media/PC/PC19.jpg",
  "https://www.moctale.in/media/PC/PC20.jpg",
  "https://www.moctale.in/media/PC/PC21.jpg",
  "https://www.moctale.in/media/PC/PC22.jpg",
  "https://www.moctale.in/media/PC/PC23.jpg",
  "https://www.moctale.in/media/PC/PC24.jpg",
  "https://www.moctale.in/media/PC/PC25.jpg",
  "https://www.moctale.in/media/PC/PC26.jpg",
  "https://www.moctale.in/media/PC/PC27.jpg",
  "https://www.moctale.in/media/PC/PC28.jpg",
  "https://www.moctale.in/media/PC/PC29.jpg",
  "https://www.moctale.in/media/PC/PC30.jpg",
];

const Column = ({ direction = "down", speed = 1 }) => {
  const ref = useRef();

  useEffect(() => {
    let position = 0;

    const animate = () => {
      if (!ref.current) return;

      const height = ref.current.scrollHeight / 2;

      // random start ONCE
      if (position === 0) {
        position = Math.random() * height;
      }

      position += direction === "down" ? speed : -speed;

      // seamless loop
      if (position >= height) position -= height;
      if (position <= 0) position += height;

      ref.current.style.transform = `translateY(${-position}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, [direction, speed]);

  const repeatedImages = Array(12).fill(images).flat();

  return (
    <div className="relative h-full overflow-hidden w-1/3">
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={ref}
          className="flex flex-col will-change-transform transform-gpu justify-around gap-2"
        >
          {[...repeatedImages, ...repeatedImages].map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-[2/3] my-4 rounded-lg overflow-hidden shadow-lg opacity-90"
            >
              <img
                src={src}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeftAnimation = () => {
  return (
    <div className="w-full h-full flex gap-6 px-4 overflow-hidden bg-black">
      <Column direction="down" speed={2} />
      <Column direction="up" speed={2} />
      <Column direction="down" speed={2} />
    </div>
  );
};

export default LeftAnimation;