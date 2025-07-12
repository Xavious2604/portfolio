import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';

const workExperiences = [
  {
    id: 1,
    name: 'Hare Krishna Foundation Trust',
    pos: 'Website Developer',
    duration: 'Jan–May 2025',
    title: 'Developed and maintained the organization’s website, ensuring a user-friendly interface and robust functionality.',
    icon: '/assets/project-logo1.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'OnexDream',
    pos: 'Database Management Intern',
    duration: 'May–Nov 2023',
    title: 'Managed databases and created a video series to enhance user engagement and content delivery.',
    icon: '/assets/project-logo2.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Talkline',
    pos: 'E-commerce Operator',
    duration: 'Dec 2021–Dec 2022',
    title: 'Operated and optimized e-commerce platforms, improving user experience and sales performance.',
    icon: '/assets/project-logo3.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'MrDeal',
    pos: 'SEO Intern',
    duration: 'Jun–Sep 2021',
    title: 'Conducted keyword research and improved site visibility through SEO strategies.',
    icon: '/assets/project-logo4.png',
    animation: 'idle',
  },
];

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt={item.name} />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
