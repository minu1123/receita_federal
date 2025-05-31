import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Mission from './components/Mission';
import About from './components/about';
import UseCases from './components/UseCases';
import Footer from './components/footer';


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
