'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedBackground({ className, children }: AnimatedBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cream orb - top left */}
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/60 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Orange orb - top right */}
        <motion.div
          className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-secondary/60 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Cream orb - bottom right */}
        <motion.div
          className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-primary/60 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Orange orb - center left */}
        <motion.div
          className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/60 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Cream orb - bottom left */}
        <motion.div
          className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-primary/60 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
