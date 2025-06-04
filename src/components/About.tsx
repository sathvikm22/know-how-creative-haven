
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
              <div className="bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 rounded-3xl p-6 h-48 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-2">🧸</span>
                <h3 className="font-semibold text-gray-800">Stuffed Toys</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-200 via-green-200 to-teal-200 rounded-3xl p-6 h-48 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300 mt-8">
                <span className="text-4xl mb-2">📖</span>
                <h3 className="font-semibold text-gray-800">Leather Diaries</h3>
              </div>
              <div className="bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-3xl p-6 h-48 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300 -mt-8">
                <span className="text-4xl mb-2">🌿</span>
                <h3 className="font-semibold text-gray-800">Eco Printing</h3>
              </div>
              <div className="bg-gradient-to-br from-orange-200 via-pink-200 to-red-200 rounded-3xl p-6 h-48 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-2">📱</span>
                <h3 className="font-semibold text-gray-800">Phone Cases</h3>
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
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">5,000+</div>
                <div className="text-gray-600">Happy Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600">Unique Activities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
