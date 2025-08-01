"use client";

import { useEffect, useRef } from 'react';

export function MouseTrailEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

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

    // Mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth following with lerp (linear interpolation)
      const lerp = 0.15; // Adjust this value to change smoothness (lower = smoother)
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp;

      // Draw the cursor circle
      ctx.save();
      
      // Outer glow
      ctx.shadowColor = '#18E492';
      ctx.shadowBlur = 15;
      ctx.globalAlpha = 0.8;
      
      // Main circle
      ctx.fillStyle = '#18E492';
      ctx.beginPath();
      ctx.arc(cursorPos.current.x, cursorPos.current.y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner bright circle
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#20F4A0';
      ctx.beginPath();
      ctx.arc(cursorPos.current.x, cursorPos.current.y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
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