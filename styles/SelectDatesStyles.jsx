import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    padding: 15,
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
  backButton: {
    paddingTop: 5,
    paddingLeft: 5
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    marginTop: 20
  },
  calenderContainer: {
    marginTop: 30
  },
  calenderTextStyle: {
    fontFamily: 'outfit',
    fontSize: 16
  },
  continueButton: {
    padding: 12,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'outfit',
    fontSize: 18,
    textAlign: 'center',
  }
})