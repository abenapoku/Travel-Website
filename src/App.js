import Rooms from './components/Rooms.jsx';
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx';
import Plan from './components/Plan.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Hero/>
     <Offers/>
     <Plan/>
     <Rooms/>
     <ImageSlider/>
     <Footer/>
    </div>
  );
}

export default App;
