import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import BattteryIcon from '../assets/icons/battery';
import pallete from '../assets/color/colors';

class Status extends Component {
    render = () => {
        const { value } = this.props;
        return(
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <BattteryIcon height={36} width={36} fill={'#00E676'}></BattteryIcon>
                <Text style={styles.text}>{value}</Text>
            </View>
        )
    }
}   

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:pallete.font_color,
        margin:0,

    }
})

export default Status;