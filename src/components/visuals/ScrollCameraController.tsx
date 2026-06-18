import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';



export function ScrollCameraController() {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateCamera = () => {
      const angle = scrollRef.current * 0.004; // adjust sensitivity
      camera.position.x = Math.sin(angle) * 5;
      camera.position.z = Math.cos(angle) * 5;
      camera.position.y = 2; // camera height
      camera.lookAt(0, 0, 0); // always look at the model
      rafRef.current = null;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;

      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(updateCamera);
    };

    updateCamera();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [camera]);

  return null;
}
