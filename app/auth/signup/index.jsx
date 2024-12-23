import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { styles } from '@/styles/SignUpStyles'

export default function SignUp() {
  const navigation = useNavigation()
  const router = useRouter()
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  })
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.headerText}
      >
        Create New Account
      </Text>
      <View 
        style={styles.lowerPanel}
      >
        <TextInput
          style={styles.textInput}
          placeholder='First Name'
        /><TextInput
        style={styles.textInput}
        placeholder='Last Name'
      />
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={true}
          keyboardType='password'
        />
        <TextInput
          style={styles.textInput}
          placeholder='Confirm Password'
          secureTextEntry={true}
          keyboardType='password'
        />
        <TouchableOpacity
          style={styles.signinButton}
        >
          <Text
            style={styles.buttonText}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={styles.createAccountContainer}
        >
          <Text
            style={styles.createAccountText}
          >
            Already have an account? {' '}
          </Text>
          <TouchableOpacity
            onPress={()=>router.navigate('auth/signin')}
          >
            <Text
              style={styles.createAccountButton}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}