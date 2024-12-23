import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '@/styles/SignInStyles'

export default function SignIn() {
	const navigation = useNavigation()
	const router = useRouter()
	useEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
	return (
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
				<TouchableOpacity
					style={styles.signinButton}
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
	)
}