import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import Input from './Input';
import Button from './Button';

class LoginCard extends Component {
    render  = () => {
        return(
            <View style={styles.card_container}>
                <Text style={styles.title}>Welcome</Text>
                <Input placeholder={"Email"}/>
                <Input placeholder={"Senha"}/>
                <Text style={styles.label}> Recover my password</Text>
                <Button label={'Login'} height={60} width={280}></Button>
                <Button label={'Register'} height={56} width={160} ></Button>
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
        
        color:'#BBBBBB',
        fontSize:30,
        marginBottom:24
    },
    label:{
        color:'#BBBBBB',
        fontSize:18,
        width:'100%',
        marginBottom:24,
        paddingLeft:16
    }
})




export default LoginCard;
