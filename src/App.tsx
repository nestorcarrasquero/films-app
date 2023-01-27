import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buy from './pages/Buy';
import Layout from './pages/Layout';
import Search from './pages/Search';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/search' element={<Search />} /> 
          <Route path='/buy' element={<Buy />} />
          <Route path='/cart' element={<Home />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
