import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import PersonIcon from '../assets/icons/person';
import Option from './Options';

import pallete from '../assets/color/colors';

class LoginCard extends Component {
    render  = () => {
        return(
            <View style={styles.card_container}>
                <PersonIcon height={56} width={56} fill={pallete.font_color}></PersonIcon>
                <Text style={styles.title}>Hello, José</Text>
                <Option label={'Account Settings'}></Option>
                <Option label={"Connected Devices"}></Option>
                <Option label={"Support"}></Option>
                <Option label={"Log out"}></Option>
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
        alignItems:'center',
        justifyContent:'flex-start',
        elevation:3,
        backgroundColor:'white',
        marginHorizontal:24,
        borderRadius:6,
        paddingTop:24
        
    },
    title:{
        color:pallete.font_color,
        fontSize:24,
        marginBottom:24
    },
    label:{
        color:pallete.font_color,
        fontSize:18,
        width:'100%',
        marginBottom:24,
        paddingLeft:16
    }
})




export default LoginCard;
