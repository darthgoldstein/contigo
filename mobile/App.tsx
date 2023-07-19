import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens/login/LoginScreen';
import { MainScreen } from './screens/main/MainScreen';
import { login } from './api/auth-requests';

const App = () => {
  const [profile, setProfile] = useState<ContigoProfile>(null);

  const onLogin = async (user: string, pass: string) => {
    const retrievedProfile = await login(user, pass);
    setProfile(retrievedProfile);
  };

  return (
    <NavigationContainer>
      {profile ? (
        <MainScreen />
      ) : (
        <LoginScreen onLogin={onLogin} profile={profile} />
      )}
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
