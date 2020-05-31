import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class DeviceCard extends Component {

    constructor(props){
        super(props);
    }

    render  = () => {
        const {  title, location, date } = this.props;
        return(
            <TouchableOpacity>
                <View style={styles.card}>
                    <Text>{title}</Text>
                    <Text>{location}</Text>
                    <Text>{date}</Text>
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