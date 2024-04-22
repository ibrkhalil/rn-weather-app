import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Forecast, ForecastType } from '../../models/Weather';
import { Canvas, RoundedRect, Shadow, center } from '@shopify/react-native-skia';
import { DEGREE_SYMBOL } from '../../utils/constants';
import { convertDateTo12HrFormat, getDayOfWeek } from '../../utils/DateHelper';

interface ForecastCapsuleProps {
    forecast: Forecast;
    width: number,
    height: number,
    radius: number
}

const ForecastCapsule = ({ forecast, width, height, radius }: ForecastCapsuleProps) => {
    const { date, icon, probability, temperature, type } = forecast;

    const timeDateOpacityDisplay = (): [string, number] => {
        let opacity = 0;
        let timeOrDay = "";
        if (type === ForecastType.Hourly) {
            timeOrDay = convertDateTo12HrFormat(date);
            opacity = timeOrDay.toLowerCase() === 'now' ? 1 : 0.2;
        }
        else {
            const [dayOfTheWeek, isToday] = getDayOfWeek(date);
            timeOrDay = dayOfTheWeek;
            opacity = isToday ? 1 : 0.2
        }
        return [timeOrDay, opacity]
    }
    const [timeToDisplay, capsuleOpacity] = timeDateOpacityDisplay();
    const probabilityOpacity = probability == 0 ? 0 : 1;
    return (
        <View style={{ width: width, height: height }}>
            <Canvas style={StyleSheet.absoluteFillObject}>
                <RoundedRect x={0} y={0} width={width} height={height} r={radius} color={`rgba(72, 49, 157, ${capsuleOpacity})`}>
                    <Shadow dx={1} dy={1} blur={0} color={'rgba(255, 255, 255, 0.25)'} inner>

                    </Shadow>
                </RoundedRect>
            </Canvas>
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 19 }}>
                <Text style={styles.time}>{timeToDisplay}</Text>
                <View>
                    <Image source={icon} width={width} height={width / 2}></Image>
                    <Text style={{ ...styles.probability, opacity: probabilityOpacity }}>{probability + '%'}</Text>
                </View>
                <Text style={styles.temperature}>{temperature}{DEGREE_SYMBOL}</Text>
            </View>
        </View>
    )
}

export default ForecastCapsule

const styles = StyleSheet.create({
    time: {
        fontFamily: 'SF-Semibold',
        fontSize: 15,
        lineHeight: 20,
        color: 'white',
        letterSpacing: 0.5
    },
    probability: {
        fontFamily: 'SF-Semibold',
        fontSize: 13,
        lineHeight: 18,
        color: '#40cbd8',
        textAlign: 'center',
    },
    temperature: {
        fontFamily: 'SF-Regular',
        fontSize: 20,
        lineHeight: 24,
        color: 'white',
        letterSpacing: 0.38
    }
})
