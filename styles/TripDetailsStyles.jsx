import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height

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
  container2: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 25,
    backgroundColor: 'white'
    
  },
  contentContainer: {
    flexGrow: 1,
  },
  flatListContainer: {
    marginTop: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 16,
    width: 270,
    height: 250,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  itineraryCard: {
    backgroundColor: '#c2dbfc',
    padding: 10,
    marginTop: 10,
    borderRadius: 10
  },
  cardImage: {
    width: '100%',
    height: '70%',
    objectFit: 'fill',
  },
  itineraryCardImage: {
    marginTop: 8,
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 10
  },
  imageContainer: {
    width: '100%',
    height: windowHeight * 0.4,
  },
  primaryImage: {
    width: '100%',
    height: "100%",
    objectFit: 'cover',
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
  dateText: {
    fontFamily: 'outfit',
    fontSize: 18,
    color: 'gray',
    marginTop: 5
  },
  detailsText: {
    fontFamily: 'outfit',
    fontSize: 17,
    color: 'gray',
    paddingTop: 5
  },
  cardTitle: {
    paddingTop: 8,
    paddingLeft: 8,
    fontSize: 16,
    fontFamily: 'outfit-medium',
  },
  cardPrice: {
    fontFamily: 'outfit',
    paddingTop: 8,
    paddingLeft: 8,
    fontSize: 14,
    color: 'gray',
  },
  backButton: {
    paddingLeft: 20,
    paddingTop: 50
  },
  flightBookButton: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: 'black',
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start'
  },
  flightBookButtonText: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: 'white'
  }
})