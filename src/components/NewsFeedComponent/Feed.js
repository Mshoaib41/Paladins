import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../util/color';


const Feed = ({ item }) => {
    const [isLike, setIsLike] = useState(item.isLiked);
    return (
        <ImageBackground imageStyle={{ borderRadius: 7 }} source={{ uri: item.image }} resizeMode="cover" style={styles.feedImage} >{
            <TouchableOpacity activeOpacity={0.6} onPress={() => { setIsLike(!isLike) }} >{
                isLike==false
                ?<AntDesign name="hearto" style={[styles.feedIcons, { padding: 10 }]} />
                :<AntDesign name="heart" style={[styles.feedIcons, { padding: 10 , color:'#ff3152'}]} />
            }
                
            </TouchableOpacity>
        }

            <View style={styles.childView} >
                <AntDesign name="eyeo" style={styles.feedIcons} />
                <Text style={styles.feedViews}>{item.views}</Text>
            </View>

        </ImageBackground>
    )
}

export default Feed

const styles = StyleSheet.create({
    feedImage: {
        flexGrow: 1,
        margin: 5,
        height: 250,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
 
    feedIcons: {
        fontSize: 24,
        color: Colors.white,
    },
    feedViews: {
        color: Colors.white,
        paddingStart: 7
    },
    childView: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
        alignItems: 'center',
        padding: 5
    }
});
