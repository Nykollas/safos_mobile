import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import pallete from '../assets/color/colors';
import SuggestionPause from './SuggestionPause';
import SuggestionSwitch from './SuggestionSwitcher';

class SuggestionCard extends Component {
    render = () => {
        const { culture } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row }>
                    <Text style={styles.text}>Culture: {culture}</Text>
                    <View style={{ flexDirection:'row', justifyContent:'flex-end'}}>
                        <SuggestionSwitch></SuggestionSwitch>
                    </View>
                </View>
                <View style={styles.row }>
                    <Text style={styles.text}> Status: Irrigating</Text>
                </View>
                <View style={styles.row }>
                    <Text style={styles.text}>{"00:38:00 remaining"}</Text>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                        <SuggestionPause height={36} width={36} fill={pallete.gradient_end}></SuggestionPause>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        elevation: 3,
        width: 320,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        borderRadius: 6,
        paddingLeft: 18,
        paddingRight:18,
        paddingTop:12,
        paddingBottom:12,
        marginBottom: 24,

    },
    text: {
        fontSize: 18,
        color: pallete.font_color
    },
    row:{
        flexDirection:'row',
        alignItems:'flex-start',
    }
});

export default SuggestionCard;

