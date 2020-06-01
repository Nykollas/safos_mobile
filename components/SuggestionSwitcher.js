import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import pallete from '../assets/color/colors';

class SuggestionSwitcher extends Component {

    state={
        switch:false
    }

    switcherHandler = () => {
        this.setState( previousState => {
            return {switch: !previousState.switch}
        })
    }
    render = () => {
        return(
            <View style={{ flexDirection:'row', flex:1 }}>
                <Text style={styles.label}>
                    Automatic
                </Text>
                <Switch onChange={this.switcherHandler} value={ this.state.switch }></Switch>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label:{
        fontSize:18,
        color:pallete.font_color,
        paddingLeft:36,
        marginRight:18,
    }
})

export default SuggestionSwitcher;