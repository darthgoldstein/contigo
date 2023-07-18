import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  logoBar: {
    textAlign: 'center',
  }
});

export const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <View>
        <Text style={styles.logoBar}>Contigo</Text>
      </View>
      <Text>Homefafa Screen</Text>
    </View>
  );
};
