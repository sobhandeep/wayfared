import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: "10%"
  },
  textInputError:{
    borderColor: 'red'
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: "40%"
  },
  lowerPanel: {
    marginTop: "10%"
  },
  textInput: { 
    fontFamily: 'outfit',
    padding: 15,
    flex: 1
  },
  signinButton: {
    padding: 15,
    backgroundColor: 'black',
    marginTop: '17%',
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: 'outfit',
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
  errorText: {
    fontFamily: 'outfit',
    color: 'red',
    marginTop: 5,
    marginLeft: 5,
  },
  createAccountContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20
  },
  createAccountText: {
    fontFamily: 'outfit',
    fontSize: 16, 
    color: 'gray'
  },
  createAccountButton: {
    fontFamily: 'outfit',
    fontSize: 16, 
    color: 'blue'
  },
  visibilityIcon: {
    marginLeft: 10
  },
  showPassword: {
    marginLeft: 10,
    marginRight: 15
  },
})