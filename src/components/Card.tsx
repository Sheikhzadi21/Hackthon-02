import React from 'react';
import Image from 'next/image';

const Cart = () => {
  return (
    <div>
      {/* Background Image */}
      <Image 
        src="/shophero.png" 
        alt="Cart background" 
        width={1440} 
        height={316} 
        priority 
        className="w-full object-cover"
      />

      {/* Cart Section */}
      <div className="flex justify-evenly p-8 bg-[#F9F1E7]">
        {/* Product Table */}
        <div className="min-h-screen flex items-start justify-center w-full">
          <div className="p-6 max-w-5xl w-full">
            {/* Cart Header */}
            <div className="flex justify-between items-center py-3 border-b">
              <h2 className="font-semibold text-[16px]">Product</h2>
              <div className="flex w-full justify-between pl-16">
                <h2 className="font-semibold text-[16px]">Price</h2>
                <h2 className="font-semibold text-[16px]">Quantity</h2>
                <h2 className="font-semibold text-[16px]">Subtotal</h2>
              </div>
            </div>

            {/* Cart Items */}
            <div className="mt-8">
              <div className="flex items-center justify-between border-b pb-4">
                {/* Product Image and Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src="/sofa.png"
                    alt="Asgaard sofa"
                    width={108}
                    height={105}
                    className="object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#9F9F9F] text-[16px] font-medium">Asgaard sofa</h3>
                  </div>
                </div>
                {/* Price, Quantity, Subtotal */}
                <div className="flex items-center justify-between w-full pl-16">
                  <p className="text-gray-500">Rs. 250,000.00</p>
                  <input 
                    type="number"
                    defaultValue="1"
                    className="w-12 border rounded-md text-center py-1"
                  />
                  <p className="text-black">Rs. 250,000.00</p>
                  <button className="text-red-500 hover:text-red-700">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#FAF3EA] p-6 w-[350px]">
          <h2 className="text-[32px] font-semibold text-center mb-6">Cart Totals</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg">Subtotal</span>
              <span className="text-[#9F9F9F] text-lg">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">Total</span>
              <span className="text-[#B88E2F] text-lg">Rs. 250,000.00</span>
            </div>
          </div>
          <button className="w-full mt-6 py-3 bg-black text-white rounded-md hover:bg-[#B88E2F] transition">
            Check Out
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-12">
        <div className="flex justify-center space-x-16 items-center">
          <div className="text-center">
            <Image src="/Tofi.png" alt="High Quality" width={53} height={60} />
            <h2 className="text-[25px] font-semibold mt-4">High Quality</h2>
            <p className="text-[20px] text-[#898989]">crafted from top materials</p>
          </div>
          <div className="text-center">
            <Image src="/guarantee.png" alt="Warranty" width={53} height={60} />
            <h2 className="text-[25px] font-semibold mt-4">Warranty Protection</h2>
            <p className="text-[20px] text-[#898989]">Over 2 years</p>
          </div>
          <div className="text-center">
            <Image src="/shipping.png" alt="Free Shipping" width={53} height={60} />
            <h2 className="text-[25px] font-semibold mt-4">Free Shipping</h2>
            <p className="text-[20px] text-[#898989]">Order over 150 $</p>
          </div>
          <div className="text-center">
            <Image src="/customer-support.png" alt="24/7 Support" width={53} height={60} />
            <h2 className="text-[25px] font-semibold mt-4">24 / 7 Support</h2>
            <p className="text-[20px] text-[#898989]">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
