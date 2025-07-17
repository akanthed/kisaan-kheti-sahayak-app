import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLanguage } from '@/contexts/LanguageContext';

interface VoiceInputProps {
  onResponse?: (response: string) => void;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onResponse }) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini-api-key') || '');
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();
  const { currentLanguage, t } = useLanguage();

  useEffect(() => {
    // Check if SpeechRecognition is available
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition. Please use Chrome or Edge.",
        variant: "destructive"
      });
      return;
    }

    // Initialize SpeechRecognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognitionRef.current.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      setTranscript(finalTranscript || interimTranscript);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      if (transcript.trim()) {
        processWithGemini(transcript);
      }
    };

    recognitionRef.current.onerror = (event) => {
      setIsListening(false);
      toast({
        title: "Speech Recognition Error",
        description: "Could not recognize speech. Please try again.",
        variant: "destructive"
      });
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [currentLanguage, transcript]);

  const processWithGemini = async (text: string) => {
    if (!apiKey) {
      const userApiKey = prompt("Please enter your Gemini API key to use AI features:");
      if (!userApiKey) return;
      setApiKey(userApiKey);
      localStorage.setItem('gemini-api-key', userApiKey);
    }

    setIsProcessing(true);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = currentLanguage === 'hi' 
        ? `आप एक भारतीय किसान सहायक हैं। निम्नलिखित प्रश्न का उत्तर हिंदी में दें: ${text}`
        : `You are an Indian farming assistant. Answer the following question in English: ${text}`;

      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text();
      
      setResponse(aiResponse);
      onResponse?.(aiResponse);
      
      // Speak the response
      speakResponse(aiResponse);
      
      toast({
        title: "AI Response Generated",
        description: "Voice response is ready!",
      });
    } catch (error) {
      toast({
        title: "AI Error",
        description: "Failed to get AI response. Please check your API key.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-card rounded-lg border">
      <div className="flex items-center justify-center mb-4">
        <Button
          onClick={isListening ? stopListening : startListening}
          disabled={isProcessing}
          size="lg"
          className={`relative ${
            isListening 
              ? 'bg-destructive hover:bg-destructive/90' 
              : 'bg-primary hover:bg-primary/90'
          }`}
        >
          {isListening ? (
            <MicOff className="w-6 h-6" />
          ) : (
            <Mic className="w-6 h-6" />
          )}
          {isListening && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </Button>
      </div>

      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground mb-2">
          {isListening 
            ? (currentLanguage === 'hi' ? 'सुन रहा हूँ...' : 'Listening...') 
            : isProcessing 
              ? (currentLanguage === 'hi' ? 'प्रोसेसिंग...' : 'Processing...') 
              : (currentLanguage === 'hi' ? 'माइक्रोफोन दबाएं और बोलें' : 'Press microphone and speak')
          }
        </p>
        
        {transcript && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium">
              {currentLanguage === 'hi' ? 'आपने कहा:' : 'You said:'}
            </p>
            <p className="text-foreground">{transcript}</p>
          </div>
        )}
      </div>

      {response && (
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-primary">
              {currentLanguage === 'hi' ? 'AI सहायक का उत्तर:' : 'AI Assistant Response:'}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => speakResponse(response)}
            >
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-foreground whitespace-pre-wrap">{response}</p>
        </div>
      )}

      {!apiKey && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            {currentLanguage === 'hi' 
              ? 'AI सुविधा का उपयोग करने के लिए आपको Gemini API Key की आवश्यकता होगी।'
              : 'You need a Gemini API Key to use AI features. Get one from Google AI Studio.'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default VoiceInput;