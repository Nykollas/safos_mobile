import React, { Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import pallete from '../assets/color/colors';
class Options extends Component {
    render  = () => {
        const { label } = this.props;
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>{label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        borderColor:pallete.border_color,
        borderWidth:1,
        padding:16,
        width:320,
        alignItems:'center',
        marginBottom:24,
        borderRadius:6
    },
    text:{
        fontSize:18
    }
})

export default Options;