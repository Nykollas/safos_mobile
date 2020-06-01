import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import pallete from '../assets/color/colors';

class DeviceCard extends Component {

    constructor(props){
        super(props);
    }

    render  = () => {
        const {  title, location, date } = this.props;
        return(
            <TouchableOpacity>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{location}</Text>
                    <Text style={styles.text}>{date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles  = StyleSheet.create({
    card:{
        height:160,
        width:300,
        elevation:3,
        alignItems:'flex-start',
        paddingLeft:24,
        justifyContent:'center',
        marginBottom:24,
        borderRadius:12
        
    },
    title:{
        fontSize:24,
        color:pallete.font_color,
        marginBottom:24
    },
    text:{
        fontSize:18,
        color:pallete.font_color
    }
})

export default DeviceCard;