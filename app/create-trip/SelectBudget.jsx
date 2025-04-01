import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { styles } from './../../styles/SelectBudgetStyles'
import { Ionicons } from '@expo/vector-icons'
import { SelectBudgetOptions } from './../../constants/Options'
import OptionCard from './../../components/OptionCard'
import {CreateTripContext} from './../../context/CreateTripContex'

export default function SelectBudget() {
  const [selectedBudget, setSelectedBudget] = useState(null)
  const {tripData, setTripData} = useContext(CreateTripContext)
  const router = useRouter()
  useEffect(()=>{
    setTripData({...tripData, 
      budget: selectedBudget?.title
    })
  }, [selectedBudget])
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.titleContainer}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={()=>{router.back()}}
        >
          <Ionicons name='arrow-back' size={24}/>
        </TouchableOpacity>
        <Text
          style={styles.titleText}
          onPress={()=>{router.back()}}
        >
          Budget
        </Text>
      </View>
      <Text
        style={styles.headerText}
      >
        Select Budget
      </Text>
      <Text
        style={styles.subHeaderText}
      >
        Choose Spending Habits for This Trip
      </Text>
      <FlatList
        data={SelectBudgetOptions}
        renderItem={({item, index}) => (
          <TouchableOpacity 
            style={{marginTop: 15}}
            onPress={()=>setSelectedBudget(item)}
          >
            <OptionCard
              option={item}
              selected={selectedBudget}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={()=>{
          if(selectedBudget == null ){
            ToastAndroid.show("Please Select Budget", ToastAndroid.BOTTOM)
          }
          else{
            router.push('/create-trip/ReviewTrip')
          }
        }}
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