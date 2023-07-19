import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const LoginError = {
  AlreadyLoggedIn: 'already logged in',
  NotAuthorized: 'incorrect username or password',
};

const styles = StyleSheet.create({
  loginScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
});

interface LoginScreenProps {
  onLogin: (username: string, password: string) => Promise<void>;
  profile: ContigoProfile;
}

export const LoginScreen = ({ onLogin, profile }: LoginScreenProps) => {
  const [loginError, setLoginError] = useState<string>(null);

  const handleLogin = async () => {
    if (profile) {
      setLoginError(LoginError.AlreadyLoggedIn);
      throw Error('tried logging in when already logged in');
    }

    try {
      await onLogin('user', 'pass');
      setLoginError(null);
    } catch (error) {
      setLoginError(LoginError.NotAuthorized);
      throw error;
    }
  };

  return (
    <View style={styles.loginScreenContainer}>
      <Button title="Login" onPress={handleLogin} />
      <Text>{loginError}</Text>
    </View>
  );
};
