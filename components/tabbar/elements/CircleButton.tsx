 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { Canvas, Circle, Line, LinearGradient, Shadow, vec } from '@shopify/react-native-skia';

 interface CircleButtonProps {
    radius: number;
    pressed?: boolean;
 }
 
 const CircleButton = ({radius, pressed}:CircleButtonProps) => {
   const diameter = 2 * radius;
    return (
     <Canvas style={{width: diameter, height: diameter}}>
        <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
        start={vec(0,0)}
        end={vec(diameter, diameter)}
        colors={pressed ? ["#bbbfc7", "#f5f5f9"] : ["#f5f5f9", "#dadfe7"]} />
        <Shadow dx={1} dy={1} blur={0.5} color={'white'} inner></Shadow>
        </Circle>
        <Line p1={vec(radius-radius/3, radius)}
        p2={vec(radius+radius/3, radius)}
        strokeCap={'round'}
        strokeWidth={4}
        color={'#48319d'}/>
        <Line p1={vec(radius, radius-radius/3)}
        p2={vec(radius, radius+radius/3)}
        strokeCap={'round'}
        strokeWidth={4}
        color={'#48319d'} />
     </Canvas>
   )
 }
 
 export default CircleButton
 
 const styles = StyleSheet.create({})
