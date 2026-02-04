import { NavLink,Link } from "react-router-dom";
import logoM from '../../assets/logo/O.B..png';
import Logo from '../../assets/logo/Logo.1.png';

const MainHeader = () => {
  return (
      <header className="flex justify-between items-center border-b border-black py-6 layout">
         <div>
            <Link to="/" className="sm:hidden">
                <img src={logoM} alt="our_Blooms" width={100} height={30} loading="eager" fetchPriority="high"
                     className="w-full h-6 object-contain"/>  
            </Link>
            <Link to="/" className="hidden sm:block">
                <img src={Logo} alt="Our_Blooms" width={100} height={20} loading="eager" fetchPriority="high"
                     className="w-full h-7 object-contain hidden sm:block"/>
            </Link>
         </div>
         <div>
           <nav>
              <ul className="flex gap-6">
                <li>
                   <NavLink to="/gallery" className={
                      ({ isActive }) => isActive? "text-sm font-bold underline underline-offset-4" : "font-bold text-sm"
                   }>
                     GALLERY
                   </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={
                      ({ isActive }) => isActive? "text-sm font-bold underline underline-offset-4" : "font-bold text-sm"
                   }>
                     ABOUT
                   </NavLink>
                </li>
                <li>   
                   <NavLink to="/contact" className={
                      ({ isActive }) => isActive? "text-sm font-bold underline underline-offset-4" : "font-bold text-sm"
                   }>
                     CONTACT
                   </NavLink>
                </li>
              </ul>
           </nav>
         </div>
      </header>
  )
}

export default MainHeader;