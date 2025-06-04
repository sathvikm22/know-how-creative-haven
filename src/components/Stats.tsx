
const Stats = () => {
  const stats = [
    { number: "5,000+", label: "Happy Creators", color: "text-pink-600" },
    { number: "50+", label: "Unique Activities", color: "text-orange-600" },
    { number: "15+", label: "Expert Instructors", color: "text-blue-600" },
    { number: "100+", label: "5-Star Reviews", color: "text-green-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-500 via-blue-500 to-green-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse">
                {stat.number}
              </div>
              <div className="text-lg font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
