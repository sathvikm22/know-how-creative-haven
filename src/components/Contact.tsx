

import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleBookWorkshop = () => {
    navigate('/booking');
  };

  return (
    <section id="contact" className="py-20 bg-pink-500 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          WHERE EVERY EXPERIENCE
          <br />
          TELLS A STORY
        </h2>
        
        <p className="text-xl text-white/90 mb-4">
          TO ADD A SMILE
        </p>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Ready to start your creative journey? We're here to help you discover 
          the perfect workshop for your artistic adventure.
        </p>
        
        <div className="flex justify-center mb-12">
          <button 
            onClick={handleBookWorkshop}
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            BOOK A WORKSHOP
          </button>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
            <div className="text-center">
              <h3 className="font-bold mb-4 text-2xl flex items-center justify-center">
                <span className="text-3xl mr-4">📞</span>
                Ring Us Up
              </h3>
              <p className="text-white/90 text-2xl font-medium">9591032562</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4 text-2xl flex items-center justify-center">
                <span className="text-3xl mr-4">🏠</span>
                Knock Us At
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                No.716 17th Main, 38th Cross,<br />
                4th T Block, Jayanagar,<br />
                Bangalore - 560041
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4 text-2xl flex items-center justify-center">
                <span className="text-3xl mr-4">📧</span>
                Email Us
              </h3>
              <p className="text-white/90 text-lg">hello@knowhow.studio</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4 text-2xl flex items-center justify-center">
                <span className="text-3xl mr-4">⏰</span>
                Hours
              </h3>
              <p className="text-white/90 text-lg">Mon-Sun: 9AM - 9PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

