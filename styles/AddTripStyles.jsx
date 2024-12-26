import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginTop: 50,
		display: "flex",
		alignItems: "center",
	},
	headerText: {
		fontFamily: 'outfit-medium',
		marginTop: 10,
		fontSize: 25
	},
	displayText: {
		fontFamily: 'outfit',
		marginTop: 10,
		fontSize: 20,
		textAlign: "center",
		color: "grey"
	},
	newTripButton: {
		padding: 10,
		backgroundColor: 'black',
		borderRadius: 15,
		marginTop: 20,
		
	},
	newTripButtonText: {
		fontFamily: 'outfit-medium',
		fontSize: 16,
		color: 'white',
		textAlign: "center",
		paddingHorizontal: 10,
		paddingVertical: 3,
	}

})