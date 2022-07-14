import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';

type Props={
    body: string
}
const Body: React.FC<Props> = ({body}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{body}</Text>
        </View>
    )
}

export default Body;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 1,
        marginVertical: 2
    },
    text:{
        color: colors.gray5,
        fontSize: 14,
        fontWeight: '300'
    }
});