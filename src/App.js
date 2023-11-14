import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/common/header/Header';
import Footer from './component/footer/Footer';
import Home from './component/Home';
import Thankyou from './component/thankyou/Thankyou';
import ErrorPage from './component/page_404/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
