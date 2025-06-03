import { useEffect, useState } from "react";

export const RainDots = ({ count = 40 }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        left: Math.random() * 100, // procent
        delay: Math.random() * 2, // sekunder
        duration: 2 + Math.random() * 2, // sekunder
        size: 2 + Math.random() * 4, // px
        opacity: 0.5 + Math.random() * 0.5,
      });
    }
    setDots(arr);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {dots.map((dot, i) => (
       <span
       key={i}
       style={{
         left: `${dot.left}%`,
         animationDelay: `${dot.delay}s`,
         animationDuration: `${dot.duration}s`,
         width: dot.size,
         height: dot.size,
         opacity: dot.opacity,
         background: "#D3B60A",
       }}
       className="absolute top-0 rounded-full animate-rain-dot rain-dot-glow"
     />
      ))}
    </div>
  );
};