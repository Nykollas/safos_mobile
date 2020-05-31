import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AccountCard from '../components/AccountCard';

import UpIllustration from '../assets/icons/UpIllustration';


class LoginScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <AccountCard></AccountCard>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default LoginScreen;