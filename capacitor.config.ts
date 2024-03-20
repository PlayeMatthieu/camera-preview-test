import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'be.playe.cameraPreview',
  appName: 'camera-preview',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
