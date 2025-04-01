import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './../../styles/SelectDatesStyles'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import DateTimePicker from 'react-native-ui-datepicker'
import {CreateTripContext} from './../../context/CreateTripContex'

export default function SelectDates() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const {tripData, setTripData} = useContext(CreateTripContext)
  const handleContinue = () => {
    if(!startDate || !endDate){
      ToastAndroid.show("Enter Start Date and End Date", ToastAndroid.BOTTOM)
      return
    }
    const totalNoOfDays = endDate.diff(startDate, 'days') + 1
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays
    })
    router.push('/create-trip/SelectBudget')
  }
	const router = useRouter()
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
        >
          Date
				</Text>
			</View>
      <Text
        style={styles.headerText}
      >
        Select Dates
      </Text>
      <View
        style={styles.calenderContainer}
      >
        <DateTimePicker
          mode="range"
          startDate={startDate}
          endDate={endDate}
          onChange={(params) => {
            setStartDate(params.startDate)
            setEndDate(params.endDate)
          }}
          calendarTextStyle={{fontFamily: 'outfit'}}
          todayTextStyle={{color: 'black'}}
          todayContainerStyle={{borderColor: 'black'}}
          selectedItemColor='black'
          selectedRangeBackgroundColor='#bdbdbd'
        />
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleContinue}
      >
        <Text
          style={styles.buttonText}
        >
          Coninue
        </Text>
      </TouchableOpacity>
    </View>
  )
}