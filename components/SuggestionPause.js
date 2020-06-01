import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PauseIcon from '../assets/icons/pause'
import pallete from '../assets/color/colors';

class SuggestionPause extends Component {
    render  = () => {
        return(
            <View style={styles.container}>
                <PauseIcon height={18} width={18} fill={'#fff'}></PauseIcon>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:pallete.gradient_end,
        borderRadius:24,
        height:28,
        width:28,
        alignItems:'center',
        justifyContent:'center',
        
    }   
})

export default SuggestionPause;