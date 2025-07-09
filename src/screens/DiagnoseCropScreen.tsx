
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Camera, Upload, ArrowLeft, Flashlight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DiagnoseCropScreen = () => {
  const [captureMode, setCaptureMode] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const navigate = useNavigate();

  const handleCapture = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate("/crop-result");
    }, 3000);
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">विश्लेषण कर रहे हैं...</h2>
          <p className="text-gray-600">कृपया प्रतीक्षा करें</p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-lg font-semibold text-gray-800">फसल की जांच</h1>
            <p className="text-sm text-gray-600">Crop Diagnosis</p>
          </div>
        </div>
      </div>

      {!captureMode ? (
        // Initial Screen
        <div className="p-4 space-y-6">
          <Card className="p-6 text-center farmer-shadow">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={32} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">फसल की तस्वीर लें</h2>
              <p className="text-sm text-gray-600">बेहतर परिणाम के लिए निम्नलिखित निर्देशों का पालन करें</p>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => setCaptureMode(true)}
                className="w-full bg-green-500 hover:bg-green-600 text-white farmer-shadow"
              >
                <Camera size={20} className="mr-2" />
                कैमरा खोलें
              </Button>
              
              <Button variant="outline" className="w-full">
                <Upload size={20} className="mr-2" />
                गैलरी से चुनें
              </Button>
            </div>
          </Card>

          {/* Photography Tips */}
          <Card className="p-4 farmer-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">बेहतर तस्वीर के लिए टिप्स</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">अच्छी रोशनी में फोटो खींचें</p>
                  <p className="text-xs text-gray-600">Take photo in good lighting</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">पत्ते या फल के करीब जाएं</p>
                  <p className="text-xs text-gray-600">Get close to leaves or fruits</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">फोन को स्थिर रखें</p>
                  <p className="text-xs text-gray-600">Keep phone steady</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        // Camera Mode
        <div className="relative h-screen bg-black">
          {/* Camera Viewfinder */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">
            <div className="text-white text-center">
              <Camera size={48} className="mx-auto mb-4" />
              <p>कैमरा व्यू</p>
              <p className="text-sm opacity-75">Camera View</p>
            </div>
          </div>

          {/* Camera Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>

            {/* Focus Frame */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/60 rounded-lg">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>
            </div>
          </div>

          {/* Camera Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCaptureMode(false)}
                className="text-white"
              >
                <ArrowLeft size={20} />
              </Button>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-white">
                  <Flashlight size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white">
                  <RotateCcw size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <Button
                onClick={handleCapture}
                className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 text-black"
              >
                <Camera size={24} />
              </Button>
            </div>

            <div className="text-center mt-3">
              <p className="text-white text-sm">पत्ते या फल को फ्रेम में रखें</p>
              <p className="text-white/70 text-xs">Keep leaves or fruits in frame</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnoseCropScreen;
