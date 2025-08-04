"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  gravity: number;
}

export function MouseTrailEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle colors
    const colors = ['#34FFB4', '#3CE3FF'];

    // Create explosion of particles on click
    const createExplosion = (x: number, y: number) => {
      const particleCount = Math.random() * 8 + 6; // 6-14 particles
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const velocity = Math.random() * 4 + 2; // Random velocity between 2-6
        const size = Math.random() * 6 + 3; // 3px to 9px
        const life = Math.random() * 30 + 40; // ~1.3 seconds at 60fps
        
        const particle: Particle = {
          x: x + (Math.random() - 0.5) * 10, // Small spread around click point
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          size,
          opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
          color: colors[Math.floor(Math.random() * colors.length)],
          life,
          maxLife: life,
          gravity: Math.random() * 0.02 + 0.01, // Subtle gravity effect
        };
        
        particlesRef.current.push(particle);
      }
    };

    // Click event listener
    const handleClick = (e: MouseEvent) => {
      createExplosion(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Apply physics
        particle.vy += particle.gravity; // Gravity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Air resistance
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Update life and opacity
        particle.life--;
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = lifeRatio * 0.4;

        // Draw particle if still alive
        if (particle.life > 0) {
          ctx.save();
          
          // Apply blur effect
          ctx.filter = 'blur(4px)';
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }

        return particle.life > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="mouseTrailCanvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}