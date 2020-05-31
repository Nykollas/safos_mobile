import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import LoginCard from '../components/LoginCard';
import SettingsOption from '../components/SettingsOptions';

import UpIllustration from '../assets/icons/UpIllustration';

class LoginScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <LoginCard></LoginCard>
                <SettingsOption></SettingsOption>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default LoginScreen;