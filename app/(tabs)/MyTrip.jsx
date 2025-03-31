import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/MyTripStyles'
import { Ionicons } from '@expo/vector-icons'
import AddTripCard from '@/components/AddTripCard'
import { useRouter } from 'expo-router'
import { getAuth } from 'firebase/auth'
import { getDocs, query, collection } from 'firebase/firestore'
import { firestore } from '@/configs/FireBaseConfig'
import LoadingIndicator from '@/components/LoadingIndicator'
import  TripList  from '@/components/TripList'
import { useFocusEffect } from 'expo-router'

export default function MyTrip() {
  const auth = getAuth()
  const user = auth.currentUser
  const [userTrips, setUserTrips] = useState([])
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const getUserTrips = async() => {
    try{  
      setLoading(true)
      setUserTrips([])
      const q = query(collection(firestore, `users/${user.uid}/trips`))

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserTrips(prev => [...prev, doc.data()])
      })
      setLoading(false)
    }
    catch(error){
      console.error('Fetching Failed: ', error)
    }
  }
  useFocusEffect(
    React.useCallback(() => {
      getUserTrips();
    }, [])
  );
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
      <ScrollView>
        {
          loading ? (
            <LoadingIndicator />
          ) : userTrips.length === 0 ? (
            <AddTripCard />
          ) : (
            <TripList trips={userTrips}/>
          )
        }
      </ScrollView>
    </View>
  )
}