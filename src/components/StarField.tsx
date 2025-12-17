import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.02 + 0.01,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
        const currentOpacity = star.opacity * (0.5 + twinkle * 0.5);

        // Parallax based on mouse position
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * star.speed * 0.05;
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * star.speed * 0.05;

        const drawX = star.x + parallaxX;
        const drawY = star.y + parallaxY;

        // Draw star with glow
        const gradient = ctx.createRadialGradient(
          drawX, drawY, 0,
          drawX, drawY, star.size * 3
        );
        gradient.addColorStop(0, `hsla(195, 100%, 70%, ${currentOpacity})`);
        gradient.addColorStop(0.5, `hsla(195, 100%, 60%, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};
