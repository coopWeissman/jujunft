import React from 'react';
import JumpToTop from '../../components/common/JumpToTop';
import PreLoader from '../../components/common/PreLoader';
import Connect from './connector/Connect';
import FreequentlyQuestion from './freequently-question/FreequentlyQuestion';
import Header from './header/Header';
import Hero from './Hero';
import Roadmap from './Roadmap';
import Team from './team/Team';
import VideoSection from './VideoSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main id="main">
        <Hero />
        <Connect/>
        <VideoSection />
        <Roadmap />
        <Team />
        <FreequentlyQuestion />
      </main>
      <PreLoader />
      <JumpToTop />
    </div>
  );
}
