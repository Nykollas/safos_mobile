import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import pallete from '../assets/color/colors';
import PersonIcon from '../assets/icons/person';


class SettingsOptions extends Component {
    render  = () => {
     return(
         <TouchableOpacity>
            <View style={styles.container}>
                <PersonIcon></PersonIcon>
            </View>
         </TouchableOpacity>
     )
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor:pallete.border_color,
        borderWidth:1,
        borderRadius:6,
        padding:8,
        width:320,
        marginTop:12,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default SettingsOptions;