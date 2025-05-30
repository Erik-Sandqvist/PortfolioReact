import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { FerrariModel } from './FerrariModel';
import { OrbitControls } from '@react-three/drei';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-6">
     <div className="text-center z-10 px-4 mt-26 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-right">
          My name is Erik Sandqvist. I am 20 years old, born and raised in Jönköping.
          I’m currently a student at Jönköping University, with a strong interest in programming and coding,
          specializing in web development for both backend and frontend. I also have experience in media design
          and enjoy creating visually engaging digital content.
        </h1>
      </div>
      <div className="w-full h-96 mt-8">
      <Canvas>
  <ambientLight />
  <Suspense fallback={null}>
    <FerrariModel />
  </Suspense>
  <OrbitControls />
</Canvas>
      </div>
    </section>
  );
};