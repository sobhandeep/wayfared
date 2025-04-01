import { useNavigation, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, ToastAndroid, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './../../../styles/SignInStyles'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../../../configs/FireBaseConfig'

export default function SignIn() {
	const navigation = useNavigation()
	const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)
	useEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
  const handlePassword = (text) => {
    setPassword(text)
    setIsPasswordCorrect(true)
  }
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      router.replace('/MyTrip')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.warn(errorCode)
      console.warn(errorMessage)
      if(errorCode === 'auth/invalid-email'){
        ToastAndroid.show("User does not exist! Please Sign In", ToastAndroid.BOTTOM)
      }
      if(errorCode === 'auth/invalid-credential'){
        ToastAndroid.show("Wrong Password", ToastAndroid.BOTTOM)
        setIsPasswordCorrect(false)
      }
    });
  }
	return (
    <SafeAreaView
      style={{flex: 1}}
    >
      <View
        style={styles.container}
      >
        <Text
          style={styles.headerText}
        >
          Sign In
        </Text>
        <View 
          style={styles.lowerPanel}
        > 
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
            style={
              [
                styles.textInputContainer,
                isPasswordCorrect ? null : styles.textInputError
              ]
            }
          >
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              secureTextEntry={!showPassword}
              keyboardType='password'
              onChangeText={handlePassword}
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
          <TouchableOpacity
            style={styles.signinButton}
            onPress={signIn}
          >
            <Text
              style={styles.buttonText}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <View
            style={styles.createAccountContainer}
          >
            <Text
              style={styles.createAccountText}
            >
              Dont have an account? {' '}
            </Text>
            <TouchableOpacity
              onPress={()=>router.navigate('auth/signup')}
            >
              <Text
                style={styles.createAccountButton}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
	)
}