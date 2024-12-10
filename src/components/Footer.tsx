export default function Footer() {
    return (
      <footer className="bg-gray-100">
        <div className="footer p-10 border-t-2 border-gray-300">
          {/* First Section: Logo and Address */}
          <div className="flex flex-col space-y-4 w-full md:w-1/4 mb-6">
            <h2 className="font-bold text-2xl text-gray-800">Funiro.</h2>
            <p className="text-gray-600 leading-relaxed">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
  
          {/* Second Section: Navigation */}
          <div className="flex flex-wrap justify-between md:flex-row md:space-x-16 space-y-6 md:space-y-0">
            {/* Navbar Section */}
            <div className="w-full md:w-1/4">
              <h4 className="font-semibold text-gray-800 mb-4">Navbar</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Shop</li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">About</li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div className="w-full md:w-1/4">
              <h4 className="font-semibold text-gray-800 mb-4">Help</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Payment Option</li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Returns</li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy Policies</li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div className="w-full md:w-1/4">
              <h4 className="font-semibold text-gray-800 mb-4">Newsletter</h4>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
                <button
                  type="submit"
                  className="font-bold text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center bg-gray-200 py-4">
          <hr className="border-gray-300 mb-2" />
          <p className="text-gray-600">2023 Funiro. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  