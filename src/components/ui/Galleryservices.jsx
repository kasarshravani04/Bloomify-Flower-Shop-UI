
const Galleryservices = ({item}) => {
    return (
    <div
         key={item.id}
         className="py-10 md:px-6 border-t last:border-b border-grey flex flex-row justify-between gap-12 sm:flex flex-wrap ">
        <div className="px-5">
           <h2 className="font-bold text-2xl md:text-5xl">
           {item.heading}
           </h2>
           <p className="text-text text-lg mt-4 sm:mt-2">
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
        className="w-90 h-90 rounded-4xl"
        />
    </div>
    )
}

export default Galleryservices;