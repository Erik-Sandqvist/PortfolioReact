import React, { useEffect, useState, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { ScrollCameraController } from '../visuals/ScrollCameraController'
import { ProjectDiv } from '../ProjectDiv'
import { GraphicDiv } from '../GraphicDiv'
import { LogoModel } from './LogoModel'
import { Footer } from '../Footer'
import CurvedLoop from '../visuals/CurvedLoop'

const THEMES = ['luxury','nord','dark','light']

export const Home = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ||
    document.documentElement.getAttribute('data-theme') ||
    'luxury'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--p').trim()
    console.log('Theme:', current, 'Primary:', primary)
  }, [theme])

  return (
    <section className="min-h-screen flex flex-col items-start md:items-center justify-center gap-6 p-6 mt-16 ">

   <h1 className="font-onest text-5xl md:text-9xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default">
     Erik Sandqvist
   </h1>

      <p className="font-onest max-w-2xl text-lg md:text-2xl text-primary animate-slide-in-right cursor-default mb-2">
        I am 21 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
        I also have experience in media design and enjoy creating visually engaging digital content.
      </p>

      <div className="w-full h-80">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight />
          <Suspense fallback={null}>
            <LogoModel scale={70} />
          </Suspense>
          <ScrollCameraController />
        </Canvas>
      </div>

      <CurvedLoop
      className="text-primary"
        marqueeText=" Web Development Projects   *   Fullstack Applications   *   React   *   C#   *   Node.js   *   MongoDB   *   JavaScript   *  UI/UX Design   *   "
        speed={0.5}
        curveAmount={-130}
      />
      <ProjectDiv />
      <Link to="/illusion" className="btn btn-primary hover:btn-secondary m-auto">
  Go to Illusion
</Link>
<CurvedLoop
      className="text-primary"
        marqueeText="Graphic Design   *   Motion Graphics   *   Adobe Photoshop   *   Adobe After Effects   *   "
        speed={0.5}
        curveAmount={130}
      />

      <GraphicDiv />
{/* Video element added here */}
{/* <div className="w-5/6 mt-8 m-auto">
  <video 
    className="w-full rounded-lg shadow-lg" 
    autoPlay
    muted
    loop
  >
    <source src="/homevid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}
{/* <div className="w-full max-w-4xl mt-8">
  <video 
    className="w-full rounded-lg shadow-lg" 
    controls
    autoPlay
    muted
    loop
  >
    <source src="/film.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}
    </section>
  )
}