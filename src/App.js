import React from 'react';
import useCDN from './hooks/useCDN';
import Home from './views/home/Home';

export default function App() {
  useCDN();

  return <Home />;
}
