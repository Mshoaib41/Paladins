import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Icon from '../../assets/icons'


const Header = () => {
    return (
        <View style={styles.parentrow}>
            <View style={styles.childrow}>
                <TouchableOpacity activeOpacity={0.6}>
                <Entypo name="menu" size={24} color="black" />
                </TouchableOpacity>
           <Text style={styles.title}>Paladins</Text>
            </View>
          <View style={styles.childrow}>
              <TouchableOpacity activeOpacity={0.6}>
              <Image source={Icon.handshake} style={styles.handImage} />
              </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6}>
                <Feather name="search" size={24} color="black" style={styles.search} />
                </TouchableOpacity>
 
          </View>
           
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    parentrow:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
    },
    childrow:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'700',
        paddingHorizontal:20,
    },
    handImage:{
    
    },
    search:{
      paddingStart:20  
    }

});
