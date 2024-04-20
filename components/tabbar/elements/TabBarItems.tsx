import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import ListIcon from '../icons/ListIcon'
import MapIcon from '../icons/MapIcon'
import TrapzoidBackground from './TrapzoidBackground'
import CircleButton from './CircleButton'

const TabBarItems = () => {
    const {width, height} = useWindowDimensions();
    const trapzoidWidth = width * 0.68;
    const trapzoidHeight = height  * 0.12;
    const circleRadius = (trapzoidHeight * 0.51) / 2;
    const buttonCenterX = width / 2 - circleRadius;

  return (
    <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 32, justifyContent: 'space-between'}}>
      <ListIcon />
      <TrapzoidBackground width={trapzoidWidth} height={trapzoidHeight} />
      <Pressable onPress={() => alert("Alohaaaa")} style={{...StyleSheet.absoluteFillObject, left: buttonCenterX, top: 12, width: 2 * circleRadius,
        height: 2 * circleRadius
      }}>
        {({pressed}) => (
            <CircleButton radius={circleRadius} pressed={pressed}/>
        )}
      </Pressable>
      <MapIcon />
    </View>
  )
}

export default TabBarItems

const styles = StyleSheet.create({})
