import { ExpoConfig } from "@expo/config-types";
import appJson from "./app.config.json";

export default (): ExpoConfig => {
  return {
    name: "anime-quote",
    slug: "anime-quote",
    version: appJson.expo.version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      versionCode: appJson.expo.android.versionCode,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  };
};
