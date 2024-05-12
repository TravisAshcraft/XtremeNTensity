
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Header from "./components/Header";
import Home from "./pages/Home";
import ParticleTrail from "./components/ParticleTrail";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
          <ParticleTrail/>
          <Header/>
          <Home/>
          <Footer/>
        {/* Other components and content */}
      </div>
  );
}

export default App;
