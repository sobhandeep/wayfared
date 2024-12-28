import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/AddTripStyles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome6'
import { useRouter } from 'expo-router'

export default function AddTripCard() {
  const router = useRouter()
  return (
    <View
      style={styles.container}
    >
      <FontAwesome5 name="location-arrow" size={26} color="black" />
      <Text
        style={styles.headerText}
      >
        No Trips Planned Yet
      </Text>
      <Text
        style={styles.displayText}
      >
        Looks like its time to plan a new travel experience.
        Get Started Below!
      </Text>
      <TouchableOpacity
        onPress={()=>{router.push('/create-trip/SearchPlace')}}
        style={styles.newTripButton}
      >
        <Text
          style={styles.newTripButtonText}
        >
          Start A New Trip
        </Text>
      </TouchableOpacity>
    </View>
  )
}