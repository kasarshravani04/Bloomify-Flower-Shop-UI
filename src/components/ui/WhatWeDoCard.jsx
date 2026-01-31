
const WhatWeDoCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="py-10 px-6 border-t last:border-b border-grey flex flex-col gap-12 items-center text-center">
      <span className="font-bold text-5xl">{item.id}</span>
      <img
        src={item.src}
        alt={item.heading}
        fetchPriority="low"
        loading="lazy"
        width="auto"
        height={100}
        className="w-44 h-44 rounded-4xl"
      />
      <div>
        <h3 className="font-bold text-4xl md:text-5xl">
          {item.heading}
        </h3>
        <p className="text-text text-xl mt-4 sm:mt-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;