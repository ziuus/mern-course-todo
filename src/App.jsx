import './App.css';
import { Tasks } from './components/Tasks';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
          <Navbar />
          <div className="container mx-auto max-w-4xl p-6">
              <Routes>
                  <Route path="/" element={<Tasks />}  />
                      <Route path="/about" element={<About />} />
              </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
