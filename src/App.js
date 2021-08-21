import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


const particleOptions = {
  particles: {
    number: {
      value:100,
      density: {
        enable:true,
        value_area:800
      }
    }
    }
  }

function App() {
  return (
    <div id='tsparticles' className="App">
      <Navigation />
      <Particles id='tsparticles' className='particles'
        params={particleOptions}
      />
       <Logo />
       <Rank />
      <ImageLinkForm/>
      {/* <FaceRecognition />} */}
    </div>
  );
}


export default App;
