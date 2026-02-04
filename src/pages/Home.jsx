import Hero_Banner from "../components/common/home/Hero_Banner";
import Home_About from "../components/common/home/Home_About";
import Services from "../components/common/home/Services";
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <>
      <Hero_Banner/>
      <Home_About/>
      <Services/>
      <section className="banner_background  min-h-[60vh] md:min-h-screen bg-no-repeat bg-cover md:bg-fixed rounded-4xl"></section>
         
         <section className='layout my-20'>
       <header className='text-center'>
           <h3 className='text-sm text-text mb-4'>WORK WITH US</h3>
           <h4 className='font-bold text-4xl md:max-w-[80%] lg:max-w-[60%] mx-auto mb-10'>
             Discover how we can add a touch of natural beauty to your next event.
            </h4>
            <Link to={"/aboutus"}>
                <button className='px-6 py-2 bg-yellow text-sm text-black rounded '>ABOUT US </button>
            </Link>
           
       </header>
      </section>



    
    
    </>
  )
}

export default Home;