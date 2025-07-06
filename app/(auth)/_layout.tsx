import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

const _layout = () => {
  return (
    <View style={styles.screen}>
      <Slot />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10 },
});
