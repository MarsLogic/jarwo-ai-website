// src/components/NeuralNetworkAnimation.jsx
"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const BRAND_PINK = "#F92D77";

function NeuralParticles({
  count = 80,
  lightColor,
  darkColor,
  particleSize = 0.08, // Slightly increased default base size
  particleOpacityLight = 1.0,
  particleOpacityDark = 0.85
}) {
  const pointsRef = useRef();
  const { theme } = useTheme();

  const currentColor = useMemo(() => {
    return theme === 'dark' ? darkColor : lightColor;
  }, [theme, lightColor, darkColor]);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      // Spread particles a bit wider for potentially more coverage
      positions[i] = (Math.random() - 0.5) * 16; // Was 15
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04; // Slightly slower rotation
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        key={`${currentColor}-${particleSize}-${particleOpacityLight}-${particleOpacityDark}-${count}`} // More specific key
        transparent
        color={currentColor}
        size={particleSize}
        sizeAttenuation={true} // Particles further away appear smaller
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Makes overlapping particles brighter
        opacity={theme === 'dark' ? particleOpacityDark : particleOpacityLight}
      />
    </Points>
  );
}

export default function NeuralNetworkAnimation() {
  // Set 1: Brand Pink particles
  const pinkParticlesProps = {
    count: 90, // Increased count
    lightColor: BRAND_PINK,
    darkColor: BRAND_PINK,
    particleSize: 0.095, // Further increased size for pink particles
    particleOpacityLight: 1.0,
    particleOpacityDark: 0.9, // Slightly more opaque in dark mode too
  };

  // Set 2: Accent particles
  const accentParticlesProps = {
    count: 75, // Increased count
    // For Light Mode: Using a more visible gray. Was Tailwind gray-500 (#6B7280)
    // Let's try a slightly darker gray for more contrast on pure white.
    lightColor: "#4B5563",   // Tailwind gray-600
    // For Dark Mode: Keeping a vibrant accent
    darkColor: "#38BDF8",   // Brighter sky blue for dark mode
    particleSize: 0.085,    // Further increased size for accent particles
    particleOpacityLight: 1.0, // Max opacity in light mode
    particleOpacityDark: 0.85, // Increased opacity for dark mode
  };

  return (
    // Container opacity: further increased for light mode.
    // Previous: opacity-80 dark:opacity-75
    // Trial 2: opacity-90 dark:opacity-75
    <div className="absolute inset-0 z-0 pointer-events-none h-full w-full opacity-95 dark:opacity-80">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 75 }} // Moved camera slightly closer
        style={{ pointerEvents: 'none' }}
      >
        <NeuralParticles {...pinkParticlesProps} />
        <NeuralParticles {...accentParticlesProps} />
      </Canvas>
    </div>
  );
}