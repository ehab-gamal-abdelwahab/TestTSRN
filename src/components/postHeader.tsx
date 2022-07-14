import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';
import Avatar from './UiComponents/avatar';
import UserName from './UiComponents/userName';

type User={
    user_name: string
}
const PostHeader: React.FC<User> = ({user_name}) => {
    return(
        <View style={styles.container}>
            <Avatar />
            <UserName user_name={user_name}/>
        </View>
    )

}

export default PostHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'center'
    },
});