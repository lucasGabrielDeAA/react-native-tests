import React from 'react';

import { View, Text } from 'react-native';

// import styles from './styles';

const Post = ({ post }) => (
    <View>
        <Text>{post.tilte}</Text>
        <Text>{post.description}</Text>
    </View>
);

export default Post;
