import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/userAvatar.png')}/>
         </View>   
    )
}

export default Avatar;

const styles = StyleSheet.create({
    image:{
        width: 40,
        height: 40,
        borderWidth:1,
        borderRadius: 40/2
    },
    container:{
        marginHorizontal: 3
    },
});