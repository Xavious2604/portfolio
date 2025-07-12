import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('if1905630109@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/irfan.png" alt="Mohammed Irfan Shaikh" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Mohammed Irfan Shaikh</p>
              <p className="grid-subtext">
                A passionate IT engineer with expertise in web development, blockchain, and machine learning, I build innovative and scalable solutions to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="Skills" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Skills</p>
              <p className="grid-subtext">
                Proficient in Python, Java, JavaScript, C, C++, HTML, CSS, React, Tailwind, WordPress, MySQL, SQLite, AWS, and more, I create robust applications with a focus on performance and user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={500}
                width={500}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere={true}
                atmosphereColor="skyblue"
                atmosphereAltitude={0.25}
                showGraticules={true}
                labelsData={[
                  {
                    lat: 19.0760,
                    lng: 72.8777,
                    text: 'Mumbai, India',
                    color: '#ffffff',
                    size: 1.5,
                  },
                ]}
                labelDotRadius={0.4}
                labelColor={() => 'rgba(255, 255, 255, 0.85)'}
                labelAltitude={0.01}
                labelResolution={2}
              />
            </div>
            <div>
              <p className="grid-headtext">Education & Certifications</p>
              <p className="grid-subtext">
                Bachelor of Engineering (Information Technology), Mumbai University (2022–2025)<br />
                Diploma in Information Technology, MSBTE (2018–2022)<br />
                <a href="https://www.credly.com/badges/98064123-df51-4bc8-96ca-67b1b738ec37/public_url" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  AWS Cloud Badge (May 2025)
                </a>
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="Leadership" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Leadership & Achievements</p>
              <p className="grid-subtext">
                Hackathon finalist at Vartak Polytechnic, led technical projects in AR and Stockfish, and created engaging video content at OnexDream.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="Contact" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">if1905630109@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
