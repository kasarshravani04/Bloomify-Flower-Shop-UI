import { Routes,Route } from 'react-router-dom'
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />

    </Routes>
  )
}

export default AppRoutes;