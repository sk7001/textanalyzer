import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './screens/Homepage';
import About from './screens/About';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route exact path="/textanalyzer" element={<Homepage />} />
          <Route path="/textanalyzer/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
