import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import pallete from '../assets/color/colors';
class Button extends Component {
    render = () => {
        console.log(pallete);
        const { label, height, width } = this.props;

        return (
            <TouchableOpacity>
                <LinearGradient style={[{height:height, width:width}, styles.button]} 
                                start={{x: 0, y: 1}}
                                end={{x: 0, y: 0}}
                                colors={[pallete.gradient_start, pallete.gradient_end]}>
                    <View style={[styles.button, { height:height, width:width}]}>
                        <Text style={styles.text}>{label}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:16,
        
    },
    text: {
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
})

export default Button;