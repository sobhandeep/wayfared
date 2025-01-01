import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { styles } from '@/styles/ReviewTripStyles'
import { useRouter } from 'expo-router'
import {CreateTripContext} from './../../context/CreateTripContex'
import { format } from 'date-fns'

export default function ReviewTrip() {
	const router = useRouter()
	const {tripData, setTripData} = useContext(CreateTripContext)
	const formatDate = (isoDate) => format(new Date(isoDate), 'dd MMM yyyy')
  return (
    <View
			style={styles.container}
		>
			<View
				style={styles.titleContainer}
			>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => {router.back()}}
				>
					<Ionicons name='arrow-back' size={24}/>
				</TouchableOpacity>
				<Text
					style={styles.titleText}
				>
					Review
				</Text>
			</View>
			<Text
				style={styles.headerText}
			>
				Review Your Trip
			</Text>
			<Text
				style={styles.subHeaderText}
			>
				Before generating your trip please review your selection
			</Text>
			<View
				style={styles.infoContainer}
			>
				<FontAwesome6 name='location-arrow' size={30} style={styles.infoIcon}/>
				<View>
					<Text
						style={styles.infoTitle}
					>
						Destination
					</Text>
					<Text
						style={styles.infoDescription}
					>
						{tripData?.locationInfo.name}
					</Text>
				</View>
			</View>
			<View
				style={styles.infoContainer}
			>
				<Ionicons name='calendar-number-outline' size={30} style={styles.infoIcon}/>
				<View>
					<Text
						style={styles.infoTitle}
					>
						Travel Date
					</Text>
					<Text
						style={styles.infoDescription}
					>
						{formatDate(tripData.startDate) + ' To ' + formatDate(tripData.endDate) + `(${tripData.totalNoOfDays} days)`}
					</Text>
				</View>
			</View>
			<View
				style={styles.infoContainer}
			>
				<Ionicons name='car-sport' size={30} style={styles.infoIcon}/>
				<View>
					<Text
						style={styles.infoTitle}
					>
						Who is Travelling
					</Text>
					<Text
						style={styles.infoDescription}
					>
						{tripData?.traveller?.title}
					</Text>
				</View>
			</View>
			<View
				style={styles.infoContainer}
			>
				<FontAwesome5 name='money-check-alt' size={26} style={styles.infoIcon}/>
				<View>
					<Text
						style={styles.infoTitle}
					>
						Budget
					</Text>
					<Text
						style={styles.infoDescription}
					>
						{tripData?.budget}
					</Text>
				</View>
			</View>
			<TouchableOpacity
				style={styles.continueButton}
			>
				<Text
					style={styles.buttonText}
				>
					Build My Trip
				</Text>
			</TouchableOpacity>
		</View>
  )
}