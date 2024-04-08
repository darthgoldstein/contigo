import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Enums, Screen } from '../lib/enums';
import { HeartIcon } from './HeartIcon';

const styles = StyleSheet.create({
    bottomTabs: {
        flexShrink: 0,
        width: '100%',
        height: 48,
        backgroundColor: '#181818',
        display: 'flex',
        flexDirection: 'row',
    },
    tab: {
        height: '100%',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIcon: {
        width: 36,
        height: 36,
    },
});

interface BottomTabsProps {
    onChangeScreen: (newScreen: Enums.Screen) => void;
}
export const BottomTabs = ({ onChangeScreen }: BottomTabsProps) => {
    return (
        <View style={styles.bottomTabs}>
            <TouchableOpacity
                onPress={() => onChangeScreen(Screen.Home)}
                style={styles.tab}
            >
                <HeartIcon style={styles.tabIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChangeScreen(Screen.Messages)}
                style={styles.tab}
            >
                <HeartIcon style={styles.tabIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChangeScreen(Screen.Likes)}
                style={styles.tab}
            >
                <HeartIcon style={styles.tabIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChangeScreen(Screen.Profile)}
                style={styles.tab}
            >
                <HeartIcon style={styles.tabIcon} />
            </TouchableOpacity>
        </View>
    );
};
