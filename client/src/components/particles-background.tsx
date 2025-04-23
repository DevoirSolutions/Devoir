'use client';

import { useEffect, useRef } from 'react';

interface StarryBackgroundProps {
  starCount?: number;
  starColor?: string;
  speed?: number;
  magicDustEnabled?: boolean;
}

export default function ParticlesBackground({
  starCount = 100,
  starColor = 'rgba(255, 255, 255, 0.8)',
  speed = 0.05,
  magicDustEnabled = true
}: StarryBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create stars
    type Star = {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      angle: number;
      // Track original position as percentage of canvas for proper resizing
      xPercent: number;
      yPercent: number;
    };

    // Create magic dust particles
    type MagicDust = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;
    };

    const stars: Star[] = [];
    const magicDust: MagicDust[] = [];
    
    // Colors for magic dust
    const dustColors = [
      'rgba(255, 223, 0, 0.6)',    // Gold
      'rgba(176, 38, 255, 0.6)',   // Purple
      'rgba(0, 191, 255, 0.6)',    // Cyan
      'rgba(255, 105, 180, 0.6)',  // Hot pink
    ];
    
    // Set canvas to full width/height and initialize stars
    const initializeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Only initialize stars if they don't exist yet
        if (stars.length === 0) {
          for (let i = 0; i < starCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            stars.push({
              x,
              y,
              size: Math.random() * 1.5 + 0.5,
              speed: Math.random() * 0.05 + speed,
              brightness: Math.random() * 0.5 + 0.5,
              angle: Math.random() * Math.PI * 2,
              // Store position as percentage of canvas dimensions
              xPercent: x / canvas.width,
              yPercent: y / canvas.height
            });
          }
        }
      }
    };
    
    // Handle resize and reposition stars
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Reposition stars based on their percentage positions
        stars.forEach(star => {
          // Maintain percentage position in the canvas
          star.x = star.xPercent * canvas.width;
          star.y = star.yPercent * canvas.height;
        });
      }
    };

    initializeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Function to create magic dust particles
    const createMagicDust = () => {
      if (!magicDustEnabled) return;
      
      // Only create particles occasionally
      if (Math.random() > 0.1) return;
      
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3 + 1;
      const speedX = (Math.random() - 0.5) * 1;
      const speedY = (Math.random() - 0.5) * 1 - 0.5; // Slight upward bias
      const colorIndex = Math.floor(Math.random() * dustColors.length);
      const maxLife = 100 + Math.random() * 50;
      
      magicDust.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color: dustColors[colorIndex],
        life: 0,
        maxLife
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create magic dust
      createMagicDust();
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        
        // Update star position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Wrap stars around the screen and update percentages
        if (star.x < 0) {
          star.x = canvas.width;
          star.xPercent = 1.0;
        } else if (star.x > canvas.width) {
          star.x = 0;
          star.xPercent = 0.0;
        } else {
          // Only update percentage if not wrapping
          star.xPercent = star.x / canvas.width;
        }
        
        if (star.y < 0) {
          star.y = canvas.height;
          star.yPercent = 1.0;
        } else if (star.y > canvas.height) {
          star.y = 0;
          star.yPercent = 0.0;
        } else {
          // Only update percentage if not wrapping
          star.yPercent = star.y / canvas.height;
        }
        
        // Draw star
        const opacity = star.brightness * (0.5 + Math.sin(Date.now() * 0.001 + star.angle) * 0.5);
        ctx.fillStyle = starColor.replace('rgba(255, 255, 255, 0.8)', `rgba(255, 255, 255, ${opacity})`);
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw and update magic dust
      for (let i = magicDust.length - 1; i >= 0; i--) {
        const dust = magicDust[i];
        
        // Update position
        dust.x += dust.speedX;
        dust.y += dust.speedY;
        dust.life++;
        
        // Remove if it's gone off screen or lived its life
        if (dust.life >= dust.maxLife || 
            dust.x < 0 || 
            dust.x > canvas.width || 
            dust.y < 0 || 
            dust.y > canvas.height) {
          magicDust.splice(i, 1);
          continue;
        }
        
        // Calculate opacity based on life
        const lifeRatio = 1 - dust.life / dust.maxLife;
        const opacity = lifeRatio * 0.8; // Fade out as it ages
        
        // Draw the particle
        ctx.beginPath();
        const color = dust.color.replace(/rgba\([^,]+,[^,]+,[^,]+,\s*[^)]+\)/, 
                                        `rgba(${dust.color.match(/rgba\(([^,]+),([^,]+),([^,]+)/)?.[1]}, 
                                              ${dust.color.match(/rgba\(([^,]+),([^,]+),([^,]+)/)?.[2]}, 
                                              ${dust.color.match(/rgba\(([^,]+),([^,]+),([^,]+)/)?.[3]}, 
                                              ${opacity})`);
        ctx.fillStyle = color;
        
        // Draw a small glow effect
        const glow = 5 * lifeRatio;
        ctx.shadowBlur = glow;
        ctx.shadowColor = color;
        
        ctx.arc(dust.x, dust.y, dust.size * lifeRatio, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [starCount, starColor, speed, magicDustEnabled]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
} 