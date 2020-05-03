import * as React from 'react';
import {useState, useEffect} from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {

  const [update] = useState(0)
  const cards = [{},{},{},{}, {},{},{},{}, {},]
  const [symbol, setSymbol] = useState(["a", "b", "c", "d", "e"])
  function RandomNumber(){
    var number = Number.parseInt(Math.random() * (5))
    return number
}

  return (
    <View style={styles.container}>
      <View style={styles.cardsView}>
        {cards.map((card, i) =>{
          return(
            <TouchableOpacity key={i} style={styles.card}><Text>{symbol[RandomNumber()]}</Text></TouchableOpacity>
          )
        })}
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
  justifyContent: 'center',
  alignItems: 'center',
   position: 'relative',
   width: 80,
   height: 120,
   backgroundColor: '#ededed',
   margin: 10,

  },
});
