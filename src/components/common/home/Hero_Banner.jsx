import Logo from '../../../assets/logo/logo.Img.png';
import Hero_bg from '../../../assets/Hero_bg.png';
import Outline from '../../../assets/Outline.png';

const Hero_Banner = () => {
  return (
    <section className='mt-20 space-y-16 relative'>

        <div>
            <img src={Logo} alt="Our_Blooms" width={100} height={100} loading="eager" fetchPriority="high"
            className='w-full h-auto object-contain px-12'/>
        </div>

        <div>
            <img src={Hero_bg} alt='red-flower' loading='eager' fetchPriority='high'
             className='w-full h-150 object-cover rounded-4xl'/>
        </div>
            
        <div className='absolute bottom-10 left-10'>
            <img src={Outline} alt='outline' loading='eager'
             className='w-full h-auto object-cover rounded-4xl'/>

             <div className='absolute top-1/2 left-1/2 -translate-1/2 px-6 w-full font-bold '>
                 <span className='block text-center text-sm'>NEW</span>
                 <h4 className='text-center text-2xl my-2'>10% Off Your First Order</h4>
                 <span className='block text-center text-sm'>SPECIAL</span>
            </div>
        </div>

    </section>
  )
}

export default Hero_Banner;