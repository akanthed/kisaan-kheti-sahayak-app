
import { useState } from "react";
import { ArrowLeft, MapPin, Phone, Camera, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CropResultScreen = () => {
  const [disease] = useState("Tomato Leaf Blight");
  const [riskLevel] = useState<"High" | "Medium" | "Low">("High");
  const [confidence] = useState(92);

  const getRiskColor = () => {
    if (riskLevel === "High") return "text-red-600 bg-red-50";
    if (riskLevel === "Medium") return "text-yellow-600 bg-yellow-50";
    return "text-green-600 bg-green-50";
  };

  const treatments = [
    {
      type: "जैविक उपचार",
      treatment: "नीम का तेल स्प्रे",
      instructions: "5ml प्रति लीटर पानी में मिलाकर छिड़काव करें"
    },
    {
      type: "रासायनिक उपचार",
      treatment: "Copper Oxychloride",
      instructions: "2 ग्राम प्रति लीटर पानी में मिलाकर उपयोग करें"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/diagnose-crop">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">फसल निदान परिणाम</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Disease Detection Result */}
        <Card className="farmer-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Camera className="text-green-600" size={20} />
              पहचाना गया रोग
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{disease}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor()}`}>
                {riskLevel === "High" ? "उच्च जोखिम" : riskLevel === "Medium" ? "मध्यम जोखिम" : "कम जोखिम"}
              </span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-blue-800">विश्वसनीयता: {confidence}%</span>
              </div>
              <p className="text-sm text-blue-700">
                यह रोग पत्तियों को प्रभावित करता है और फसल की पैदावार को कम कर सकता है।
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Treatment Options */}
        <Card className="farmer-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">सुझाए गए उपचार</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {treatments.map((treatment, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-600">{treatment.type}</span>
                </div>
                <h4 className="font-semibold mb-1">{treatment.treatment}</h4>
                <p className="text-sm text-gray-600">{treatment.instructions}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* What happens if untreated */}
        <Card className="farmer-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="text-orange-500" size={20} />
              यदि इलाज न किया जाए
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-orange-50 p-3 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>7-10 दिनों में पत्तियां पीली पड़ने लगेंगी</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>फसल की पैदावार 30-40% तक कम हो सकती है</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>अन्य पौधों में भी रोग फैल सकता है</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <MapPin size={16} className="mr-2" />
            नजदीकी दुकान खोजें
          </Button>
          
          <Link to="/expert-connect">
            <Button variant="outline" className="w-full">
              <Phone size={16} className="mr-2" />
              विशेषज्ञ से संपर्क करें
            </Button>
          </Link>
          
          <Link to="/">
            <Button variant="outline" className="w-full">
              वापस होम जाएं
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropResultScreen;
