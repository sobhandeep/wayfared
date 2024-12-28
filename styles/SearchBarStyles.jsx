import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  input: {
    fontFamily: 'outfit',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  suggestionsContainer: {
    maxHeight: 200,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
  },
  suggestion: {
    fontFamily: 'outfit',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
  loading: {
    fontFamily: 'outfit',
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 10,
  },
})  