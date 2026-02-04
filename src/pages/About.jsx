import { image1, image2, image3 } from "../assets/about";
import about from "../assets/about/Image.png";
import services from "../assets/services/Img3.png";

const item = [
    image1,
    image2,
    image3
]



const About = () => {
  return (
    <section>
       <header className=" text-5xl md:text-8xl font-bold">
           <h3>About</h3>
       </header>
       <div className="md:grid grid-cols-12 gap-4 my-20">
          <aside className="col-span-2">
            <h3>Our Story</h3>
          </aside>
          <div className="col-span-10 space-y-12">
             <figure className="flex items-start gap-4">
              <img src={about} alt="Lilly Smith" width={450} height={500} fetchPriority="auto" loading="lazy"
                 className="rounded-4xl"
              />
              <figcaption>
                 <h3>Lilly Smith</h3>
                 <span>Owner</span>
              </figcaption>
             </figure>
             <h3 className="text-4xl font-bold">
              Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.
              </h3>

             <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {[image1,image2,image3].map((item,index) =>(
                  <img 
                     key={index +1} 
                     src={item}
                     alt={index +2}
                     fetchPriority="low"
                     loading="lazy"
                     width={280}
                     height={350}
                    className="rounded-2xl col-span-1 w-full aspect-[1/1.2]"
                  />
                ))}
             </div>
             <div className="max-w-full md:max-w-[70%] w-full text-md space-y-4">
               <p>
                Lily’s journey with flowers began in the heart of Oregon, 
                amidst the flourishing fields of her aunts' flower farm. It 
                was there, surrounded by the abundance of nature, that 
                she discovered her passion for floral design. From 
                learning the names of each bloom to understanding the 
                delicate balance of a bouquet, she absorbed the artistry 
                of flowers like the rich Oregon soil.
               </p>
               <p>
                Bloom & Co. is the expression of that lifelong passion, a 
                place where her love for flowers translates into 
                beautifully curated arrangements that bring joy and 
                elegance to your spaces.
               </p>
             </div>
             <div>
              <img
                 src={services}
                 alt="Img3"
                 width={1200}
                 height={500}
                 fetchPriority="low"
                 loading="lazy"
                 className="w-full h-64 object-cover rounded-4xl "
              />
             </div>
             <div className="max-w-full md:max-w-[70%] w-full text-md space-y-4">
              <p>
                From humble beginnings, Bloom&Co has grown into a beloved 
                local destination, known for its artistic arrangements, 
                personal service, and commitment to quality.
              </p>
              <p>
                Discover how we can add a touch of natural beauty to your next event.
              </p>
              <button className=" cursor-pointer px-6 py-2 bg-yellow text-sm font-bold text-black rounded">
                BOOK A CONSULTATION
              </button>
             </div>
            </div>
      </div>
    </section>
  )
}

export default About