import './App.css';
import Contact from './Contact/Contact';
import Detailone from './Detailone/Detailone';
import Footer from './Footer/Footer';
import Landing from './Landing/Landing';
import Loader from './Loader/Loader';
import Recent from './Recent/Recent';
import Resume from './Resume/Resume';
import Services from './Services/Services';
import Skills from './Skills/Skills';
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
