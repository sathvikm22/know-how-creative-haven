
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, CreditCard } from 'lucide-react';

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [kitType, setKitType] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (!storedUser) {
      navigate('/');
    }
    
    if (location.state?.kitType) {
      setKitType(location.state.kitType);
    }
  }, [navigate, location.state]);

  const getKitDetails = (type: string) => {
    switch (type) {
      case 'Beginner Kit':
        return {
          price: 599,
          description: 'Perfect for first-time crafters with all essential materials',
          includes: ['Basic crafting tools', 'Instruction manual', 'Starter materials', 'Safety equipment']
        };
      case 'Advanced Kit':
        return {
          price: 999,
          description: 'For experienced creators with premium tools and materials',
          includes: ['Premium tools', 'Advanced materials', 'Project templates', 'Video tutorials']
        };
      case 'Premium Kit':
        return {
          price: 1499,
          description: 'Complete professional set with exclusive materials',
          includes: ['Professional tools', 'Exclusive materials', 'Personal consultation', 'Lifetime support']
        };
      default:
        return { price: 0, description: '', includes: [] };
    }
  };

  const kitDetails = getKitDetails(kitType);
  const totalPrice = kitDetails.price * quantity;

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handlePurchase = () => {
    // This would typically integrate with a payment system
    alert(`Purchase confirmed for ${quantity} x ${kitType}(s) - Total: ₹${totalPrice}`);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-pink-200 dark:from-orange-300 dark:to-pink-300 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-24 w-24 text-orange-600" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{kitType}</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{kitDetails.description}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {kitDetails.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-gray-800 dark:text-white">Quantity:</span>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="text-lg font-medium text-gray-800 dark:text-white px-3">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium text-gray-800 dark:text-white">Price per item:</span>
                    <span className="text-lg font-medium text-gray-800 dark:text-white">₹{kitDetails.price}</span>
                  </div>

                  <div className="flex items-center justify-between mb-6 text-xl font-bold">
                    <span className="text-gray-800 dark:text-white">Total:</span>
                    <span className="text-orange-600">₹{totalPrice}</span>
                  </div>

                  <Button
                    onClick={handlePurchase}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    size="lg"
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Purchase Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
