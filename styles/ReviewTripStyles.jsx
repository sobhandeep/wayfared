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
  infoContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 30
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
  infoTitle: {
    fontFamily: 'outfit',
    fontSize: 20,
    color: 'gray'
  },
  infoDescription: {
    fontFamily: 'outfit-medium',
    fontSize: 18,
    flex: 1
  },
  infoIcon: {
    padding: 10
  },
  continueButton: {
    padding: 12, 
    backgroundColor: 'black',
    borderRadius: 20,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  buttonText: {
    fontFamily: 'outfit-medium',
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
})