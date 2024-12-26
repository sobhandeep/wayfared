import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/MyTripStyles'
import { Ionicons } from '@expo/vector-icons'
import AddTripCard from '@/components/AddTripCard'

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([])
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
        <TouchableOpacity style={{padding: 10}}>
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