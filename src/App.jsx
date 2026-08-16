import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './theme/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Specialists from './pages/DoctorsSpecialists';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PageTransition from './components/common/PageTransition';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <main className="app-main">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/specialists" element={<Specialists />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;