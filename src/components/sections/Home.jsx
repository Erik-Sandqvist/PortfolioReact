import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { FerrariModel } from './FerrariModel';
import { ScrollCameraController } from '../ScrollCameraController';

// import { OrbitControls } from '@react-three/drei';



export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-6">
     <div className="text-center z-10 px-4 mt-26 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D3B60A] to-[#eeeef0] bg-clip-text text-transparent leading-right">
          My name is Erik Sandqvist.
        </h1>
        <p className='text-#D3B60A text-2xl mb-8 max-w-lg mx-auto'>
        I am 20 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
         I also have experience in media design and enjoy creating visually engaging digital content. 
        </p>
      </div>
      <div className="w-full h-96 mt-8">
      <Canvas>
  <ambientLight />
  <Suspense fallback={null}>
    <FerrariModel />
  </Suspense>
  <ScrollCameraController /> {/* Styr kameran med scroll */}
</Canvas>

      </div>
      <p className='text-#D3B60A text-lg mb-8 max-w-lg mx-auto'>
        I am 20 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
         I also have experience in media design and enjoy creating visually engaging digital content. 
        </p> <p className='text-#D3B60A text-lg mb-8 max-w-lg mx-auto'>
        I am 20 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
         I also have experience in media design and enjoy creating visually engaging digital content. 
        </p> <p className='text-#D3B60A text-lg mb-8 max-w-lg mx-auto'>
        I am 20 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
         I also have experience in media design and enjoy creating visually engaging digital content. 
        </p> <p className='text-#D3B60A text-lg mb-8 max-w-lg mx-auto'>
        I am 20 years old, born and raised in Jönköping. I’m currently a student at Jönköping University, 
        with a strong interest in programming and coding, specializing in web development for both backend and frontend.
         I also have experience in media design and enjoy creating visually engaging digital content. 
        </p>
    </section>
    
  );
};