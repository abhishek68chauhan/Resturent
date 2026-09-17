import About from '../components/About';
import HeroSection from '../components/HeroSection';
import { Menu } from '../components/Menu';
import Qualities from '../components/Qualities';


const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
    </>
  )
}

export default Home;