import React from 'react'

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src="https://ix-marketing.imgix.net/imgix-hero-ai-genfill-4.gif?auto=format,compress?w=1104" alt="product" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>UniversalOutfit</p>
                <p>Casual White Top</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>$199</p>
                <p className='line-through opacity-50'>$1999</p>
                <p className='text-green-600 font-semibold'>70% off</p>
            </div>

        </div>
    </div>
  )
}

export default ProductCard