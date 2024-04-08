import { registerRootComponent } from 'expo';
import * as NavigationBar from 'expo-navigation-bar';
import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
import { Enums, Screen } from './lib/enums';
import { BottomTabs } from './components/BottomTabs';
import { ScreenView } from './components/ScreenView';

NavigationBar.setBackgroundColorAsync('#181818');

const styles = StyleSheet.create({
    app: {
        width: '100%',
        height: '100%',
    },
    signInScreen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInScreenText: {
        fontSize: 30,
    },
    mainApp: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
});

interface SignInScreenProps {
    onSignIn: () => void;
}
const SignInScreen = ({ onSignIn }: SignInScreenProps) => {
    return (
        <View style={styles.signInScreen}>
            <TouchableOpacity onPress={onSignIn}>
                <Text style={styles.signInScreenText}>
                    Sign the fuck in bitch
                </Text>
            </TouchableOpacity>
            {/* <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
            /> */}
        </View>
    );
};

const MainApp = () => {
    const [currentScreen, setCurrentScreen] = useState<Enums.Screen>(
        Screen.Home
    );

    return (
        <View style={styles.mainApp}>
            <ScreenView screen={currentScreen} />
            <BottomTabs onChangeScreen={setCurrentScreen} />
        </View>
    );
};

const App = () => {
    const [signedIn, setSignedIn] = useState(false);

    return (
        <View style={styles.app}>
            <StatusBar />
            {signedIn ? (
                <MainApp />
            ) : (
                <SignInScreen onSignIn={() => setSignedIn(true)} />
            )}
        </View>
    );
};

registerRootComponent(App);
