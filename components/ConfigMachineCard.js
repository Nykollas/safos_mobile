
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import Option from './Options';
import Status from './Status';
import BrainIcon from '../assets/icons/brain';

import pallete from '../assets/color/colors';

class ConfigMachineCard extends Component {
    render  = () => {
        return(
            <View style={styles.card_container}>
                <Text style={styles.text}>The Potato Machine</Text>

                <View style={styles.status_container}>
                    <Status value={"100%"}></Status>
                </View>
                <Text style={styles.text}>ID: 1337AI</Text>
                <Text style={styles.text}>SO: Saf-OS 0.01</Text>
                <Text style={styles.text}>Config: Potato</Text>
                <View style={styles.icon_container}>
                    <BrainIcon height={100} width={100} fill={"#000"}></BrainIcon>
                </View>
                <Option label={"Load Config"}></Option>
                <Option label={"Disconnect"}></Option>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    card_container:{
        height:500, 
        width:360, 
        marginTop:142,   
        position:'absolute',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        elevation:3,
        backgroundColor:'white',
        marginHorizontal:24,
        borderRadius:6,
        paddingTop:24,
        paddingHorizontal:24
    },
    text:{
        color:pallete.font_color,
        fontSize:20,
        
    },
    status_container:{
        height:56,

    },
    icon_container:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical:16      
    }

})


export default ConfigMachineCard;