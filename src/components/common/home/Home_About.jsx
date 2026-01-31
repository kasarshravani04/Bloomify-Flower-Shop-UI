import { Flower1,Flower2,Flower3,Flower4,Flower5,Flower6 } from "../../../assets/slider";
import Slider from "../../ui/Slider";

const item = [
    Flower1,
    Flower2,
    Flower3,
    Flower4,
    Flower5,
    Flower6
]


const Home_About = () => {
  return (
   <section className='layout my-20'>
       <header className='text-center'>
           <h3 className='text-sm text-text mb-4'>WHO WE ARE</h3>
           <h4 className='font-bold text-4xl md:max-w-[80%] lg:max-w-[60%] mx-auto mb-10'>
            We're Our Blooms® and we're here to help you find your floral story
            </h4>
           <button className='px-6 py-2 bg-yellow text-sm text-black rounded '>ABOUT US </button>
       </header>

         <Slider items={item} />
   </section>
  )
}

export default Home_About;