import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/navegation/navbar/Navbar1';
import Inicio from './components/pages/Inicio/Inicio';
import About from './components/pages/About';
import Footer from './components/navegation/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar1/>}>
            <Route index element={<Inicio />}/>
            <Route path='About' element={<About />}/>
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
