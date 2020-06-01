
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OkIcon from '../assets/icons/ok';
import CloseIcon from '../assets/icons/close';
import AttentionIcon from '../assets/icons/attention';
import pallete from '../assets/color/colors';

class Data extends Component {

    constructor(props){
        super(props);
    }

    render = () => {
        const { label, value, ok, attention} = this.props;
        return(
            <View style={styles.data}>
                <Text style={styles.text}>{label}:{value}</Text>
                {ok && attention ?
                    <AttentionIcon height={32} width={32}></AttentionIcon>
                    :( ok ?
                        <OkIcon  height={32} width={32}></OkIcon>
                        :
                        <CloseIcon  height={32} width={32}></CloseIcon>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    data:{
        height:72,
        borderColor:'#AAAAAA',
        borderWidth:1,
        borderRadius:8,
        padding:12,
        justifyContent:'space-between',
        width:'100%',
        flexDirection:'row',
        marginBottom:12
    },
    text:{
        fontSize:22,
        color:pallete.font_color
    }
})

export default Data;