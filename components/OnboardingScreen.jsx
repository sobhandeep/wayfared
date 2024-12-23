import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/OnboardingStyles'
import { useRouter } from 'expo-router'

export default function OnboardingScreen() {
  const router = useRouter()
  return (
    <View>
      <Image
        source={require('@/assets/images/login.png')}
        style={styles.image}
      />
      <View
        style={styles.container}
      >
        <Text
          style={styles.headerText}
        >
          WayFered
        </Text>
        <Text
          style={styles.description}
        >
          Discover your next adventure effortlessly. 
          Personalized itenaries at your fingertips. 
          Travel smarter with AI driven insights.
        </Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={()=>router.navigate('/auth/signin')}
        >
          <Text
            style={styles.buttonText}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}