import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Enums, Screen } from '../lib/enums';

const styles = StyleSheet.create({
    screenView: {
        width: '100%',
        flexGrow: 1,
    },
    homeScreen: {
        backgroundColor: 'red',
    },
    messagesScreen: {
        backgroundColor: 'orange',
    },
    likesScreen: {
        backgroundColor: 'yellow',
    },
    profileScreen: {
        backgroundColor: 'green',
    },
});

interface ScreenViewProps {
    screen: Enums.Screen;
}
export const ScreenView = ({ screen }: ScreenViewProps) => {
    const renderHome = () => {
        return <View style={[styles.screenView, styles.homeScreen]}></View>;
    };

    const renderMessages = () => {
        return <View style={[styles.screenView, styles.messagesScreen]}></View>;
    };

    const renderLikes = () => {
        return <View style={[styles.screenView, styles.likesScreen]}></View>;
    };

    const renderProfile = () => {
        return <View style={[styles.screenView, styles.profileScreen]}></View>;
    };

    const screenRenderers = {
        [Screen.Home]: renderHome,
        [Screen.Messages]: renderMessages,
        [Screen.Likes]: renderLikes,
        [Screen.Profile]: renderProfile,
    };

    return screenRenderers[screen]();
};
