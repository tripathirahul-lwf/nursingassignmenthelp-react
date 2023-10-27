import './App.css';
import About from './component/about/About';
import Client from './component/client/Client';
import Header from './component/common/header/Header';
import Contact from './component/contact/Contact';
import Content from './component/content/Content';
import Cta from './component/cta/Cta';
import Faq from './component/faq/Faq';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Review from './component/review/Review';
import Serivces from './component/servics/Serivces';
import Steps from './component/steps/Steps';
import Trusted from './component/trusted/Trusted';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Trusted />
      <Steps />
      <About />
      <Serivces />
      <Content />
      <Cta />
      <Review />
      <Faq />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
