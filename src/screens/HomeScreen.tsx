
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mic, Camera, TrendingUp, Building, Users, MessageCircle, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HomeScreen = () => {
  const [isListening, setIsListening] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const mainFeatures = [
    {
      icon: Camera,
      title: "फसल की जांच",
      subtitle: "Diagnose Crop",
      path: "/diagnose-crop",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "बाजार भाव",
      subtitle: "Market Rates",
      path: "/market-rates",
      color: "bg-blue-500"
    },
    {
      icon: Building,
      title: "सरकारी योजनाएं",
      subtitle: "Govt Schemes",
      path: "/govt-schemes",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "विशेषज्ञ से बात",
      subtitle: "Talk to Expert",
      path: "/expert-connect",
      color: "bg-orange-500"
    }
  ];

  const toggleListening = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-800">Project Kisaan</h1>
            <p className="text-sm text-gray-600">आपका कृषि सहायक</p>
          </div>
          <div className="flex items-center gap-2">
            {isOffline ? (
              <div className="offline-indicator flex items-center gap-1">
                <WifiOff size={12} />
                <span>Offline</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-green-600">
                <Wifi size={16} />
                <span className="text-sm">Online</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Voice Input Section */}
        <Card className="p-6 text-center farmer-shadow">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">मैं आपकी कैसे मदद कर सकता हूं?</h2>
            <p className="text-sm text-gray-600">नीचे दिए गए बटन को दबाकर बोलें</p>
          </div>
          
          <Button
            onClick={toggleListening}
            className={`w-24 h-24 rounded-full ${
              isListening ? 'bg-red-500 hover:bg-red-600 voice-ripple' : 'bg-green-500 hover:bg-green-600'
            } transition-all duration-300 farmer-shadow`}
          >
            <Mic size={32} className="text-white" />
          </Button>
          
          {isListening && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-700 font-medium">सुन रहा हूं...</span>
              </div>
            </div>
          )}
        </Card>

        {/* Main Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          {mainFeatures.map((feature, index) => (
            <Link key={index} to={feature.path}>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 farmer-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.subtitle}</p>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-4 farmer-shadow">
          <h3 className="font-semibold text-gray-800 mb-3">त्वरित कार्य</h3>
          <div className="space-y-2">
            <Link to="/community-hub">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle size={16} className="mr-2" />
                समुदाय से जुड़ें
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp size={16} className="mr-2" />
              मौसम की जानकारी
            </Button>
          </div>
        </Card>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
          <div className="grid grid-cols-4 py-2">
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <Building size={20} />
              होम
            </Button>
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <Camera size={20} />
              स्कैन
            </Button>
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <TrendingUp size={20} />
              मार्केट
            </Button>
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <Users size={20} />
              समुदाय
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
