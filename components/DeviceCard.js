import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class DeviceCard extends Component {
    render  = () => {
        return(
            <TouchableOpacity>
                <View style={styles.card}>
                    <Text></Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles  = StyleSheet.create({
    card:{
        height:72,
        width:'75%',
        elevation:3,
    }
})

export default DeviceCard;