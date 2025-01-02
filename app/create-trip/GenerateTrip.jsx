import { View, Text, BackHandler } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from '@/styles/GenerateTripStyles'
import LoadingIndicator from '@/components/LoadingIndicator'
import { CreateTripContext } from '@/context/CreateTripContex'
import { PROMT_TEMPLATE } from '@/constants/Options'
import { chatSession } from '@/configs/GeminiConfig'
import { useRouter } from 'expo-router'
import { getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { firestore } from  '@/configs/FireBaseConfig'
import { format } from 'date-fns'

export default function GenerateTrip() {
  const auth = getAuth()
  const user = auth.currentUser
  const router = useRouter()
  const {tripData, setTripData} = useContext(CreateTripContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleBackPress = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => backHandler.remove();
  }, [])
  useEffect(() => {
    GenerateTripPlan()
  }, [tripData])
  const formatDate = (isoDate) => format(new Date(isoDate), 'dd MMM yyyy')
  const resetAndNavigate = (newPath) => {
    if (router.canGoBack()) {
        router.dismissAll();
    }
    router.replace(newPath);
}
  const GenerateTripPlan = async() => {
    setLoading(true)
    const FINAL_PROMT = PROMT_TEMPLATE.replaceAll('{location}', tripData?.locationInfo?.name)
    .replaceAll('{totalDays}', tripData?.totalNoOfDays)
    .replaceAll('{totalNights}', tripData?.totalNoOfDays - 1)
    .replaceAll('{traveller}', tripData?.traveller?.title)
    .replaceAll('{budget}', tripData?.budget)
    .replaceAll('{startDate}', formatDate(tripData.startDate))
    .replaceAll('{endDate}', formatDate(tripData.endDate))
    const result = await chatSession.sendMessage(FINAL_PROMT)
    const response = JSON.parse(result.response.text())
    const uid = user.uid.toString()
    const docId = Date.now().toString()
    try{  
      const result_ = await setDoc(doc(firestore, `users/${uid}/trips`, docId),{
        destination: tripData?.locationInfo.name,
        startDate: formatDate(tripData.startDate).toString(),
        endDate: formatDate(tripData.endDate).toString(),
        traveller: tripData?.traveller?.title,
        budget: tripData?.budget,
        tripPlan: response,

      })
    }
    catch(error){
      console.error('Error adding document:', error)
    }
    setLoading(false)
    resetAndNavigate('(tabs)/MyTrip')
  }
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.headerText}
      >
        Please Wait...
      </Text>
      <Text
        style={styles.subHeaderText}
      >
        We are working to generate your trip
      </Text>
      <View>
        {
          loading ? <LoadingIndicator size={100}/>:null
        }
      </View>
    </View>
  )
}