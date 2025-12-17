import { useEffect, useRef, useState } from "react";

export const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      // Smooth follow with easing
      const ease = 0.15;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      cursor.style.transform = `translate(${cursorX - 150}px, ${cursorY - 150}px)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `radial-gradient(circle, 
          hsl(195 100% 50% / 0.08) 0%, 
          hsl(195 100% 50% / 0.02) 40%, 
          transparent 70%
        )`,
        filter: "blur(1px)",
      }}
    />
  );
};
