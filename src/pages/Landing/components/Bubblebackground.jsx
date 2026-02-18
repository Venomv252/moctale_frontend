import { useEffect, useRef } from "react";

const BubbleBackground = () => {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const BUBBLE_COUNT = 5;
    const RADIUS = window.innerWidth < 768 ? 60 : 120;

    // ---- Create bubble without overlap ----
    function createBubble(existing) {
      let x, y;
      let safe = false;

      while (!safe) {
        x = Math.random() * (canvas.width - 2 * RADIUS) + RADIUS;
        y = Math.random() * (canvas.height - 2 * RADIUS) + RADIUS;
        safe = true;

        for (const b of existing) {
          const dx = x - b.x;
          const dy = y - b.y;
          if (dx * dx + dy * dy < (RADIUS + b.r) ** 2) {
            safe = false;
            break;
          }
        }
      }

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        r: RADIUS
      };
    }

    bubblesRef.current = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubblesRef.current.push(createBubble(bubblesRef.current));
    }

    // ---- Collision with separation ----
    function collide(b1, b2) {
      const dx = b2.x - b1.x;
      const dy = b2.y - b1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const minDist = b1.r + b2.r;

      if (dist < minDist && dist !== 0) {
        const overlap = minDist - dist;
        const nx = dx / dist;
        const ny = dy / dist;

        // Separate
        b1.x -= nx * overlap / 2;
        b1.y -= ny * overlap / 2;
        b2.x += nx * overlap / 2;
        b2.y += ny * overlap / 2;

        // Swap velocity
        [b1.vx, b2.vx] = [b2.vx, b1.vx];
        [b1.vy, b2.vy] = [b2.vy, b1.vy];
      }
    }

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bubbles = bubblesRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];

        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r <= 0 || b.x + b.r >= canvas.width) b.vx *= -1;
        if (b.y - b.r <= 0 || b.y + b.r >= canvas.height) b.vy *= -1;

        for (let j = i + 1; j < bubbles.length; j++) {
          collide(b, bubbles[j]);
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(176, 72, 255, 0.45)";
        ctx.shadowBlur = 70;
        if(window.innerWidth < 768) ctx.shadowBlur = 0;
        ctx.shadowColor = "rgba(143, 68, 240, 0.9)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default BubbleBackground;
