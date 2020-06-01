import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import UpIllustration from '../assets/icons/UpIllustration';
import HelpSection from '../components/HelpSection';;

class HelpScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>

                <HelpSection></HelpSection>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default HelpScreen;