import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
    flex: 1
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: "10%"
  },
  visibilityIcon: {
    marginLeft: 10
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: "10%"
  },
  lowerPanel: {
    marginTop: "8%"
  },
  textInput: { 
    fontFamily: 'outfit',
    padding: 15,
    flex: 1
  },
  textInputError:{
    borderColor: 'red'
  },
  showPassword: {
    marginLeft: 10,
    marginRight: 15
  },
  errorText: {
    fontFamily: 'outfit',
    color: 'red',
    marginTop: 5,
    marginLeft: 5,
  },
  signinButton: {
    padding: 15,
    backgroundColor: 'black',
    marginTop: '17%',
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: 'outfit-medium',
    color: 'white',
    textAlign: 'center',
    fontSize: 16
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
  }
})