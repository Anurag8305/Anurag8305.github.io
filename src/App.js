
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Astronaut from './Components/ScrollToTop/Astronaut';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <ScrollToTop />
      <Astronaut />
      <Footer />

    </div>
  );
}

export default App;
