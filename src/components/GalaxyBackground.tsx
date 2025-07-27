
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const StarField = () => {
  const mesh = useRef<THREE.Points>(null);

  // Generate 1000 random points in a sphere
  const positions = useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const r = Math.random() * 400 + 100;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="white"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
};

const GalaxyBackground = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: -10,
      pointerEvents: "none"
    }}
  >
    <Canvas camera={{ position: [0, 0, 600], fov: 60 }} style={{ background: '#000' }}>
      <StarField />
      <ambientLight intensity={1} />
    </Canvas>
  </div>
);

export default GalaxyBackground;
