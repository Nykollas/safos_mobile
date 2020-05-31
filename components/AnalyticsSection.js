import React, { Component } from 'react';
import  { View, Text, StyleSheet} from 'react-native';

import Tabs from './Tabs';
import pallete from '../assets/color/colors';
import IllustrationAnalytics from '../assets/icons/illustrationAnalytics';

class AnalyticsSection extends Component {
    render  = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.title}> Your Analytics</Text>
                <Tabs></Tabs>
                <Text style={styles.text}> You still  don'thave any analisys ready ...</Text>
                <IllustrationAnalytics></IllustrationAnalytics>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        color:pallete.font_color,
        fontWeight:'bold'
    },
    text:{
        fontSize:20,
        color:pallete.font_color,
    }
})


export default AnalyticsSection;