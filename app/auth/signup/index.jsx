import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRouter } from 'expo-router'
import { styles } from '@/styles/SignUpStyles'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/configs/FireBaseConfig'

export default function SignUp() {
  const navigation = useNavigation()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isMatched, setIsMatched] = useState(true)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  })
  const handlePasswordChange = (text) => {
    setPassword(text);
    if(password.length >= 6){
      setIsMatched(text === confirmPassword);
    }
  };
  const handleConfirmPasswordChange = (text) => {
    setConfPassword(text);
    setIsMatched(password === text);
  };
  const createAccount = async() => {
    if(!firstName){
      ToastAndroid.show("Please enter first name!", ToastAndroid.BOTTOM)
      return
    }
    if(!lastName){
      ToastAndroid.show("Please enter last name", ToastAndroid.BOTTOM)
      return
    }
    if(!email){
      ToastAndroid.show("Please enter email address!", ToastAndroid.BOTTOM)
      return
    }
    if(!password){
      ToastAndroid.show("Please enter password!", ToastAndroid.BOTTOM)
      return
    }
    if(password.length < 4){
      ToastAndroid.show("Password must be of atleast 4 characters", ToastAndroid.BOTTOM)
      return
    }
    if(password !== confirmPassword){
      ToastAndroid.show("Password and confirm password must be same", ToastAndroid.BOTTOM)
      return
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;  
      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, {
        displayName: `${firstName} ${lastName}`,
        email: email,
        createdAt: new Date(),
      });
      console.log('User document created in Firestore!');
      router.replace('/MyTrip')
    } catch (error) {
      console.log('Error registering user:', error.code);
      if(error.code === 'auth/email-already-in-use'){
        ToastAndroid.show('Email already in use, please use a different email', ToastAndroid.BOTTOM)
      }
    } 
  } 
  return (
    <SafeAreaView style={{flex: 1}}>
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
          <View
            style={styles.textInputContainer}
          >
            <TextInput
              style={styles.textInput}
              placeholder='First Name'
              onChangeText={setFirstName}
            />
          </View>
          <View
            style={styles.textInputContainer}
          >
            <TextInput
              style={styles.textInput}
              placeholder='Last Name'
              onChangeText={setLastName}
            />
          </View>
          <View
            style={styles.textInputContainer}
          >
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={setEmail}
            />
          </View>
          <View
            style={[
              styles.textInputContainer,
              password.length >= 1 && password.length < 6 ? styles.textInputError : null,
            ]}
          >
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              secureTextEntry={!showPassword}
              keyboardType='password'
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {password.length >= 1 && password.length < 6 && (
            <Text style={styles.errorText}>Password too short</Text>
          )}
          <View
            style={[
              styles.textInputContainer,
              !isMatched && confirmPassword.length > 0 ? styles.textInputError : null,
            ]}
          >
            <TextInput
              style={styles.textInput}
              placeholder='Confirm Password'
              secureTextEntry={!showConfirmPassword}
              keyboardType='password'
              onChangeText={handleConfirmPasswordChange}
            />
            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {!isMatched && confirmPassword.length > 0 && (
            <Text style={styles.errorText}>Passwords do not match</Text>
          )}
          <TouchableOpacity
            style={styles.signinButton}
            onPress={createAccount}
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
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}