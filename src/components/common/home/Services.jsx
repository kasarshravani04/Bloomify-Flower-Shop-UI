
import {servicesData} from "../../../data/ServicesData";
import WhatWeDoCard from "../../ui/WhatWeDoCard";

const Services = () => {
  return (
    <section className='layout my-16 space-y-6'>
        <header className=' flex flex-col items-center text-center gap-2'>
            <h2 className='font-bold text-5xl'>WHAT WE DO</h2>
            <p lassName='text-xl font-normal'>
                We bring a touch of that simple magic into your world.
            </p>
        </header>
        <div>
            {servicesData &&
               servicesData.map((item) => (
                <WhatWeDoCard item={item} />
               ))}
        </div>
    </section>
  );
};

export default Services;