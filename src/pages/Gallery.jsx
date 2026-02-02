import GalleryImg from "../components/ui/GalleryImg.jsx";
import Galleryservices from "../components/ui/Galleryservices.jsx"
import {galleryData}  from "../data/galleryData.jsx";
import { galleryservices } from "../data/galleryservices.jsx";



const Gallery = () => {
  return (
    <section>
      <header className="text-5xl md:text-8xl font-bold mb-16">
         <h3>Gallery</h3>
      </header>
      <div className="md:grid grid-cols-12 gap-4 my-20">
         <aside className=" col-span-12 md:col-span-3 text-text font-bold text-2xl">
          <h3>SEASONAL ARRANGEMENTS</h3>
         </aside>
         <div className="col-span-12 md:col-span-9">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {
            galleryData && galleryData.map((item)=>(
              <GalleryImg item = {item}/>
            ))
          }
           </div>
          
         </div>
      </div>
      <header className="font-bold text-text">
        <h4>SERVICES</h4>
      </header>
      <div>
        {
          galleryservices && galleryservices.map((item) =>(
            <Galleryservices item = {item}/>
          ))
        }
      </div>

    </section>
  )
}

export default Gallery;