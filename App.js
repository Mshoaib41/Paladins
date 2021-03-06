import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,View } from 'react-native';
import Header from './src/components/Header';
import Tabbar from './src/components/Tabbar';
import NewsFeed from './src/screens';
export default function App() {
  return (
    <View style={styles.container} >
    <Header/>
    <View>
    <Tabbar/>
    </View>
   
    <NewsFeed/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40
  },
});
