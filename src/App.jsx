import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Specialists from "./pages/DoctorsSpecialists";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>} />

        <Route
          path="/specialists"
          element={<Specialists />}
        />

        <Route
          path="/appointment"
          element={<Appointment />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;