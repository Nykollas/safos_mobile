import React, { Component } from 'react';
import  { View, Text, StyleSheet} from 'react-native';

import Tabs from './Tabs';
import pallete from '../assets/color/colors';
import DeviceCard from './DeviceCard';

class DevicesSection extends Component {
    render  = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.title}> Your Devices</Text>
                <DeviceCard title={"Moto G4"} location={"Amazonas - AM - Brazil"} date={"05/31/2020 - 05:37"}></DeviceCard>
                <DeviceCard title={"Iphone 5G"} location={"São Paulo - SP - Brazil"} date={"01/03/2020 - 13:42"}></DeviceCard>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        color:pallete.font_color,
        fontWeight:'bold'
    },
    text:{
        fontSize:20,
        color:pallete.font_color,
    }
})

export default DevicesSection;