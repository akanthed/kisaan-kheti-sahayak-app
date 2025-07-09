
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Volume2, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GovtSchemeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location] = useState("गुरुग्राम, हरियाणा");

  const schemes = [
    {
      name: "किसान सम्मान निधि",
      englishName: "PM Kisan Samman Nidhi",
      benefits: "₹6,000 प्रति वर्ष",
      description: "सभी किसान परिवारों को सालाना 6,000 रुपये की आर्थिक सहायता",
      eligibility: "2 हेक्टेयर तक भूमि",
      status: "Available",
      color: "bg-green-500"
    },
    {
      name: "प्रधानमंत्री फसल बीमा योजना",
      englishName: "PM Fasal Bima Yojana",
      benefits: "फसल बीमा कवर",
      description: "प्राकृतिक आपदा से फसल नुकसान की भरपाई",
      eligibility: "सभी किसान",
      status: "Available",
      color: "bg-blue-500"
    },
    {
      name: "मुद्रा योजना",
      englishName: "Mudra Yojana",
      benefits: "₹10 लाख तक लोन",
      description: "कृषि व्यवसाय के लिए बिना गारंटी के लोन",
      eligibility: "कृषि उद्यमी",
      status: "Available",
      color: "bg-purple-500"
    },
    {
      name: "पीएम किसान मानधन योजना",
      englishName: "PM Kisan Maandhan Yojana",
      benefits: "₹3,000 मासिक पेंशन",
      description: "60 वर्ष की आयु के बाद मासिक पेंशन",
      eligibility: "18-40 वर्ष की आयु",
      status: "Available",
      color: "bg-orange-500"
    }
  ];

  const speakScheme = (scheme: any) => {
    console.log(`Speaking about ${scheme.name}`);
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
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">सरकारी योजनाएं</h1>
            <p className="text-sm text-gray-600">Government Schemes</p>
          </div>
          <Button variant="ghost" size="sm">
            <Filter size={20} />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Location Status */}
        <Card className="p-4 farmer-shadow bg-green-50 border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-green-600" />
            <span className="text-sm font-medium text-green-800">स्थान का पता चल गया</span>
          </div>
          <p className="text-sm text-green-700">{location}</p>
          <p className="text-xs text-gray-600 mt-1">आपके क्षेत्र के लिए उपलब्ध योजनाएं दिखाई जा रही हैं</p>
        </Card>

        {/* Schemes List */}
        <div className="space-y-4">
          {schemes.map((scheme, index) => (
            <Card key={index} className="p-4 farmer-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800">{scheme.name}</h3>
                    <Badge className={`${scheme.color} text-white text-xs`}>
                      उपलब्ध
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{scheme.englishName}</p>
                  <div className="bg-green-50 rounded-lg p-2 mb-2">
                    <p className="text-sm font-medium text-green-800">{scheme.benefits}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => speakScheme(scheme)}
                  className="text-blue-600"
                >
                  <Volume2 size={16} />
                </Button>
              </div>

              <p className="text-sm text-gray-700 mb-3">{scheme.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-gray-600">पात्रता: </span>
                  <span className="font-medium">{scheme.eligibility}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                  <ExternalLink size={16} className="mr-1" />
                  आवेदन करें
                </Button>
                <Button size="sm" variant="outline">
                  विस्तार देखें
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="p-4 farmer-shadow bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">सहायता चाहिए?</h3>
          <p className="text-sm text-blue-700 mb-3">
            योजनाओं के बारे में अधिक जानकारी के लिए नीचे दिए गए विकल्प का चुनाव करें
          </p>
          <div className="space-y-2">
            <Link to="/expert-connect">
              <Button variant="outline" className="w-full justify-start border-blue-300">
                <Volume2 size={16} className="mr-2" />
                विशेषज्ञ से बात करें
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start border-blue-300">
              <ExternalLink size={16} className="mr-2" />
              हेल्पलाइन: 1800-123-4567
            </Button>
          </div>
        </Card>

        {/* Application Status */}
        <Card className="p-4 farmer-shadow">
          <h3 className="font-semibold text-gray-800 mb-3">आवेदन की स्थिति</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">PM किसान सम्मान निधि</span>
              <Badge className="bg-green-500 text-white">स्वीकृत</Badge>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">फसल बीमा योजना</span>
              <Badge className="bg-yellow-500 text-white">प्रक्रिया में</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GovtSchemeScreen;
