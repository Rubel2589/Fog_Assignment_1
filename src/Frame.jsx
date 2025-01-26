import { Trophy, ShieldCheck, Package, Headphones } from "lucide-react";

const Frame = () => {
  return (
    <section className="bg-[#f9f4ee] py-8 mt-10">
      <div className="container mx-auto flex flex-wrap justify-around items-center gap-8">
        
        {/* High Quality */}
        <div className="flex items-center space-x-4">
          <Trophy className="w-12 h-12 text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">High Quality</h3>
            <p className="text-gray-500">crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4">
          <ShieldCheck className="w-12 h-12 text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">Warranty Protection</h3>
            <p className="text-gray-500">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-4">
          <Package className="w-12 h-12 text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">Free Shipping</h3>
            <p className="text-gray-500">Order over 150 $</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4">
          <Headphones className="w-12 h-12 text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">24 / 7 Support</h3>
            <p className="text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame;