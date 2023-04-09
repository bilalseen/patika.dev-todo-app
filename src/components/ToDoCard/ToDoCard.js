import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ToDoCard.style";
export default ToDoCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.todoDone}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={props.deleteTodo}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
