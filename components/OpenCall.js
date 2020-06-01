import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import pallete from '../assets/color/colors';
import PlusIcon from '../assets/icons/plus';

class OpenCall extends Component {
    render  = () => {
        return(
            <TouchableOpacity style={styles.open_call}>
                <Text style={styles.text}>Open call ...</Text>
                <PlusIcon height={20} width={20} fill={pallete.font_color}></PlusIcon>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    open_call:{
        flexDirection:'row',
        height:56,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:pallete.border_color,
        padding:16,
        borderRadius:12,
        marginBottom:40

    },
    text:{
        fontSize:20,
        color:pallete.font_color,
        marginRight:12
    }
})

export default OpenCall;
