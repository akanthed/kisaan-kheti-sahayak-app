
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mic, Camera, TrendingUp, Building, Users, MessageCircle, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const HomeScreen = () => {
  const [isListening, setIsListening] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const { t, isLoading } = useLanguage();

  const mainFeatures = [
    {
      icon: Camera,
      title: t('diagnoseCrop'),
      subtitle: "Diagnose Crop",
      path: "/diagnose-crop",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: t('marketRates'),
      subtitle: "Market Rates",
      path: "/market-rates",
      color: "bg-blue-500"
    },
    {
      icon: Building,
      title: t('govtSchemes'),
      subtitle: "Govt Schemes",
      path: "/govt-schemes",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: t('talkToExpert'),
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-600">{t('appTitle')}</h1>
            <p className="text-sm text-muted-foreground">{t('appSubtitle')}</p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {isOffline ? (
              <div className="offline-indicator flex items-center gap-1">
                <WifiOff size={12} />
                <span>{t('offline')}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-green-600">
                <Wifi size={16} />
                <span className="text-sm">{t('online')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Voice Input Section */}
        <Card className="p-6 text-center farmer-shadow">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground mb-2">{t('voicePrompt')}</h2>
            <p className="text-sm text-muted-foreground">{t('voiceSubtitle')}</p>
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
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-200">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-700 font-medium">{t('listening')}</span>
              </div>
            </div>
          )}
        </Card>

        {/* Main Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          {mainFeatures.map((feature, index) => (
            <Link key={index} to={feature.path}>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 farmer-shadow border hover:border-green-200">
                <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-4 farmer-shadow">
          <h3 className="font-semibold text-foreground mb-3">{t('quickActions')}</h3>
          <div className="space-y-2">
            <Link to="/community-hub">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle size={16} className="mr-2" />
                {t('joinCommunity')}
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp size={16} className="mr-2" />
              {t('weatherInfo')}
            </Button>
          </div>
        </Card>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
          <div className="grid grid-cols-4 py-2">
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <Building size={20} />
              {t('home')}
            </Button>
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <Camera size={20} />
              {t('scan')}
            </Button>
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <TrendingUp size={20} />
              {t('market')}
            </Button>
            <Button variant="ghost" className="flex-col h-16 text-xs">
              <Users size={20} />
              {t('community')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
