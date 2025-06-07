import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';



export function ScrollCameraController() {
  const { camera } = useThree();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    const angle = scroll * 0.001; // justera för känslighet
    camera.position.x = Math.sin(angle) * 5;
    camera.position.z = Math.cos(angle) * 5;
    camera.position.y = 2; // höjd på kameran
    camera.lookAt(0, 0, 0); // alltid titta mot modellen
  });

  return null;
}
