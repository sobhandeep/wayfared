import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15, 
    flex: 1,
    backgroundColor: 'white'
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  titleText: {
    fontFamily: 'outfit-medium',
    fontSize: 25,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  backButton: {
    paddingTop: 5,
    paddingLeft: 5
  },
  headerText: {
    marginTop: 20,
    fontFamily: 'outfit-bold',
    fontSize: 30,
  },
  subHeaderText: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginTop: 20,
  },
  continueButton: {
    padding: 12, 
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 20
  },
  buttonText: {
    fontFamily: 'outfit-medium',
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
})