import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AnalyticsSection from '../components/AnalyticsSection';

import UpIllustration from '../assets/icons/UpIllustration';


class AnalyticsScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <AnalyticsSection></AnalyticsSection>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default AnalyticsScreen;