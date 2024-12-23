import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white'
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
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: '10%'
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