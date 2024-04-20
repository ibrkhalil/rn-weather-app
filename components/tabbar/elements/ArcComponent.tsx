import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia';

interface ArcComponentProps {
    width: number;
    height: number;
}

const ArcComponent = ({width, height}:ArcComponentProps) => {
    const arcPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0
    L ${width} ${height} L 0 ${height} Z`;
  return (
    <Canvas style={{height}}>
        <Path path={arcPath}/>
        <LinearGradient
        start={vec(width / 2, 0)}
        end={vec(width / 2, height)}
        colors={['rgba(58,58, 106, 0.26)', 'rgba(37,36, 76, 0.26)']}
        />
    </Canvas>
  )
}

export default ArcComponent

const styles = StyleSheet.create({})
