// FerrariModel.jsx
import { useGLTF } from '@react-three/drei';

export function FerrariModel() {
    const gltf = useGLTF('/ferrari_288_gto.glb'); // Lägg filen i public-mappen
  return <primitive object={gltf.scene} scale={2} />;
}