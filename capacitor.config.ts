import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.80a471ff59804aa28e7db9646c830f68',
  appName: 'kisaan-kheti-sahayak-app',
  webDir: 'dist',
  server: {
    url: 'https://80a471ff-5980-4aa2-8e7d-b9646c830f68.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      showSpinner: false
    }
  }
};

export default config;