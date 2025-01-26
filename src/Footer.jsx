const Footer = () => {
  return (
    <footer className="bg-white  border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold">Funiro.</h2>
          <p className="text-gray-500 mt-2">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="text-gray-400 font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 text-black">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold">Help</h3>
            <ul className="mt-2 space-y-2 text-black">
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400 font-semibold">Newsletter</h3>
          <div className="mt-2 flex border-b border-black">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="bg-transparent outline-none w-full text-black"
            />
            <button className="font-semibold">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8">
        <p className="text-lg text-gray-600 py-4 ">
          2023 Funiro. All rights reserved
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;