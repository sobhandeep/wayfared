import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  tripTitle: {
    fontFamily: 'outfit-medium',
    fontSize: 18
  },
  tripDetails: {
    fontFamily: 'outfit',
    fontSize: 16
  }
})