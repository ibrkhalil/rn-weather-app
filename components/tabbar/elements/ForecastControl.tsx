import { StyleSheet, Text, View, TouchableOpacity, LayoutChangeEvent } from 'react-native'
import React, { useState } from 'react'
import { Canvas, Line, LinearGradient, vec } from '@shopify/react-native-skia'
import { ForecastType } from '../../../models/Weather'

interface ForecastControlProps {
    onPress: (forecastType: ForecastType) => void;
}

const ForecastControl = ({ onPress }: ForecastControlProps) => {
    const [textWidth, setTextWidth] = useState(0)
    const onTextLayout = (event: LayoutChangeEvent) => {
        setTextWidth(event.nativeEvent.layout.width)
    }
    const spacingX = 32;
    const strokeWidth = 3;
    return (
        <>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: spacingX
            }}>
                <TouchableOpacity onPress={() => onPress(ForecastType.Weekly)}>
                    <Text onLayout={onTextLayout} style={styles.forecastText}>Hourly Forecast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress(ForecastType.Hourly)}>
                    <Text style={styles.forecastText}>Hourly Forecast</Text>
                </TouchableOpacity>
            </View>

            <Canvas style={{ width: textWidth, height: strokeWidth, marginLeft: spacingX }}>
                <Line p1={vec(0, 0)} p2={vec(textWidth, 0)} strokeWidth={strokeWidth}>
                    <LinearGradient start={vec(0, 0)} end={vec(textWidth)} colors={['rgba(147, 112, 177, 0)', 'rgba(147, 112, 177, 1)', 'rgba(147, 112, 177, 0)']}></LinearGradient>
                </Line>
            </Canvas >
        </>
    )
}

export default ForecastControl

const styles = StyleSheet.create({
    forecastText: {
        fontFamily: 'SF-Semibold',
        fontSize: 15,
        lineHeight: 20,
        color: 'rgba(235, 235, 245, 0.6)'
    }
})
