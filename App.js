import * as React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardsView}>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
        <TouchableOpacity style={styles.card}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  },
  cardsView:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
   width: 80,
   height: 120,
   backgroundColor: '#ededed',
   margin: 10,
   elevation: 4,
  },
});
