import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio/Inicio';
import About from './components/pages/About';
import Acerca from './components/pages/Acerca de/Acerca';
import Noticias from './components/pages/Noticias/Noticias'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Inicio />}/>
            <Route path='About' element={<About />}/>
            <Route path='Acerca' element={<Acerca />}/>
            <Route path='Noticias' element={<Noticias />}/>
            <Route path='*' element={<Navigate replace to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
