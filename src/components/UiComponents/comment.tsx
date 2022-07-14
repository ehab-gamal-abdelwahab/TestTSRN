import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import PostHeader from '../postHeader';
import Body from './body';

type Props = {
    comment: any
}

const Comment: React.FC<Props> = ({comment}) => {
    return(
        <View style={styles.container}>
            <PostHeader user_name={comment.name}/>
            <Body body={comment.body}/>
        </View>
    )
}

export default Comment;

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        borderBottomColor: colors.gray2,
        marginVertical: 5

    }
})