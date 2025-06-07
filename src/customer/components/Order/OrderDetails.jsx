import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-5">
      {/* Delivery Address */}
      <div className='bg-[#F1EDE1] p-5 rounded-lg'>
        <h1 className="py-7 text-xl font-bold">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      {/* Product Cards */}
      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center shadow-xl rounded-md p-5 border hover:shadow-2xl transition duration-300 bg-[#F1EDE1]"
          >
            {/* Product Info */}
            <div className="col-span-8 flex items-start">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
                alt="Product"
                className="w-20 h-20 object-cover object-top rounded-md"
              />
              <div className="ml-5 space-y-1 text-sm">
                <p className="font-medium">Men Slim Mid Rise Black Jeans</p>
                <p className="text-gray-600">
                  <span className="mr-3">Color: Black</span>
                  <span>Size: M</span>
                </p>
                <p className="text-gray-600">Seller: Linaria</p>
                <p className="text-black font-semibold">₹1099</p>
              </div>
            </div>

            {/* Rate & Review */}
            <div className="col-span-4 flex flex-col items-center text-center">
              <StarBorderIcon className="text-[#673AB7] !w-10 !h-10" />
              <span className="text-sm mt-2 text-[#673AB7] font-medium">
                Rate & Review Product
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
