import React from 'react'
import OrderCard from './OrderCard'

const orderStatus = [
  { label: 'On The Way', value: 'on_the_way' },
  { label: 'Delivered', value: 'delivered' },
  { label: 'Cancelled', value: 'cancelled' },
  { label: 'Returned', value: 'returned' },
]

const Order = () => {
  return (
    <div className="grid grid-cols-6 gap-5 px-5 lg:px-20">
      {/* Filter Panel */}
      <div className="col-span-1">
        <div className="w-full h-auto shadow-lg border border-gray-200 bg-[#F1EDE1] p-5 sticky top-5 rounded-md">
          <h1 className="font-bold text-lg">Filter</h1>
          <div className="space-y-4 mt-10">
            <h1 className="font-semibold">ORDER STATUS</h1>
            {orderStatus.map((option) => (
              <div
                key={option.value}
                className="flex items-center transition-all duration-300 ease-out hover:scale-[1.01]"
              >
                <input
                  id={option.value}
                  value={option.value}
                  type="checkbox"
                  className="h-4 w-4 border-2 border-gray-400 text-indigo-600 focus:ring-indigo-500 focus:ring-2 transition duration-300 ease-out rounded"
                />
                <label
                  htmlFor={option.value}
                  className="ml-3 text-sm text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Cards */}
      <div className='col-span-4 space-y-5'>
        {[1,1,1,1,1].map((item)=><OrderCard />)}
      </div>
    </div>
  )
}

export default Order
