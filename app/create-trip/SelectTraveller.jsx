import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { styles } from '@/styles/SelectTravellerStyles'
import { Ionicons } from '@expo/vector-icons'
import { SelectTravellerList } from '@/constants/Options'
import OptionCard from '@/components/OptionCard'
import {CreateTripContext} from '@/context/CreateTripContex'

export default function SelectTraveller() {
  const [selectedTraveller, setSelectedTraveller] = useState()
  const {tripData, setTripData} = useContext(CreateTripContext)
  const router = useRouter()
  useEffect(()=>{
    setTripData({...tripData, 
      traveller: selectedTraveller
    })
  }, [selectedTraveller])
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.titleContainer}
      >
        <TouchableOpacity
          style={styles.backButton}
        >
          <Ionicons name='arrow-back' size={24}/>
        </TouchableOpacity>
        <Text
          style={styles.titleText}
          onPress={()=>{router.back()}}
        >
          Traveller
        </Text>
      </View>
      <Text
        style={styles.headerText}
      >
        Who is Travelling?
      </Text>
      <Text
        style={styles.subheaderText}
      >
        Choose your travellers
      </Text>
      <FlatList
        data={SelectTravellerList}
        renderItem={({item, index}) => (
          <TouchableOpacity 
            style={{marginTop: 15}}
            onPress={()=>setSelectedTraveller(item)}
          >
            <OptionCard
              option={item}
              selected={selectedTraveller}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.continueButton}
      >
        <Text
          style={styles.buttonText}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
}