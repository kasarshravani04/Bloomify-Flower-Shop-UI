

const Contact = () => {
  return (
    <section>
        <header className=" text-2xl my-16 font-bold text-text">
           <h2>CONTACT</h2>
        </header>
        <div>
            <h3 className="text-6xl font-bold text-green-700  text-center">Fresh Flower for Every Moment</h3>
            <div className="flex justify-center gap-4 my-16">
            <button className="bg-green-700 rounded px-6 py-2 text-white cursor-pointer">Shop Now</button>
            <button className="bg-white  rounded px-6 py-2 text-black cursor-pointer outline outline-green-700">View Connection</button>
        </div>
              <div className="w-full my-20">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31961.88052033728!2d73.8033664!3d18.5106432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University%20(MIT-WPU)!5e1!3m2!1sen!2sin!4v1770373768577!5m2!1sen!2sin" 
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