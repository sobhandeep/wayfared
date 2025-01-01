import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
    paddingBottom: 20
    
  },
  headerText: {
    marginTop: 20,
    fontFamily: 'outfit-bold',
    fontSize: 30,
  },
  backButton: {
    paddingTop: 5,
    paddingLeft: 5
  }
})