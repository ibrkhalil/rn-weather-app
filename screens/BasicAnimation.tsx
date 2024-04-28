import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated'
import { center } from '@shopify/react-native-skia';

const BasicAnimation = () => {
    const SIZE = 200;
    const scale = useSharedValue(1);
    const borderRadius = useSharedValue(0);
    const squareCircleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })
    useEffect(() => {
        scale.value = withRepeat(withSpring(2), -1, true)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ width: SIZE, height: SIZE, backgroundColor: 'red' }, squareCircleStyle]}>


            </Animated.View>
        </View>
    )
}

export default BasicAnimation

const styles = StyleSheet.create({})
