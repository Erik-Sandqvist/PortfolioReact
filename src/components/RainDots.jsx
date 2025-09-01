// jsx
import { useEffect, useMemo, useRef, useState } from "react";

export const RainDots = ({
  count = 300,           // mängd som innan
  color = "secondary",     
  minSize = 4.2,         // px
  maxSize = 4.5,         // px
  repelRadius = 140,     // px
  repelStrength = 30000, // kraft
  gravity = 150,        // px/s^2
  wind = 5,              // px/s^2
  maxSpeed = 150,       // px/s clamp
}) => {
  const [dots, setDots] = useState([]);
  const nodesRef = useRef([]);
  const dropsRef = useRef([]);
  const rafRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999, r: repelRadius });
  const sizeRange = useMemo(() => [minSize, maxSize], [minSize, maxSize]);

  useEffect(() => {
    // init statiska egenskaper (storlek, opacitet)
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        size: minSize + Math.random() * (maxSize - minSize),
        opacity: 0.5 + Math.random() * 0.5,
      });
    }
    setDots(arr);
  }, [count, sizeRange]);

  useEffect(() => {
    if (!dots.length) return;

    const W = () => window.innerWidth || document.documentElement.clientWidth || 0;
    const H = () => window.innerHeight || document.documentElement.clientHeight || 0;

    const rand = (a, b) => a + Math.random() * (b - a);

    const spawn = (d, mode = 'top') => {
      d.x = rand(0, W())
      if (mode === 'top') {
        d.y = rand(-H() * 0.3, -10)       // ovanför skärmen
      } else if (mode === 'any') {
        d.y = rand(0, H())                // fritt i viewporten
      } else if (mode === 'band') {
        d.y = rand(-H() * 0.5, H() * 0.5) // bredare band över/inom viewport
      }
      d.vx = rand(-40, 40)
      d.vy = rand(300, 900)
    };

    // init fysik-partiklar
    dropsRef.current = dots.map(() => {
      const d = { x: 0, y: 0, vx: 0, vy: 0 }
      spawn(d, 'any') // sprid initialt över hela höjden
      return d
    });

    let last = performance.now();

    const clampSpeed = (d) => {
      const v2 = d.vx * d.vx + d.vy * d.vy;
      const m = Math.sqrt(v2);
      if (m > maxSpeed) {
        const s = maxSpeed / Math.max(m, 1e-6);
        d.vx *= s; d.vy *= s;
      }
    };

    const reflectIfInside = (d) => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const R = mouseRef.current.r;
      const dx = d.x - mx;
      const dy = d.y - my;
      const dist2 = dx * dx + dy * dy;
      if (dist2 > R * R) return;
      const dist = Math.max(Math.sqrt(dist2), 1e-4);
      const nx = dx / dist;
      const ny = dy / dist;

      // reflektionsimpuls om droppen rör sig mot pekaren
      const dot = d.vx * nx + d.vy * ny;
      if (dot < 0) {
        const e = 0.8;
        d.vx = d.vx - (1 + e) * dot * nx;
        d.vy = d.vy - (1 + e) * dot * ny;
      }
      // repulsionskraft (inverse square)
      const force = repelStrength / (dist2 + 100);
      d.vx += nx * force * dt;
      d.vy += ny * force * dt;
    };

    let dt = 0;
    const tick = (now) => {
      dt = Math.min((now - last) / 1000, 0.033);
      last = now;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const d = dropsRef.current[i];

        // krafter
        d.vy += gravity * dt;
        d.vx += wind * dt;

        reflectIfInside(d);

        // integrera
        d.x += d.vx * dt;
        d.y += d.vy * dt;

        clampSpeed(d);

        // wrap/reset
        if (d.y > H() + 20 || d.x < -20 || d.x > W() + 20) {
          // 30% chans att spawna var som helst för bättre y-spridning
          spawn(d, Math.random() < 0.3 ? 'any' : 'top')
        }

        // render till DOM
        const el = nodesRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${d.x}px, ${d.y}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const onResize = () => {
      // inget särskilt, vi använder window dimensions direkt
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [dots, gravity, wind, maxSpeed, repelStrength, repelRadius]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-1">
      {dots.map((dot, i) => (
        <span
          key={i}
          ref={(el) => (nodesRef.current[i] = el)}
          style={{
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
            transform: "translate3d(0, -10px, 0)",
          }}
          className={`absolute top-0 left-0 rounded-full bg-${color} shadow-[0_0_2px_2px] shadow-${color}`}

        />
      ))}
    </div>
  );
};