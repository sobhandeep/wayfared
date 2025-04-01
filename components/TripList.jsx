import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './../styles/TripListStyles'
import TripCard from './../components/TripCard'
import {GOOGLE_CLOUD_API} from '@env'
import { useRouter } from 'expo-router'

export default function TripList({trips}) {
  const router = useRouter()
  return trips&&(
    <View>
      <View
        style={styles.container}
      >
        <Image 
          source={{uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${trips[trips.length - 1]?.photoRef}&key=${GOOGLE_CLOUD_API}`}}
          style={styles.primaryImage}
        />
      </View>
      <View
        style={styles.tripDetailsContainer}
      >
        <Text
          style={styles.destinationText}
        >
          {trips[trips.length-1]?.destination}
        </Text>
        <View
          style={styles.tripDetailsSubContainer}
        >
          <Text
            style={styles.detailsText}
          >
            {trips[trips.length-1]?.startDate}
          </Text>
          <Text
            style={styles.detailsText}
          >
            🚌 {trips[trips.length-1]?.traveller}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.seePlanButton}
          onPress={() => router.push({pathname: '/trip-details/TripDetails', params: {trip: JSON.stringify(trips[trips.length - 1])}})}
        >
          <Text
            style={styles.buttonText}
          >
            See your Plan
          </Text>
        </TouchableOpacity>
        {
          trips.length > 1 && trips.slice(0, -1).reverse().map((trip, index) => (
            <TripCard 
              key={index} 
              trip={trip}
            />
          ))
        }
      </View>
    </View>
  )
}