import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import {CreateTripContext} from "@/context/CreateTripContex"
import { useState } from "react"

export default function RootLayout() {
  useFonts({
    'outfit': require('@/assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('@/assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('@/assets/fonts/Outfit-Medium.ttf')
  })
  const [tripData, setTripData] = useState([])
  return (
    <CreateTripContext.Provider
      value={{tripData, setTripData}}
    >
      <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen name='create-trip/SearchPlace' options={{headerShown: false}} />
        <Stack.Screen name='create-trip/SelectTraveller' options={{headerShown: false}} />
      </Stack>
    </CreateTripContext.Provider>
  );
}