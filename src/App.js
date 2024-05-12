
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Header from "./components/Header";
import Home from "./pages/Home";
import ParticleTrail from "./components/ParticleTrail";
import Footer from "./components/Footer";
import React, {useState} from "react";
import RegistrationPanel from "./components/RegistrationPanel";

function App() {

    const [isRegisterPanelVisible, setRegisterPanelVisible] = useState(false);

    const showRegisterPanel = () => setRegisterPanelVisible(true);
    const hideRegisterPanel = () => setRegisterPanelVisible(false);
    
  return (
      <div className="App">
          <ParticleTrail/>
          <Header onRegisterClick={showRegisterPanel} />
          <RegistrationPanel isVisible={isRegisterPanelVisible} onClose={hideRegisterPanel} />
          <Home/>
          <Footer/>
        {/* Other components and content */}
      </div>
  );
}

export default App;
