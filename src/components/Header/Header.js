import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Header.style";

export default Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
    </View>
  );
};
