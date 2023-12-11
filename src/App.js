import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import PrivacyStatment from './Components/PrivacyStatment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headroom from 'react-headroom';
import PrivatePolicy from './Components/PrivatePolicy';
import TermOfUse from './Components/TermOfUse';



function App() {
  return (
    <div className="App">
      <Router>
       
       <Navbar />
  

        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/PrivacyStatment" element={<PrivacyStatment />} />
          <Route path="/PrivatePolicy" element={<PrivatePolicy />} />
          <Route path="/TermOfUse" element={<TermOfUse/>} />
        </Routes>
        <Footer />
      </Router>

     
    </div>
  );
}

export default App;
