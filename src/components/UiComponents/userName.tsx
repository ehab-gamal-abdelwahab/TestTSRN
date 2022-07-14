import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';

type User={
    user_name: string
}
const UserName: React.FC<User> = ({user_name}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{user_name}</Text>
        </View>
    )
}

export default UserName;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 3
    },
    text:{
        color: colors.black,
        fontSize: 16,
        fontWeight: '700'
    }
});