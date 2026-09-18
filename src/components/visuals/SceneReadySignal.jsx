import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { markSceneReady } from '../../utils/appReady';

// Renders nothing. Placed inside the Canvas' Suspense boundary so it only ticks
// once the GLTF has resolved — the first frame that actually has the logo in it.
export function SceneReadySignal() {
  const fired = useRef(false);

  useFrame(() => {
    if (fired.current) return;
    fired.current = true;
    markSceneReady();
  });

  return null;
}

export default SceneReadySignal;
