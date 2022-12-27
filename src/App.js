import logo from './logo.svg';
import './App.css';
import Home from './componet/home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga4";
import { useEffect } from 'react';

AOS.init();

function App() {
  const setGA = () => {
    ReactGA.initialize('G-4J7VZJDZDK');
    ReactGA.send({ hitType: "pageview", page: "http://www.jstechnovation.com/pixellab-drip-collage-maker/" });
  };
  useEffect(()=>{
    setGA()
  })
  return (
    <div className="App">
  <Home/>
    </div>
  );
}

export default App;
