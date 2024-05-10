
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Header/>
          <Home/>
        {/* Other components and content */}
      </div>
  );
}

export default App;
