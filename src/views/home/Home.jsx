import React from 'react';
import JumpToTop from '../../components/common/JumpToTop';
import PreLoader from '../../components/common/PreLoader';
import Apps from './Apps';
import FreequentlyQuestion from './freequently-question/FreequentlyQuestion';
import Header from './header/Header';
import Hero from './Hero';
import Roadmap from './Roadmap';
import Team from './team/Team';
import VideoSection from './VideoSection';
import Mint from './Minter';

export default function Home() {
  return (
    <div>
      <Header />
      <main id="main">
        <Hero />
        <Apps/>
        <VideoSection />
        {/* <Roadmap /> */}
        <Team />
        <FreequentlyQuestion />
      </main>
      {/* <PreLoader /> */}
      <JumpToTop />
    </div>
  );
}
