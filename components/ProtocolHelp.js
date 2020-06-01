import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import pallete from '../assets/color/colors';


import Notification from './Notification';



class ProtocolHelp extends Component {
    render  = () => {
        return(
            
                <TouchableOpacity style={styles.container}>
                    <Text style={styles.title}>Protocol:XPTO1337</Text>
                    <View style={{flexDirection:'row', width:'100%',alignItems:'flex-end', justifyContent:"space-between"}}>
                        <Text style={styles.text}>Status:Open</Text>
                        <Notification></Notification>
                    </View>
                
            </TouchableOpacity>)
    }
}


const styles = StyleSheet.create({
    container:{
        elevation:3,
        height:96,
        width:320,
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:6,
        marginBottom:24,
    },
    text:{
        fontSize:20,
        color:pallete.font_color,
    },
    title:{
        fontSize:24,
        color:pallete.font_color
    }
})




export default ProtocolHelp;


