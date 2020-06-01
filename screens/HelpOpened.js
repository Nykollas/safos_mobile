import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import UpIllustration from '../assets/icons/UpIllustration';
import HelpOpenedSection from '../components/HelpOpenedSection';;

class HelpScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <HelpOpenedSection></HelpOpenedSection>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default HelpScreen;
