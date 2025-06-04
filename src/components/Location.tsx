
const Location = () => {
  return (
    <section id="location" className="py-20 bg-orange-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              FIND YOUR
              <br />
              <span className="text-pink-600">
                CREATIVE
              </span>
              <br />
              SPACE
            </h2>
            
            <div className="mb-8 bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg">
              <h3 className="font-bold text-xl mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="text-2xl mr-3">📍</span>
                Main Studio Location
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="text-lg"><strong>Address:</strong> No.716 17th Main, 38th Cross</p>
                <p className="text-lg">4th T Block, Jayanagar</p>
                <p className="text-lg">Bangalore - 560041</p>
                <p className="text-lg"><strong>Phone:</strong> 9591032562</p>
              </div>
            </div>
            
            <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-pink-600">
              GET DIRECTIONS
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-green-200 dark:from-gray-600 dark:to-gray-700 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '30px 30px'
                 }}>
              
              {/* Map Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-gray-400 dark:border-gray-300"></div>
                  ))}
                </div>
              </div>
              
              {/* Location Marker */}
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4 animate-bounce">📍</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Find Us Here</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">Jayanagar, Bangalore</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Where creativity comes to life</p>
              </div>
              
              {/* Map Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/3 left-4 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-ping"></div>
              
              {/* Street Lines */}
              <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gray-400 opacity-30"></div>
              <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gray-400 opacity-30"></div>
              <div className="absolute left-0 top-1/3 w-full h-0.5 bg-gray-400 opacity-30"></div>
              <div className="absolute left-0 bottom-1/3 w-full h-0.5 bg-gray-400 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
