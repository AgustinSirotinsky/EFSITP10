//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import Home from './routes/Home';
import Layout from './routes/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
