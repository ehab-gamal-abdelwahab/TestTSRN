import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnyIfEmpty } from 'react-redux';
import Comment from './UiComponents/comment';
import UserName from './UiComponents/userName';

type Props={
    comments: any
}

const CommentsList: React.FC<Props> = ({comments}) =>{

    debugger;
    const commentsJSX = comments && comments.length > 0 ?
        comments.map((comment: any) => <Comment comment={comment}/>)
        : null
    return(
        <View style={styles.container}>
            <ScrollView>
                {commentsJSX}
            </ScrollView>
        </View>
    )
}

export default CommentsList;

const styles = StyleSheet.create({
    container:{
        margin: 20,
    }
})