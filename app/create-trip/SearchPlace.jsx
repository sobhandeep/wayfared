import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useRouter } from 'expo-router'
import SearchBar from '@/components/SearchBar'
import {FIREBASE_API} from '@/constants/Keys'
import { styles } from '@/styles/SearchPlaceStyles'
import { CreateTripContext } from '@/context/CreateTripContex'
import { Ionicons } from '@expo/vector-icons'

export default function SearchPlace() {
  const router = useRouter()
  const {tripData, setTripData} = useContext(CreateTripContext)
  const handlePlaceSelected = (place, details) => {
    setTripData({
      locationInfo: {
        name: place.description,
        coordinates: details?.geometry.location,
        photoRef: details?.photos[0]?.photo_reference,
        url: details?.url
      }
    })
    router.push('/create-trip/SelectTraveller')

  };
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.titleContainer}
      >
         <TouchableOpacity
          style={styles.backButton}
          onPress={()=> {router.back()}}
        >
          <Ionicons name='arrow-back' size={24}/>
        </TouchableOpacity>
        <Text
          style={styles.titleText}
        >
          Search
        </Text>
      </View>
      <SearchBar
        apiKey={FIREBASE_API}
        onPlaceSelected={handlePlaceSelected}
      />
    </View>
  )
}