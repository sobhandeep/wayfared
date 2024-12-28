import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'outfit-bold', 
  },
  descriptionText: {
    fontSize: 16,
    color: 'grey',
    fontFamily: 'outfit'
  },
  icon: {
    fontSize: 30
  }
})