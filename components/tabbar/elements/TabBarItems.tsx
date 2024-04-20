import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import ListIcon from '../icons/ListIcon'
import MapIcon from '../icons/MapIcon'
import TrapzoidBackground from './TrapzoidBackground'

const TabBarItems = () => {
    const {width, height} = useWindowDimensions();
    const trapzoidWidth = width * 0.68;
    const trapzoidHeight = height  * 0.12;
    
  return (
    <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 32, justifyContent: 'space-between'}}>
      <ListIcon />
      <TrapzoidBackground width={trapzoidWidth} height={trapzoidHeight} />
      <MapIcon />
    </View>
  )
}

export default TabBarItems

const styles = StyleSheet.create({})
