import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./SaveCard.style";

export default SaveCard = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputButton}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder="Yapılacak..."
        placeholderTextColor="#747778"
      />
      <TouchableOpacity
        style={
          props.value.length > 0 ? styles.saveButtonActive : styles.saveButton
        }
        onPress={props.onPress}
      >
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
