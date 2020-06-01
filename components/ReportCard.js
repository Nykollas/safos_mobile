import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import pallete from '../assets/color/colors';
import Data from './Data';
class ReportCard extends Component {
    constructor(props){
        super(props);
    }
    render  = () => {
        
        return(
            
                <View style={styles.card}>
                    <Text style={styles.title}>Reports</Text>
                    <Text style={styles.text}>Culture Beans</Text>
                    <Data label={"PH"} value={"5.3 g/kg"} ok></Data>
                    <Data label={"MO"} value={"32 mg/dm3"} ok={false}></Data>
                    <Data label={"P"} value={"72.4 mmol/dm³"} ok attention></Data>
                    <Data label={"H+A1"} value={"47 mmol/dm³"} ok></Data>
                    <Data label={"K"} value={"3,4 mmol/dm³"} ok></Data>
                    <Data label={"Ca"} value={"40,0 mmol/dm³"} ok></Data>
                    <Data label={"Mg"} value={"18,0 mmol/dm³"} ok></Data>
                </View>
            
        )
    }
}

const styles  = StyleSheet.create({
    card:{
        flex:0,
        width:360,
        elevation:3,
        alignItems:'flex-start',
        justifyContent:'center',
        marginBottom:24,
        borderRadius:12,
        backgroundColor:'white',
        position:'absolute',
        right:18,
        top:-120,
        padding:18
    
    },
    title:{
        fontSize:24,
        color:pallete.font_color,
        marginBottom:24
    },
    text:{
        fontSize:18,
        color:pallete.font_color,
        marginBottom:20,
    }
})

export default ReportCard;