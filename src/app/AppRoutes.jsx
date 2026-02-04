import { Routes,Route } from 'react-router-dom'
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>

    </Routes>
  )
}

export default AppRoutes;