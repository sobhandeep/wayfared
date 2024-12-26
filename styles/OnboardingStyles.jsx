import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 25,
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 30, 
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 20
  },
  description: {
    fontSize: 16,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: 'grey',
    marginTop: 20,
  },
  image: {
    width: '100%', 
    height: '41%',
    resizeMode: 'cover'
  },
  getStartedButton: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 30,
    marginTop: '35%',
    marginLeft: '10%',
    marginRight: '10%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'outfit-medium',
    fontSize: 18,
  },
  buttonImage: {
    width: 25,
    height: 25
  }
})