import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  container1: {
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    backgroundColor: 'white'
  },
  addressContainer: {
    flexDirection: 'row',
  },
  primaryImage: {
    width: '100%',
    height: "40%",
    objectFit: 'cover',
  },
  locationIcon: {
    paddingLeft: 0,
    padding: 10,
    alignContent: 'center',
  },
  headerText: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
  },
  subHeaderText: {
    fontFamily: 'outfit-medium',
    fontSize: 20,
    marginTop: 30
  },
  addressText: {
    fontFamily: 'outfit',
    fontSize: 17,
    paddingTop: 11,
    paddingRight: 5
  },
  detailsText: {
    fontFamily: 'outfit',
    fontSize: 17,
    color: 'gray',
    paddingTop: 11,
    paddingRight: 5
  },
})