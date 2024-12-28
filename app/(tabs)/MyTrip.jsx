import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/MyTripStyles'
import { Ionicons } from '@expo/vector-icons'
import AddTripCard from '@/components/AddTripCard'
import { useRouter } from 'expo-router'

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([])
  const router = useRouter()
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.headerContainer}
      >
        <Text
          style={styles.headerText}
        >
          My Trips
        </Text>
        <TouchableOpacity 
          style={{padding: 10}}
          onPress={()=>{router.push('/create-trip/SearchPlace')}}
        >
          <Ionicons name='add-circle' size={35} color='black'/>
        </TouchableOpacity>
      </View>
      {
        userTrips?.length == 0 ?
        <AddTripCard/>
        :null
      }
    </View>
  )
}