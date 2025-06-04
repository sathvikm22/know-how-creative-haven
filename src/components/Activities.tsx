
import { useNavigate } from 'react-router-dom';

const Activities = () => {
  const navigate = useNavigate();

  const activities = [
    {
      name: "Tufting",
      description: "Create beautiful rugs and wall hangings with our tufting guns",
      emoji: "🧵",
      color: "from-pink-300 via-orange-300 to-yellow-300"
    },
    {
      name: "Jewelry Making",
      description: "Craft unique pieces from scratch with premium materials",
      emoji: "💎",
      color: "from-blue-300 via-purple-300 to-pink-300"
    },
    {
      name: "Block Printing",
      description: "Traditional printing techniques on fabrics and paper",
      emoji: "🎨",
      color: "from-green-300 via-teal-300 to-blue-300"
    },
    {
      name: "Eco Printing",
      description: "Natural dyeing using leaves and flowers",
      emoji: "🌿",
      color: "from-orange-300 via-green-300 to-teal-300"
    },
    {
      name: "Leather Diaries",
      description: "Hand-bind your own leather journals and notebooks",
      emoji: "📖",
      color: "from-pink-300 via-red-300 to-orange-300"
    },
    {
      name: "Phone Cases",
      description: "Design and create personalized phone accessories",
      emoji: "📱",
      color: "from-blue-300 via-indigo-300 to-purple-300"
    },
    {
      name: "Stuffed Toys",
      description: "Sew adorable plush companions from start to finish",
      emoji: "🧸",
      color: "from-green-300 via-emerald-300 to-teal-300"
    },
    {
      name: "Pottery",
      description: "Shape clay into beautiful functional art pieces",
      emoji: "🏺",
      color: "from-orange-300 via-yellow-300 to-red-300"
    },
    {
      name: "Candle Making",
      description: "Pour and scent your own custom candles",
      emoji: "🕯️",
      color: "from-purple-300 via-pink-300 to-blue-300"
    }
  ];

  const handleBookWorkshop = (activityName: string) => {
    navigate(`/booking?activity=${encodeURIComponent(activityName)}`);
  };

  const handleViewAllActivities = () => {
    navigate('/activities');
  };

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-blue-100 via-green-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            DISCOVER OUR
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              CREATIVE ACTIVITIES
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div
              key={activity.name}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-br ${activity.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {activity.emoji}
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{activity.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{activity.description}</p>
                <button 
                  onClick={() => handleBookWorkshop(activity.name)}
                  className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 text-white py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book Workshop
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={handleViewAllActivities}
            className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            VIEW ALL ACTIVITIES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
