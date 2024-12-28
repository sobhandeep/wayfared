import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
    flex: 1
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 5,

  },
  titleText: {
    fontFamily: 'outfit-medium',
    fontSize: 25,
    paddingLeft: 20,
    paddingBottom: 20
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    marginTop: 20,
  },
  subheaderText: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginTop: 20,
  },
  backButton: {
    paddingTop: 5,
    paddingLeft: 5
  },
  continueButton: {
    padding: 12, 
    backgroundColor: 'black',
    borderRadius: 15,
    marginTop: 20
  },
  buttonText: {
    fontFamily: 'outfit-medium',
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
})