

const GalleryImg = ({item}) => {
  return (
    <div className="flex flex-col space-y-3" key={item.id}>
        <div className="flex flex-row gap-2">
            <h3 className="text-md font-semibold uppercase">{item.name}</h3>
            <p className="text-md font-bold text-gray-500">{item.price}</p>
        </div>
        <div className="rounded-2xl overflow-hidden">
            <img src={item.img} alt={item.name}
            className=" object-cover
            w-full
            h-full
            rounded-2xl
            transition-transform
            duration-300
            hover:scale-105"
            />
        </div>

    </div>
  )
}

export default GalleryImg;