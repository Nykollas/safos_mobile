import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BellIcon from '../assets/icons/bell';
import pallete from '../assets/color/colors'
class Notification extends Component {
    render  = () => {
        return(
            <View style={styles.container}>
                <BellIcon height={20} width={20} fill={'#FFF'}></BellIcon>
                <Text style={styles.text}>1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:64,
        borderRadius:12,    
        marginTop:18,
        height:24,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:pallete.gradient_end 
    },
    text:{
        fontSize:20,
        color:'white',

    }
})

export default Notification;