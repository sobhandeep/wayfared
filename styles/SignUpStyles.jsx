import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
    flex: 1
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: "18%"
  },
  lowerPanel: {
    marginTop: "8%"
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