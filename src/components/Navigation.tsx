
import { useState, useEffect } from 'react';
import { Menu, X, LogOut, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setUserName(storedUser);
    }
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    const currentPath = window.location.pathname;
    if (currentPath !== '/home') {
      // Navigate to home page first, then scroll
      navigate('/home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', action: () => scrollToSection('home') },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Activities', action: () => scrollToSection('activities') },
    { name: 'Gallery', action: () => scrollToSection('testimonials') },
    { name: 'Location', action: () => scrollToSection('location') },
    { name: 'Contact', action: () => scrollToSection('contact') }
  ];

  const handleBookNow = () => {
    navigate('/booking');
  };

  const handleLogin = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-purple-600 dark:bg-gray-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Know How */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/lovable-uploads/70d53855-15d8-48b4-9670-ee7b769f185c.png" 
              alt="Know How Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold text-white">
              Know How
            </span>
          </div>
          
          {/* Center - Navigation Items */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-white hover:text-yellow-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right side - User actions and dark mode toggle */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-yellow-300 p-2 rounded-lg transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {userName ? (
              <>
                <button 
                  onClick={handleBookNow}
                  className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap"
                >
                  Book Now
                </button>
                <span className="text-white text-sm font-medium px-3 py-1.5 bg-pink-500 rounded-lg">{userName}</span>
                <button 
                  onClick={handleLogout}
                  className="bg-yellow-400 text-gray-800 p-1.5 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  <LogOut size={16} />
                </button>
              </>
            ) : (
              <button 
                onClick={handleLogin}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors duration-300"
              >
                Login
              </button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-yellow-300 p-2"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 dark:bg-gray-800 border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className="text-white hover:text-yellow-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            {userName ? (
              <div className="pt-4 border-t border-white/20 space-y-2">
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-orange-500 text-white px-3 py-2 rounded-md font-medium"
                >
                  Book Now
                </button>
                <div className="text-white font-medium px-3 py-2 bg-pink-500 rounded-md">{userName}</div>
                <button 
                  onClick={handleLogout}
                  className="w-full bg-yellow-400 text-gray-800 px-3 py-2 rounded-md font-medium flex items-center justify-center"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLogin}
                className="w-full bg-pink-500 text-white px-3 py-2 rounded-md font-medium mt-4"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
