import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import ShinyText from '../visuals/ShinyText';
import { ScrollCameraController } from '../visuals/ScrollCameraController'
import { ProjectDiv } from '../ProjectDiv'
import { GraphicDiv } from '../GraphicDiv'
import { LogoModel } from './LogoModel'
import { Footer } from '../Footer'
import CurvedLoop from '../visuals/CurvedLoop'
import LineWaves from '../LineWaves'

export const Home = () => {
  return (
    <section className="relative mt-16 overflow-hidden">
      <div className="min-h-screen relative p-6">
        <div className="absolute inset-0 z-0 max-w-full">
          <LineWaves
            speed={0.1}
            innerLineCount={8}
            outerLineCount={26}
            warpIntensity={0.6}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#EAB308"
            color2="#EAB308"
            color3="#a68003"
            enableMouseInteraction
            mouseInfluence={20}
          />
        </div>

        <div className="flex flex-col items-start md:items-center justify-center gap-6 relative z-10">
        <h1 className="font-onest text-5xl md:text-9xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default">
          Erik Sandqvist
        </h1>
 {/* <div
        ref={containerRef}
        className="max-w-2xl mb-2 animate-slide-in-right cursor-default"
        style={{ position: 'relative' }}
      >
        <VariableProximity
          label={'I am 21 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, with a strong interest in programming and coding, specializing in web development for both backend and frontend. I also have experience in media design and enjoy creating visually engaging digital content.'}
          className="font-onest text-lg md:text-2xl text-primary leading-relaxed"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 800, 'opsz' 40"
          containerRef={containerRef}
          radius={130}
          falloff="linear"
        />
      </div> */}
      {/* <ShinyText
        text="I am 21 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, with a strong interest in programming and coding, specializing in web development for both backend and frontend. I also have experience in media design and enjoy creating visually engaging digital content."
        className="font-onest max-w-2xl text-lg md:text-2xl animate-slide-in-right cursor-default mb-2 block leading-relaxed"
        speed={6.6}
        delay={0.92}
        color="#fffcfe"
        shineColor="#73620d"
        spread={90}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      /> */}
         {/* <ShinyText
        text="Webdeveloper"
        className="font-onest max-w-2xl text-xl md:text-3xl font-bold animate-slide-in-right cursor-default mb-2 block leading-relaxed"
        speed={6.6}
        delay={0.92}
        color="#fffcfe"
        shineColor="#73620d"
        spread={90}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      /> */}

      <div className="w-full h-80">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight />
          <Suspense fallback={null}>
            <LogoModel scale={70} />
          </Suspense>
          <ScrollCameraController />
        </Canvas>
      </div>

        </div>
      </div>

      <CurvedLoop
      className="text-primary"
        marqueeText=" Web Development Projects   *   Fullstack Applications   *   React   *   C#   *   Node.js   *   MongoDB   *   JavaScript   *  UI/UX Design   *   "
        speed={0.5}
        curveAmount={-130}
      />
      <ProjectDiv />
      {/* <Link to="/illusion" className="btn btn-primary hover:btn-secondary m-auto">
  Go to Illusion
</Link> */}
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