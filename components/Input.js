import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {
    render = () => {
        const { placeholder } = this.props;
        return(
            <TextInput style={styles.input} placeholder={placeholder}></TextInput>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height:56,
        width:'90%',
        fontSize:20,
        borderColor:'#0006',
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:14,
        marginBottom:24,
    }
})


export default Input;