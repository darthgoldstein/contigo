import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chatScreenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export const ChatScreen = () => {
  return (
    <View style={styles.chatScreenContainer}>
      <Text>Chat Screen</Text>
    </View>
  );
};
