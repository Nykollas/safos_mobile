import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OpenCall from './OpenCall';
import ProtocolHelp from './ProtocolHelp';
import pallete from '../assets/color/colors';
class HelpSection extends Component {
    render = () => {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Need help</Text>
                    <OpenCall></OpenCall>
                    <ProtocolHelp></ProtocolHelp>
                    <ProtocolHelp></ProtocolHelp>
                    <ProtocolHelp></ProtocolHelp>
                    <ProtocolHelp></ProtocolHelp>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height:'100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: pallete.font_color,
        marginBottom: 24
    },
    text: {
        fontSize: 18,
        color: pallete.font_color,
        marginBottom: 24
    }
})

export default HelpSection;