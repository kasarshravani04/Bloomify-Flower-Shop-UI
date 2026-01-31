const Slider = ({ items }) => {
    return (
        <div className="overflow-x-hidden">
            <div className="flex gap-4 flex-nowrap   mt-20 animate-scroll">
                {
                    items && [...items, ...items].map((item, index) => (
                        <div key={index} className="shrink-0 w-64 h-64" >
                            <img src={item} alt={`item-${index}`} loading="lazy"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider;