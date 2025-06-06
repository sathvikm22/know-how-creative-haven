
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-100 via-pink-100 to-blue-100 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 opacity-60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Creative Sanctuary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/58a6ea81-e970-4f76-91c6-310e164750bb.png" 
                  alt="Stuffed Toys"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                  <h3 className="font-semibold text-white text-lg">Stuffed Toys</h3>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 mt-8 relative">
                <img 
                  src="/lovable-uploads/684d6c8c-1895-47c7-b7be-e2d7a44e6c96.png" 
                  alt="Leather Diaries"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                  <h3 className="font-semibold text-white text-lg">Leather Diaries</h3>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 -mt-8 relative">
                <img 
                  src="/lovable-uploads/e4b0cebd-ad63-46df-ab86-93e5e7e2c162.png" 
                  alt="Eco Printing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                  <h3 className="font-semibold text-white text-lg">Eco Printing</h3>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 relative">
                <img 
                  src="/lovable-uploads/887b2e15-4db6-4df9-abf1-52f7eb21589b.png" 
                  alt="Phone Cases"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                  <h3 className="font-semibold text-white text-lg">Phone Cases</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Born out of a passion for the perfect creative experience, Know How is your go-to destination for 
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"> exceptional</span> artistic exploration. 
              We source responsibly, craft meticulously, and deliver joy in every workshop.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to a world where every day matters, where creativity flows freely, and where 
              your artistic journey becomes an unforgettable experience.
            </p>
            
            {/* DIY Kits E-commerce Section */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop DIY Kits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-300 to-orange-300"></div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Beginner Kit</h4>
                    <p className="text-sm text-gray-600 mb-3">Perfect for first-time crafters</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-600">₹599</span>
                      <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Advanced Kit</h4>
                    <p className="text-sm text-gray-600 mb-3">For experienced creators</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-600">₹999</span>
                      <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-green-300 to-teal-300"></div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Premium Kit</h4>
                    <p className="text-sm text-gray-600 mb-3">Complete professional set</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-600">₹1499</span>
                      <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
