import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SuggestionCard from './SuggestionCard';
import pallete from '../assets/color/colors';


class SuggestionSection extends Component {
    render = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Suggestions</Text>
                <SuggestionCard 
                    idCulture={"id"}
                    culture={"Beans"}
                    status={"Irrigating"}/>
                <SuggestionCard 
                    idCulture={"id"}
                    culture={"Beans"}
                    status={"Irrigating"}/>
            </View>

        )
    }
}

const styles  = StyleSheet.create({
    container:{
        height:360,
        padding:24,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        color:pallete.font_color,
        marginBottom:24
    }
});

export default SuggestionSection;