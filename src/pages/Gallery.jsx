import GalleryImg from "../components/ui/GalleryImg.jsx";
import Galleryservices from "../components/ui/Galleryservices.jsx"
import {galleryData}  from "../data/galleryData.jsx";
import { galleryservices } from "../data/galleryservices.jsx";


const Gallery = () => {
  return (
    <section>
      <header className="text-2xl md:text-5xl font-bold my-16">
         <h3>GALLERY</h3>
      </header>
      <div className="md:grid grid-cols-12 gap-4 my-20">
         <aside className="md:col-span-2 text-text font-bold text-md">
          <h3>SEASONAL ARRANGEMENTS</h3>
         </aside>
        <div className="md:col-span-10">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12">
              {
                galleryData && galleryData.map((item)=>(
                <GalleryImg item = {item}/>
              ))
              }
           </div>
        </div>
      </div>
      <div className="md:grid grid-cols-12 gap-4 my-20 ">
        <aside className="md:col-span-2 text-text font-bold text-lg">
          <h4>SERVICES</h4>
        </aside>
        <div className="md:col-span-10">
          
        {
          galleryservices && galleryservices.map((item) =>(
            <Galleryservices item = {item}/>
          ))
        }
         
        </div>
      </div>
      <div className='text-center my-10'>
           <h3 className='text-sm text-text mb-4'>WORK WITH US</h3>
           <h4 className='font-bold text-4xl md:max-w-[80%] lg:max-w-[35%] mx-auto mb-10'>
             Discover how we can add a touch of natural beauty to your next event. 
            </h4>
           <button className='px-6 py-2 bg-yellow text-sm text-black rounded '>ABOUT US </button>
       </div>


    </section>
  )
}

export default Gallery;