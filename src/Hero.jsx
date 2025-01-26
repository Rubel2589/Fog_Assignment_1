import React from 'react'

const Hero = () => {
    const fontStyle = {
        fontFamily: 'Inter, sans-serif'
    };
  return (
    <section id="furnito-hero">
       <div className="relative" style={fontStyle}>
            <img src="./hero.png" alt="furnito" className='w-full h-[600px]'/>
            <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 
            -translate-y-1/2 min-h-[20rem] min-w-[40rem] bg-[#fff3e3] rounded-lg">
                <div className="flex flex-col px-8 pt-10 gap-2 ">
                    <span className='leading-relaxed'>New Arrival</span>
                   <div className="flex flex-col gap-1 text-[#b98e2e] text-5xl font-bold">
                     <span className=''>Discover Our </span>
                    <span className=''>New Collection</span>
                   </div>
                    <p className="mt-5 text-justify"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <div className="">
                        <button className='bg-[#b98e2e] px-10 py-3 text-white'>Buy Now</button>
                    </div>
                    
                </div>
            </div>
       </div>
    </section>
  )
}

export default Hero;