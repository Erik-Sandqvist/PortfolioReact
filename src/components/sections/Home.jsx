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
// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ
// Font used - https://compressa.preusstype.com/
import TextPressure from '../TextPressure'

export const Home = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="relative mt-16">
      {/* <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-top bg-repeat-x"
          style={{
            backgroundImage: `url(${base}sky.jpg)`,
            backgroundAttachment: "fixed",
            backgroundSize: "auto"
          }}
          aria-hidden="true"
        /> */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" aria-hidden="true" />
        <div className="h-2/5 relative p-6">
        <div className="absolute inset-0 z-0 max-w-full">
          <LineWaves
            speed={0.1}
            innerLineCount={8}
            outerLineCount={26}
            warpIntensity={0.6}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.1}
            color1="#EAB308"
            color2="#EAB308"
            color3="#a68003"
            enableMouseInteraction
            mouseInfluence={0}
          />
        </div>

        <div className="flex flex-col items-start md:items-center justify-center gap-6 relative z-10">
        <div className="relative w-full md:w-4/5 h-[140px] md:h-[240px] mt-14 md:mt-0">
          <TextPressure
            text="Erik Sandqvist"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={48}
          />
        </div>
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
      className="text-primary z-10" 
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
      <Footer />
    </section>
  )
}