//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import Home from './routes/Home';
import Layout from './routes/Layout';
import Proyectos from './routes/Proyectos';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/proyectos" element={<Proyectos />}></Route>
      <Route path="/information" element={<Proyectos />}></Route>
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;
