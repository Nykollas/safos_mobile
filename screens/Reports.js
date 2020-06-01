
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ReportCard from '../components/ReportCard';

import UpIllustration from '../assets/icons/UpIllustration';

class LoginScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <ReportCard></ReportCard>
                </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default LoginScreen;