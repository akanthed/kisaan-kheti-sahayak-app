
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mic, TrendingUp, TrendingDown, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const MarketRatesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery("टमाटर");
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">बाजार भाव</h1>
            <p className="text-sm text-gray-600">Market Rates</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search Section */}
        <Card className="p-4 farmer-shadow">
          <div className="flex gap-2 mb-3">
            <Input
              placeholder="फसल का नाम बोलें या टाइप करें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={toggleListening}
              className={`${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
            >
              <Mic size={20} />
            </Button>
          </div>
          
          {isListening && (
            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-700 text-sm">सुन रहा हूं...</span>
              </div>
            </div>
          )}
          
          <Button onClick={handleSearch} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            भाव देखें
          </Button>
        </Card>

        {showResults && (
          <>
            {/* Current Rates */}
            <Card className="p-4 farmer-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800">टमाटर - आज का भाव</h3>
                <Badge className="bg-green-500 text-white">
                  <Calendar size={12} className="mr-1" />
                  आज
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">सरकारी MSP</span>
                  </div>
                  <p className="text-xl font-bold text-green-800">₹1,800</p>
                  <p className="text-xs text-gray-600">प्रति क्विंटल</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingDown size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">खुला बाजार</span>
                  </div>
                  <p className="text-xl font-bold text-blue-800">₹1,650</p>
                  <p className="text-xs text-gray-600">प्रति क्विंटल</p>
                </div>
              </div>
            </Card>

            {/* Nearby Mandis */}
            <Card className="p-4 farmer-shadow">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-gray-600" />
                <h3 className="font-semibold text-gray-800">नजदीकी मंडी</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">सिंघु मंडी</h4>
                      <p className="text-sm text-gray-600">8.5 km</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹1,720</p>
                      <p className="text-xs text-gray-600">प्रति क्विंटल</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+5%</span>
                    <span className="text-xs text-gray-600">कल से</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">गाजीपुर मंडी</h4>
                      <p className="text-sm text-gray-600">12.2 km</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">₹1,580</p>
                      <p className="text-xs text-gray-600">प्रति क्विंटल</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">-3%</span>
                    <span className="text-xs text-gray-600">कल से</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Price Trend */}
            <Card className="p-4 farmer-shadow">
              <h3 className="font-semibold text-gray-800 mb-3">मूल्य रुझान</h3>
              
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp size={32} className="text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">7 दिन का मूल्य चार्ट</p>
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600">पिछले सप्ताह से</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <TrendingUp size={16} className="text-green-600" />
                  <span className="font-bold text-green-600">+12%</span>
                  <span className="text-sm text-gray-600">वृद्धि</span>
                </div>
              </div>
            </Card>

            {/* Forecast */}
            <Card className="p-4 farmer-shadow bg-yellow-50 border-yellow-200">
              <h3 className="font-semibold text-gray-800 mb-3">भविष्य का पूर्वानुमान</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">अगले 7 दिन:</span>
                  <span className="font-medium text-yellow-800">₹1,650 - ₹1,750</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">अगले 15 दिन:</span>
                  <span className="font-medium text-yellow-800">₹1,700 - ₹1,850</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">सलाह:</span>
                  <span className="font-medium text-green-800">बेचने का सही समय</span>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Quick Actions */}
        <Card className="p-4 farmer-shadow">
          <h3 className="font-semibold text-gray-800 mb-3">लोकप्रिय खोज</h3>
          <div className="flex flex-wrap gap-2">
            {["गेहूं", "धान", "मक्का", "प्याज", "आलू", "गन्ना"].map((crop) => (
              <Button
                key={crop}
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery(crop);
                  setShowResults(true);
                }}
              >
                {crop}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketRatesScreen;
