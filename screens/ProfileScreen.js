import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ route }) => {
  const { email, selectedCountry, isChecked } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Profile Information:</Text>
      <Text>Email: {email}</Text>
      <Text>Country: {selectedCountry}</Text>
      <Text>Accept Terms: {isChecked ? "Yes" : "No"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProfileScreen;
