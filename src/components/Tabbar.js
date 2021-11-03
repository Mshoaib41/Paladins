import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Tabdata } from '../util/data'
import Colors from '../util/color'

const Tabbar = () => {
    // const [active, setActive] = useState(false);
    const [active, setActive] = useState(1);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollviewTab} >
            {
                Tabdata.map((item, index) => {

                    return (
                        <TouchableOpacity  key={index} activeOpacity={0.6} onPress={() => { setActive(index) }}>
                            <Text style={[styles.text, active==index ? styles.active : styles.inactive]}>{item}</Text>
                        </TouchableOpacity>
                    )
                })
            }


        </ScrollView>
    );
}

export default Tabbar

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:10,
        overflow:'hidden',
        color:Colors.scrolText,
    },
    active: {
        backgroundColor: Colors.activeColor,
        color: Colors.textColor,
       
       
    },
    inactive: {
        backgroundColor: 'transparent',
        color: Colors.scrolText,
    },
    scrollviewTab:{
        paddingVertical:15,
        
    }
});
