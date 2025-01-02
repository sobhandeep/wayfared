import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "@/components/OnboardingScreen"
import { auth } from "@/configs/FireBaseConfig"
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import SignIn  from './auth/signin/index'

export default function Index() {
  const [isFirstTime, setIsFirstTime] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem('hasLaunched');
        if (isFirstLaunch === null) {
          await AsyncStorage.setItem('hasLaunched', 'true');
          setIsFirstTime(true);
        } else {
          setIsFirstTime(false);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      }
    };
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    checkFirstTime();
    return () => unsubscribe();
  }, []);

  if (isFirstTime === null || isLoggedIn === null) {
    return <View />;
  }
  if (isFirstTime) {
    return (
      <View style={{ flex: 1 }}>
        <OnboardingScreen />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <Redirect href={'/MyTrip'}/> : <SignIn/>}
    </View>
  );
};