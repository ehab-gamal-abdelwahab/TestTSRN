import React from 'react'
import { StyleSheet, FlatList,TouchableOpacity,Text } from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import colors from '../theme/colors';
import PostCardContent from './postCardContent';


const PostsList = () =>{
    const navigation = useNavigation();
    const {posts} = useSelector((state: any) => state.postsReducer );


    const navigatePostDetailsHandler = (item: any) => {
        debugger;
        navigation.navigate('Details' as never, item as never);
    }
    const renderPostItem = (item: any) => {
        return (
            <TouchableOpacity style={styles.postItemCard} activeOpacity={0.7} onPress={() => navigatePostDetailsHandler(item.item)}>
                <PostCardContent item={item.item}/>
            </TouchableOpacity>
        )
    }

    return <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginTop: 5}}
                data={posts} 
                renderItem={renderPostItem}
                keyExtractor={item => item.id}
            />
}

export default PostsList;

const styles = StyleSheet.create({
    postItemCard:{
        alignItems: 'flex-start',
        padding: 15,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: colors.white,
        elevation: 5,
        margin: 10,
    }
})