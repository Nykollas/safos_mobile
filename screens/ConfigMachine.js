import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import ConfigMachineCard from '../components/ConfigMachineCard';
import UpIllustration from '../assets/icons/UpIllustration';

class ConfigMachine extends Component{
    render = () => {
        return(
            <View style={styles.style}>
            <UpIllustration></UpIllustration>
            <ConfigMachineCard></ConfigMachineCard>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});


export default ConfigMachine;