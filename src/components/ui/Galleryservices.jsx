
const Galleryservices = ({item}) => {
    return (
     <div
         key={item.id}
         className="py-10 px-6 border-t last:border-b border-grey flex flex-row justify-between gap-12 ">
        <div className="">
           <h4 className="font-bold text-2xl md:text-5xl">
           {item.heading}
           </h4>
           <p className="text-text text-sm mt-4 sm:mt-2">
           {item.description}
           </p>
        </div>
        <img
        src={item.src}
        alt={item.heading}
        fetchPriority="low"
        loading="lazy"
        width="auto"
        height={100}
        className="w-44 h-44 rounded-4xl"
        />
         

     </div>
    )
}

export default Galleryservices;