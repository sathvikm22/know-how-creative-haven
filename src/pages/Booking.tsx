
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, CreditCard, Smartphone, QrCode, Check } from 'lucide-react';
import Navigation from '../components/Navigation';

const Booking = () => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [participants, setParticipants] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const activities = [
    { name: "Tufting", price: 1500, duration: "3 hours" },
    { name: "Jewelry Making", price: 1200, duration: "2.5 hours" },
    { name: "Block Printing", price: 800, duration: "2 hours" },
    { name: "Eco Printing", price: 900, duration: "2.5 hours" },
    { name: "Leather Diaries", price: 1100, duration: "3 hours" },
    { name: "Phone Cases", price: 700, duration: "1.5 hours" },
    { name: "Stuffed Toys", price: 1300, duration: "4 hours" },
    { name: "Pottery", price: 1000, duration: "2.5 hours" },
    { name: "Candle Making", price: 600, duration: "1.5 hours" }
  ];

  const timeSlots = [
    "9:00 AM - 12:00 PM",
    "1:00 PM - 4:00 PM",
    "5:00 PM - 8:00 PM"
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'upi', name: 'UPI', icon: QrCode },
    { id: 'phonepe', name: 'PhonePe', icon: Smartphone },
    { id: 'googlepay', name: 'Google Pay', icon: Smartphone }
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const activity = urlParams.get('activity');
    if (activity) {
      setSelectedActivity(activity);
    }
  }, []);

  const selectedActivityData = activities.find(a => a.name === selectedActivity);
  const totalAmount = selectedActivityData ? selectedActivityData.price * participants : 0;

  const handleBooking = () => {
    if (!selectedActivity || !selectedDate || !selectedTime || !selectedPayment) {
      alert('Please fill in all required fields');
      return;
    }
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100">
        <Navigation />
        <div className="pt-20 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
              <p className="text-gray-600">Your creative journey awaits</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
              <div className="space-y-2 text-left">
                <p><strong>Activity:</strong> {selectedActivity}</p>
                <p><strong>Date:</strong> {selectedDate}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Participants:</strong> {participants}</p>
                <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
                <p><strong>Payment Method:</strong> {paymentMethods.find(p => p.id === selectedPayment)?.name}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Back to Home
              </button>
              <button 
                onClick={() => window.print()}
                className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-full font-medium hover:bg-orange-50 transition-all duration-300"
              >
                Print Confirmation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100">
      <Navigation />
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6">
              <h1 className="text-3xl font-bold text-white">Book Your Creative Session</h1>
              <p className="text-yellow-100 mt-2">Choose your activity and preferred time slot</p>
            </div>

            <div className="p-6 space-y-8">
              {/* Activity Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3 text-sm font-bold">1</span>
                  Select Activity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.name}
                      onClick={() => setSelectedActivity(activity.name)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedActivity === activity.name
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <h3 className="font-semibold">{activity.name}</h3>
                      <p className="text-sm text-gray-600">{activity.duration}</p>
                      <p className="text-lg font-bold text-orange-600">₹{activity.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3 text-sm font-bold">2</span>
                  Select Date
                </h2>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Time Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3 text-sm font-bold">3</span>
                  Select Time Slot
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedTime === slot
                          ? 'border-orange-500 bg-orange-50 text-orange-600'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <Clock className="w-5 h-5 mx-auto mb-2" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Participants */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3 text-sm font-bold">4</span>
                  Number of Participants
                </h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{participants}</span>
                  <button
                    onClick={() => setParticipants(Math.min(10, participants + 1))}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3 text-sm font-bold">5</span>
                  Payment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 rounded-xl border-2 flex items-center space-x-3 transition-all ${
                          selectedPayment === method.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span>{method.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary and Book Button */}
              {selectedActivityData && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>{selectedActivity} × {participants}</span>
                      <span>₹{selectedActivityData.price * participants}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{totalAmount}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleBooking}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Complete Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
