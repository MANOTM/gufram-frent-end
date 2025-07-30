import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '../src/components/header/Header';
import Home from './pages/home/Home';
import Authors from './pages/authors/Authors';
import History from './pages/history/History';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Article from './pages/article/Article';  
import { AnimatePresence } from 'framer-motion';
import Loading from './components/loading/Loading';
import { useEffect, useState } from 'react';

function App() {
  const loacation = useLocation()
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2000); // Show for 2 seconds
        return () => clearTimeout(timer);
    }, []);

  return (

    <AnimatePresence>
      <Loading/>
      <Header />
      <Routes location={loacation} key={loacation.pathname} >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/:id' element={<Article />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/history' element={<History />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
