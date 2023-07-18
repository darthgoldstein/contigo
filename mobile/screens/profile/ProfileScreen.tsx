import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileScreenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export const ProfileScreen = () => {
  return (
    <View style={styles.profileScreenContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
};
