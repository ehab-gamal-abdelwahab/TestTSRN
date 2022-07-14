import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';

type Props={
    title: string
}
const PostTitle: React.FC<Props> = ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default PostTitle;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 1,
        marginVertical: 2
    },
    text:{
        color: colors.black,
        fontSize: 14,
        fontWeight: '500'
    }
});