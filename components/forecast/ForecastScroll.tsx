import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Forecast } from '../../models/Weather'
import { ScrollView } from 'react-native-gesture-handler'
import ForecastCapsule from './ForecastCapsule'

interface ForecastScrollProps {
    forcasts: Forecast[],
    capsuleWidth: number,
    capsuleHeight: number,
    capsuleRadius: number
}

const ForecastScroll = ({ forcasts, capsuleWidth, capsuleHeight, capsuleRadius }: ForecastScrollProps) => {
    return (
        <ScrollView horizontal style={{
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom: 10,
            flexGrow: 0
        }}>
            <View style={{ flex: 1, flexDirection: 'row', gap: 12 }}>
                {forcasts.map((forcast, i) => (
                    <ForecastCapsule key={i} forecast={forcast} width={capsuleWidth} height={capsuleHeight} radius={capsuleRadius} />
                ))}
            </View>
        </ScrollView>
    )
}

export default ForecastScroll

const styles = StyleSheet.create({})
