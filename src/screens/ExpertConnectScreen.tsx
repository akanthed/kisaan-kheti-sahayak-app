
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, Share2, MapPin, Star, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExpertConnectScreen = () => {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);

  const experts = [
    {
      name: "डॉ. राजेश कुमार",
      englishName: "Dr. Rajesh Kumar",
      specialization: "फसल रोग विशेषज्ञ",
      experience: "15 वर्ष का अनुभव",
      distance: "2.5 km",
      rating: 4.8,
      languages: ["हिंदी", "पंजाबी", "English"],
      available: true,
      consultationFee: "₹200",
      image: "👨‍⚕️"
    },
    {
      name: "डॉ. प्रिया शर्मा",
      englishName: "Dr. Priya Sharma",
      specialization: "मृदा विज्ञान विशेषज्ञ",
      experience: "12 वर्ष का अनुभव",
      distance: "4.2 km",
      rating: 4.7,
      languages: ["हिंदी", "English"],
      available: true,
      consultationFee: "₹250",
      image: "👩‍⚕️"
    },
    {
      name: "राम सिंह",
      englishName: "Ram Singh",
      specialization: "जैविक खेती सलाहकार",
      experience: "20 वर्ष का अनुभव",
      distance: "1.8 km",
      rating: 4.9,
      languages: ["हिंदी", "पंजाबी", "हरियाणवी"],
      available: false,
      consultationFee: "₹150",
      image: "👨‍🌾"
    },
    {
      name: "डॉ. अनिता वर्मा",
      englishName: "Dr. Anita Verma",
      specialization: "कृषि तकनीक विशेषज्ञ",
      experience: "10 वर्ष का अनुभव",
      distance: "6.1 km",
      rating: 4.6,
      languages: ["हिंदी", "English"],
      available: true,
      consultationFee: "₹300",
      image: "👩‍💼"
    }
  ];

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
            <h1 className="text-lg font-semibold text-gray-800">विशेषज्ञ से संपर्क</h1>
            <p className="text-sm text-gray-600">Expert Connect</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search/Filter */}
        <Card className="p-4 farmer-shadow">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-800">आपके आसपास के विशेषज्ञ</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">सभी</Button>
            <Button variant="outline" size="sm">फसल रोग</Button>
            <Button variant="outline" size="sm">मृदा</Button>
            <Button variant="outline" size="sm">जैविक</Button>
          </div>
        </Card>

        {/* Experts List */}
        <div className="space-y-4">
          {experts.map((expert, index) => (
            <Card key={index} className="p-4 farmer-shadow">
              <div className="flex items-start gap-3">
                <div className="text-4xl">{expert.image}</div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800">{expert.name}</h3>
                    {expert.available ? (
                      <Badge className="bg-green-500 text-white text-xs">उपलब्ध</Badge>
                    ) : (
                      <Badge className="bg-gray-500 text-white text-xs">व्यस्त</Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-1">{expert.englishName}</p>
                  <p className="text-sm font-medium text-blue-800 mb-1">{expert.specialization}</p>
                  <p className="text-xs text-gray-600 mb-2">{expert.experience}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{expert.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500" />
                      <span>{expert.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Languages size={12} className="text-gray-600" />
                    <div className="flex gap-1">
                      {expert.languages.map((lang, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{lang}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-600">शुल्क: </span>
                      <span className="font-medium text-green-600">{expert.consultationFee}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white"
                        disabled={!expert.available}
                      >
                        <Phone size={16} className="mr-1" />
                        कॉल
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={!expert.available}
                      >
                        <MessageCircle size={16} className="mr-1" />
                        चैट
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 size={16} className="mr-1" />
                        शेयर
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <Card className="p-4 farmer-shadow bg-red-50 border-red-200">
          <h3 className="font-semibold text-red-800 mb-2">आपातकालीन सहायता</h3>
          <p className="text-sm text-red-700 mb-3">
            फसल में तत्काल समस्या के लिए 24/7 हेल्पलाइन
          </p>
          <div className="flex gap-2">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Phone size={16} className="mr-1" />
              हेल्पलाइन: 1800-180-1551
            </Button>
          </div>
        </Card>

        {/* Community Option */}
        <Card className="p-4 farmer-shadow">
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-2">समुदाय से जुड़ें</h3>
            <p className="text-sm text-gray-600 mb-3">
              अन्य किसानों के साथ अपनी समस्या साझा करें और समाधान पाएं
            </p>
            <Link to="/community-hub">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <MessageCircle size={16} className="mr-1" />
                समुदाय में जाएं
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExpertConnectScreen;
