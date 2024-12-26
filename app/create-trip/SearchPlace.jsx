import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import SearchBar from '@/components/SearchBar'
import {FIREBASE_API} from '@/configs/Keys'
import { styles } from '@/styles/SearchPlaceStyles'
import { CreateTripContext } from '@/context/CreateTripContex'

export default function SearchPlace() {
  const navigation = useNavigation()
  useEffect(() => {
		navigation.setOptions({
			headerTransParent: true,
      headerTitle: 'Search'
		})
	}, [])
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

  };
  return (
    <View
      style={styles.container}
    >
      <SearchBar
        apiKey={FIREBASE_API}
        onPlaceSelected={handlePlaceSelected}
      />
    </View>
  )
}