import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from '@/styles/SelectDatesStyles'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'
import {CreateTripContext} from '@/context/CreateTripContex'

export default function SelectDates() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const {tripData, setTripData} = useContext(CreateTripContext)
  const onDateChange = (date, type) => {
    if(date !== null && type == 'START_DATE'){
      setStartDate(moment(date))
    }
    else if(date !== null){
      setEndDate(moment(date))
    }
  }
  const handleContinue = () => {
    if(!startDate || !endDate){
      ToastAndroid.show("Enter Start Date and End Date", ToastAndroid.BOTTOM)
      return
    }
    const totalNoOfDays = endDate.diff(startDate, 'days') + 1
    console.log(totalNoOfDays)
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays
    })
    router.push('/create-trip/SelectBudjet')
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
        <CalendarPicker 
          onDateChange={onDateChange} 
          allowRangeSelection={true}
          textStyle={styles.calenderTextStyle}
          selectedDayColor='black'
          selectedDayTextColor='white'
          scrollable={true}
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