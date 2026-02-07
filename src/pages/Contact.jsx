import {NavLink} from "react-router-dom";

const Contact = () => {
  return (
    <section>
        <header className=" text-2xl my-16 font-bold text-text">
           <h2>CONTACT</h2>
        </header>
        <div>
            <h3 className="text-6xl font-bold text-green-700  text-center">
                Fresh Flower for Every Moment
            </h3>

           <div className="flex justify-center gap-4 my-16">
            <NavLink
               to="/" 
               className="bg-green-700 rounded px-6 py-2 text-white cursor-pointer">
               Shop Now
            </NavLink>
            <NavLink 
             to="/gallery"    
             className="bg-white  rounded px-6 py-2 text-black cursor-pointer outline outline-green-700">
            View Connection
            </NavLink>
             
        </div>
              <div className="w-full my-20">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15977.349568294652!2d73.88290758715817!3d18.549055999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15e1c76d83f%3A0x671d1e6cfc2d1665!2sBlooms%20Only%20-%20A%20Premium%20Flower%20Shop%20in%20Pune!5e1!3m2!1sen!2sin!4v1770483940424!5m2!1sen!2sin"
                width="800" 
                height="600" 
                allowFullScreen="false" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-4xl"
                ></iframe>
            </div>
           
        </div>
    </section>
  )
}

export default Contact;