import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 25,
    paddingTop: 50,
    backgroundColor: 'white'
  },
  headerContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerText:{
    fontFamily: 'outfit-bold',
    fontSize: 35,
  },
})