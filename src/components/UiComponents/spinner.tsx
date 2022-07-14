import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';


const Spinner: React.FC = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    )
}

export default Spinner;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
});