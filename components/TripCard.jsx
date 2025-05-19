import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './../styles/TripCardStyles'
<<<<<<< HEAD
=======
import {GOOGLE_CLOUD_API} from './../constants/Keys'
>>>>>>> 5aaecb63745aea033836ede3cb42c2086831eb8d
import { useRouter } from 'expo-router'
import { GOOGLE_CLOUD_API } from '../constants/Keys'

export default function TripCard({trip}) {
  const router = useRouter()
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push({pathname: '/trip-details/TripDetails', params: {trip: JSON.stringify(trip)}})}
    >
      <Image 
        source={{uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${trip?.photoRef}&key=${GOOGLE_CLOUD_API}`}}
        style={styles.image}
      />
      <View>
        <Text
          style={styles.tripTitle}
        >
          {trip?.destination}
        </Text>
        <Text
          style={styles.tripDetails}
        >
          {trip?.startDate}
        </Text>
        <Text
          style={styles.tripDetails}
        >
          Traveller: {trip?.traveller}
        </Text>
      </View>
    </TouchableOpacity>
  )
}