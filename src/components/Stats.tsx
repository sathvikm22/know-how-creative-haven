
const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-green-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Shop DIY Kits
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-pink-300 to-orange-300"></div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-xl">Beginner Kit</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for first-time crafters with all essential materials</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">₹599</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-xl">Advanced Kit</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">For experienced creators with premium tools and materials</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">₹999</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-300 to-teal-300"></div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-xl">Premium Kit</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Complete professional set with exclusive materials</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">₹1499</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
