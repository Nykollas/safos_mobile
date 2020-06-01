import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SuggestionSection from '../components/SuggestionSection';
import UpIllustration from '../assets/icons/UpIllustration';
class SuggestionScreen extends Component {
    render = () => {
        return(
            <View style={styles.style}>
                <UpIllustration></UpIllustration>
                <SuggestionSection></SuggestionSection>
            </View>
        )
    }
}
const styles =  StyleSheet.create({
    screen_container:{

    }
});

export default SuggestionScreen;