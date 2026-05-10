import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { asset } from '../../utils/asset' 

export function LogoModel({ scale = 10 }) {
  const gltf = useGLTF(asset('logowhitespin2.glb'))
  const ref = useRef();

  useFrame(() => {
    const scrollY = window.scrollY || window.pageYOffset
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollNorm = maxScroll ? scrollY / maxScroll : 0
    if (ref.current) {
      ref.current.rotation.y = scrollNorm * Math.PI * 1.5
    }
  })

  return <primitive ref={ref} object={gltf.scene} scale={scale} />
}