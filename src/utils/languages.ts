
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  region: string[];
}

export const supportedLanguages: Language[] = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', region: ['IN-UP', 'IN-MP', 'IN-RJ', 'IN-HR', 'IN-DL', 'IN-UT', 'IN-HP', 'IN-JH', 'IN-CG'] },
  { code: 'en', name: 'English', nativeName: 'English', region: ['IN'] },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: ['IN-WB', 'IN-TR'] },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: ['IN-AP', 'IN-TG'] },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', region: ['IN-MH'] },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: ['IN-TN'] },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', region: ['IN-GJ'] },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: ['IN-KA'] },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: ['IN-KL'] },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', region: ['IN-PB'] },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', region: ['IN-OR'] },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', region: ['IN-AS'] },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', region: ['IN-JK'] }
];

export const translations = {
  hi: {
    appTitle: 'प्रोजेक्ट किसान',
    appSubtitle: 'आपका कृषि सहायक',
    voicePrompt: 'मैं आपकी कैसे मदद कर सकता हूं?',
    voiceSubtitle: 'नीचे दिए गए बटन को दबाकर बोलें',
    listening: 'सुन रहा हूं...',
    diagnoseCrop: 'फसल की जांच',
    marketRates: 'बाजार भाव',
    govtSchemes: 'सरकारी योजनाएं',
    talkToExpert: 'विशेषज्ञ से बात',
    quickActions: 'त्वरित कार्य',
    joinCommunity: 'समुदाय से जुड़ें',
    weatherInfo: 'मौसम की जानकारी',
    home: 'होम',
    scan: 'स्कैन',
    market: 'मार्केट',
    community: 'समुदाय',
    online: 'ऑनलाइन',
    offline: 'ऑफलाइन',
    selectLanguage: 'भाषा चुनें'
  },
  en: {
    appTitle: 'Project Kisaan',
    appSubtitle: 'Your Agriculture Assistant',
    voicePrompt: 'How can I help you?',
    voiceSubtitle: 'Press the button below to speak',
    listening: 'Listening...',
    diagnoseCrop: 'Diagnose Crop',
    marketRates: 'Market Rates',
    govtSchemes: 'Govt Schemes',
    talkToExpert: 'Talk to Expert',
    quickActions: 'Quick Actions',
    joinCommunity: 'Join Community',
    weatherInfo: 'Weather Info',
    home: 'Home',
    scan: 'Scan',
    market: 'Market',
    community: 'Community',
    online: 'Online',
    offline: 'Offline',
    selectLanguage: 'Select Language'
  },
  bn: {
    appTitle: 'প্রজেক্ট কিষান',
    appSubtitle: 'আপনার কৃষি সহায়ক',
    voicePrompt: 'আমি কিভাবে আপনাকে সাহায্য করতে পারি?',
    voiceSubtitle: 'বলতে নিচের বাটনে চাপুন',
    listening: 'শুনছি...',
    diagnoseCrop: 'ফসল নির্ণয়',
    marketRates: 'বাজার দর',
    govtSchemes: 'সরকারি প্রকল্প',
    talkToExpert: 'বিশেষজ্ঞের সাথে কথা',
    quickActions: 'দ্রুত কাজ',
    joinCommunity: 'সম্প্রদায়ে যোগ দিন',
    weatherInfo: 'আবহাওয়া তথ্য',
    home: 'হোম',
    scan: 'স্ক্যান',
    market: 'বাজার',
    community: 'সম্প্রদায়',
    online: 'অনলাইন',
    offline: 'অফলাইন',
    selectLanguage: 'ভাষা নির্বাচন করুন'
  },
  te: {
    appTitle: 'ప్రాజెక్ట్ కిసాన్',
    appSubtitle: 'మీ వ్యవసాయ సహాయకుడు',
    voicePrompt: 'నేను మీకు ఎలా సహాయం చేయగలను?',
    voiceSubtitle: 'మాట్లాడటానికి క్రింది బటన్ నొక్కండి',
    listening: 'వింటున్నాను...',
    diagnoseCrop: 'పంట నిర్ధారణ',
    marketRates: 'మార్కెట్ ధరలు',
    govtSchemes: 'ప్రభుత్వ పథకాలు',
    talkToExpert: 'నిపుణుడితో మాట్లాడండి',
    quickActions: 'త్వరిత చర్యలు',
    joinCommunity: 'సమాజంలో చేరండి',
    weatherInfo: 'వాతావరణ సమాచారం',
    home: 'హోమ్',
    scan: 'స్కాన్',
    market: 'మార్కెట్',
    community: 'సమాజం',
    online: 'ఆన్‌లైన్',
    offline: 'ఆఫ్‌లైన్',
    selectLanguage: 'భాష ఎంచుకోండి'
  },
  ta: {
    appTitle: 'ப்ராஜெக்ட் கிசான்',
    appSubtitle: 'உங்கள் விவசாய உதவியாளர்',
    voicePrompt: 'நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    voiceSubtitle: 'பேசுவதற்கு கீழே உள்ள பொத்தானை அழுத்தவும்',
    listening: 'கேட்கிறேன்...',
    diagnoseCrop: 'பயிர் கண்டறிதல்',
    marketRates: 'சந்தை விலைகள்',
    govtSchemes: 'அரசு திட்டங்கள்',
    talkToExpert: 'நிபுணரிடம் பேசுங்கள்',
    quickActions: 'விரைவு செயல்கள்',
    joinCommunity: 'சமூகத்தில் சேருங்கள்',
    weatherInfo: 'வானிலை தகவல்',
    home: 'ஹோம்',
    scan: 'ஸ்கேன்',
    market: 'மார்க்கெட்',
    community: 'சமூகம்',
    online: 'ஆன்லைன்',
    offline: 'ஆஃப்லைன்',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்'
  }
};

export const getLanguageByRegion = (region: string): string => {
  const language = supportedLanguages.find(lang => 
    lang.region.includes(region) || lang.region.includes('IN')
  );
  return language?.code || 'en';
};

export const detectLanguageFromLocation = async (): Promise<string> => {
  try {
    // Try to get user's location
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    // For demo purposes, we'll use a simple mapping
    // In a real app, you'd use a geolocation service to get state/region
    const { latitude, longitude } = position.coords;
    
    // Simple region detection based on coordinates (this is a basic example)
    // You would typically use a reverse geocoding service
    if (latitude >= 20 && latitude <= 30 && longitude >= 68 && longitude <= 75) {
      return 'gu'; // Gujarat region
    } else if (latitude >= 10 && latitude <= 15 && longitude >= 76 && longitude <= 80) {
      return 'ta'; // Tamil Nadu region
    } else if (latitude >= 15 && latitude <= 20 && longitude >= 73 && longitude <= 80) {
      return 'mr'; // Maharashtra region
    } else if (latitude >= 22 && latitude <= 27 && longitude >= 85 && longitude <= 90) {
      return 'bn'; // West Bengal region
    } else if (latitude >= 13 && latitude <= 18 && longitude >= 77 && longitude <= 82) {
      return 'te'; // Telugu region
    }
    
    return 'hi'; // Default to Hindi
  } catch (error) {
    console.log('Location detection failed, using default language');
    return 'hi'; // Default to Hindi if geolocation fails
  }
};
