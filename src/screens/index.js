import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import Feed from '../components/NewsFeedComponent/Feed'
import { ImageData } from '../util/data'

const NewsFeed = () => {
    return (
        <FlatList
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={ImageData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Feed item={item} />}
        />

    );
}

export default NewsFeed

const styles = StyleSheet.create({})
