import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md bg-[#F1EDE1]'>

        <div className='flex items-center'>

            <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                <img className='w-full h-full object-cover object-top' src="https://dorabyphoenix.com/wp-content/uploads/2023/09/DSC0658.jpg" alt="" />
            </div>

            <div className="ml-5 space-y-1">
                <p className='font-semibold'>Saptapadi Block Print Cotton Saree</p>
                <p className='opacity-70'>Size: L, White</p>
                <p className='opacity-70 mt-2'>Seller: Dora by Phoenix</p>
                <div className="flex space-x-5 items-center pt-6">
                    <p className="font-semibold">₹199</p>
                    <p className="opacity-50 line-through">₹211</p>
                    <p className="text-green-600 font-semibold">5% Off</p>
                </div>
            </div>

        </div>

<div className="lg:flex items-center lg:space-x-10 pt-4">

    <div className="flex items-center space-x-2">
        <IconButton>
            <RemoveCircleOutlineIcon/>
        </IconButton>
        <span className='py-1 px-7 border rounded-sm'>3</span>
        <IconButton sx={{color: 'blueviolet'}}>
            <AddCircleOutlineIcon/>
        </IconButton>
    </div>
     <div className="">
        <Button sx={{color: 'blueviolet'}}>Remove</Button>
     </div>

</div>

    </div>
  )
}

export default CartItem