import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Global from './components/Global/Global';
import Membership from './components/Membership/Membership';
import Profile from './components/Profile/Profile';
import Work from './components/Work/Work';
import Question from './components/Question/Question';
import Help from './components/Help/Help';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

import heroBg from "./assets/images/hero-bg.png";

function App() {
  return (
    <> 
      <div className="header-wrapper min-h-150 lg:min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <Navbar />
        <Hero />
      </div>

      <Global />

      <Membership />

      <Profile />

      <Work />

      <Question />

      <div className="relative">
        <Help />
      
        <Footer />
      </div>

      <ScrollToTop />
    </>
  )
}

export default App
