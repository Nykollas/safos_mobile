import React, { Component } from 'react';
import { View, Text, StyleSheet, TOu } from 'react-native';
import OpenCall from './OpenCall';
import HelpIllustration from '../assets/icons/illustrationHelp';
import pallete from '../assets/color/colors';
class HelpSection extends Component {
    render  = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Need help</Text>
                <OpenCall></OpenCall>
                <Text style={styles.text}>No open calls</Text>
                <HelpIllustration></HelpIllustration>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:24,
        color:pallete.font_color,
        marginBottom:24
    },
    text:{
        fontSize:18,
        color:pallete.font_color,
        marginBottom:24
    }
})

export default HelpSection;