import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import About from './components/About';
import UseCases from './components/UseCases';
import Footer from './components/Footer';


// (mais tarde: About, HowItWorks, Testimonials, Footer...)

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <About />
      <UseCases />
      <Footer />
    </>
  );
};

export default App;
