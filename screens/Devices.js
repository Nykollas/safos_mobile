import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import DevicesSection from '../components/DevicesSection';

import UpIllustration from '../assets/icons/UpIllustration';


class DeviceScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <DevicesSection></DevicesSection>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default DeviceScreen;