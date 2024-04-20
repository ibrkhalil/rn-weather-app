import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListIcon from '../icons/ListIcon'
import MapIcon from '../icons/MapIcon'

const TabBarItems = () => {
  return (
    <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 32, justifyContent: 'space-between'}}>
      <ListIcon />
      <MapIcon />
    </View>
  )
}

export default TabBarItems

const styles = StyleSheet.create({})
