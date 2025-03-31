import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  tripDetailsContainer: {
    marginTop: 10
  },
  tripDetailsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  primaryImage: {
    width: '100%',
    height: 240,
    objectFit: 'cover',
    borderRadius: 15
  },
  destinationText: {
    fontFamily: 'outfit-medium',
    fontSize: 20
  },
  detailsText: {
    fontFamily: 'outfit',
    fontSize: 16,
    fontColor: 'gray'
  },
  seePlanButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 15,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'outfit-medium',
    fontSize: 16,
    textAlign: 'center'
  }
})