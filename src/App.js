import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact element={<Layout />}>
          <Route exact path='/' element={<Home />} />         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
