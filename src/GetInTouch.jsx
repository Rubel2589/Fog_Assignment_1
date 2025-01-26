const GetInTouch = () => {
  return (
    <section className="">
        <div id="get-in-touch-hero">
            <img src="./contactHero.png" alt="" />
        </div>
        <div className="container mx-auto px-6 py-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
                <p className="text-gray-500 mt-2">
                For More Information About Our Product & Services, Please Feel Free To Drop Us
                An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {/* Contact Info */}
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <span className="text-xl">📍</span>
                    <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">
                        236 5th SE Avenue, New York NY10000, United States
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="text-xl">📞</span>
                    <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">
                        Mobile: +(84) 546-6789 <br />
                        Hotline: +(84) 456-6789
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="text-xl">🕒</span>
                    <div>
                    <h3 className="text-lg font-semibold">Working Time</h3>
                    <p className="text-gray-600">
                        Monday–Friday: 9:00 - 22:00 <br />
                        Saturday–Sunday: 9:00 - 21:00
                    </p>
                    </div>
                </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium">Your name</label>
                    <input
                    type="text"
                    placeholder="Abc"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-gray-200 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Email address</label>
                    <input
                    type="email"
                    placeholder="Abc@def.com"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-gray-200 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Subject</label>
                    <input
                    type="text"
                    placeholder="This is an optional"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-gray-200 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Message</label>
                    <textarea
                    placeholder="Hi! I’d like to ask about"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-gray-200 outline-none h-24"
                    ></textarea>
                </div>

                <button className="bg-yellow-700 text-white py-3 px-6 rounded-md hover:bg-yellow-800 transition">
                    Submit
                </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default GetInTouch;