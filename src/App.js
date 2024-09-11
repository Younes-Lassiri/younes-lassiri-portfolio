import './App.css';
import Detailone from './Detailone/Detailone';
import Landing from './Landing/Landing';
import Loader from './Loader/Loader';
import { useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!pageLoaded) {
    return <Loader/>;
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/portfolios/:id/:name' element={<Detailone/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
