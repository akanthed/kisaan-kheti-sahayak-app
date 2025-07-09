
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, Phone, MapPin, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CropResultScreen = () => {
  const riskLevel = "Medium";
  const riskColor = riskLevel === "High" ? "bg-red-500" : riskLevel === "Medium" ? "bg-yellow-500" : "bg-green-500";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/diagnose-crop">
              <Button variant="ghost" size="sm">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">परिणाम</h1>
              <p className="text-sm text-gray-600">Diagnosis Result</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Share2 size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Disease Detection */}
        <Card className="p-4 farmer-shadow">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">टमाटर में झुलसा रोग</h2>
              <p className="text-sm text-gray-600 mb-2">Tomato Blight Disease</p>
              <Badge className={`${riskColor} text-white`}>
                जोखिम स्तर: {riskLevel}
              </Badge>
            </div>
          </div>
        </Card>

        {/* Image Preview */}
        <Card className="p-4 farmer-shadow">
          <div className="aspect-video bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertTriangle size={24} className="text-green-800" />
              </div>
              <p className="text-green-800 font-medium">रोग की पहचान की गई</p>
            </div>
          </div>
        </Card>

        {/* Treatment Options */}
        <Card className="p-4 farmer-shadow">
          <h3 className="font-semibold text-gray-800 mb-3">उपचार के विकल्प</h3>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-green-800">जैविक उपचार</h4>
              <p className="text-sm text-gray-600 mb-2">Organic Treatment</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• नीम का तेल छिड़काव</li>
                <li>• बेकिंग सोडा समाधान</li>
                <li>• कॉपर सल्फेट</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-blue-800">रासायनिक उपचार</h4>
              <p className="text-sm text-gray-600 mb-2">Chemical Treatment</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• मैन्कोजेब स्प्रे</li>
                <li>• कॉपर ऑक्सीक्लोराइड</li>
                <li>• कार्बेंडाजिम</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* What if untreated */}
        <Card className="p-4 farmer-shadow bg-red-50 border-red-200">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">अगर इलाज नहीं किया तो</h3>
              <div className="space-y-1 text-sm text-red-700">
                <p>• फसल 60-80% तक नुकसान हो सकता है</p>
                <p>• अन्य पौधों में फैल सकता है</p>
                <p>• गुणवत्ता में गिरावट</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Nearby Store */}
        <Card className="p-4 farmer-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">नजदीकी दुकान</h3>
            <MapPin size={16} className="text-gray-600" />
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <h4 className="font-medium text-gray-800">राम एग्रो सेंटर</h4>
            <p className="text-sm text-gray-600">2.3 km away</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline">
                <Phone size={16} className="mr-1" />
                कॉल करें
              </Button>
              <Button size="sm" variant="outline">
                <MapPin size={16} className="mr-1" />
                दिशा
              </Button>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="space-y-3 pb-20">
          <Link to="/expert-connect">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white farmer-shadow">
              <Phone size={20} className="mr-2" />
              विशेषज्ञ से संपर्क करें
            </Button>
          </Link>
          
          <Button variant="outline" className="w-full">
            <CheckCircle size={20} className="mr-2" />
            उपचार पूरा हुआ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CropResultScreen;
