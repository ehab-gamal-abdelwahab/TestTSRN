import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import postsActions from '../store/actions/postsActions';
import uiActions from '../store/actions/uiActions';
import postsAPI from '../Network/posts';
import PostCardContent from '../components/postCardContent';
import colors from '../theme/colors';
import CommentsList from '../components/commentsList';
import Spinner from '../components/UiComponents/spinner';

type Props={
    route: any
}

const DetailsScreen = ({route}: Props) => {
    const dispatch = useDispatch();
    const {postDetails} = useSelector((state: any) => state.postsReducer);
    const {loading} = useSelector((state: any) => state.uiReducer);

    useEffect(()=>{
        async function getPostComments() {
            dispatch(uiActions.loadStart());
            const postComments = await postsAPI.getPostComments(route.params.id);
            const postItem = {...route.params};
            postItem['comments'] = postComments.data;
            dispatch(postsActions.postDetails(postItem));
            dispatch(uiActions.loadStop());
        }
        getPostComments();
    },[])
    return(
        <View style={styles.container}>
            {loading ? <Spinner /> : <>
                <PostCardContent item={postDetails}/>
                <CommentsList comments={postDetails.comments}/>
            </>}
        </View>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15,
        backgroundColor: colors.white
    }
})