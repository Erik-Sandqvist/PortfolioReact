import React, { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollCameraController } from '../ScrollCameraController'
import { ProjectDiv } from '../ProjectDiv'
import { LogoModel } from './LogoModel'
import { Footer } from '../Footer'

const THEMES = ['luxury','nord','dark','light']

export const Home = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ||
    document.documentElement.getAttribute('data-theme') ||
    'luxury'
  )

  // Apply + persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Debug (se att CSS-variabler ändras)
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--p').trim()
    console.log('Theme:', current, 'Primary:', primary)
  }, [theme])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6  p-6 mt-16 bg-base">

      <h1
        className="text-6xl md:text-5xl font-bold mb- mt-8 bg-gradient-to-r from-[#D3B60A] to-[#eeeef0] bg-clip-text text-transparent leading-right animate-slide-in-right"
      >
        My name is Erik Sandqvist
      </h1>

      <p className="max-w-lg text-primary animate-slide-in-right">
        I am 20 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
        I also have experience in media design and enjoy creating visually engaging digital content.
      </p>


      <div className="w-full h-80">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight />
          <Suspense fallback={null}>
            <LogoModel scale={65} />
          </Suspense>
          <ScrollCameraController />
        </Canvas>
      </div>

      <ProjectDiv />
    
    </section>
  )
}