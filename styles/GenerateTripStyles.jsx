import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    textAlign: 'center'
  },
  subHeaderText: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30
  },
  loadingAnimation: {
    height: 200,
    width: 200,
    alignContent: 'center'
  }
})