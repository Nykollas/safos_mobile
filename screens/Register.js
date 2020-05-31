import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import RegisterCard from '../components/RegisterCard';

import UpIllustration from '../assets/icons/UpIllustration';

class LoginScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <RegisterCard></RegisterCard>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default LoginScreen;