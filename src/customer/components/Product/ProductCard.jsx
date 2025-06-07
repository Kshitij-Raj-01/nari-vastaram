import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[18rem] m-4 transition-all cursor-pointer' >
        <div className='h-[20rem] '>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>
        <div className="textPart  bg-[#e9c794dc] p-3">
            <div>
                <p className='font-bold opacity-60'>{product.brand}</p>
                <p className=''>{product.titleColor}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>{product.discountedPrice}</p>
                <p className='line-through opacity-50'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPresent}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard