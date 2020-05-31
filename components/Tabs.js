import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import pallete from '../assets/color/colors';

class  Tabs extends Component{
    render  = () => {
        return(
            <View style={styles.tabs_container}>
                <TouchableOpacity>
                    <View style={styles.tab_left}>
                    <Text style={styles.text}>Robot data</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab_middle}>
                    <Text style={styles.text}>Sattelite data</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab_right}>
                        <Text style={styles.text}>Suggestions</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs_container:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        marginVertical:20,
    },
    tab_left:{
        flex:1,
        borderColor:pallete.border_color,
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6,
        paddingHorizontal:12,
        alignItems:'center',
        justifyContent:'center'
    },
    tab_middle:{
        flex:1,
        borderColor:pallete.border_color,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        
        paddingHorizontal:12,
        alignItems:'center',
        justifyContent:'center'
    },
    tab_right:{
        flex:1,
        borderColor:pallete.border_color,
        borderWidth:1,
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
        paddingHorizontal:12,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:16,
        color:pallete.font_color
    }
})

export default Tabs;