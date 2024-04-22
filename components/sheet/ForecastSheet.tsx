import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import ForecastSheetBackground from './ForecastSheetBackground';
import UvIndexWidget from '../forecast/widgets/UvIndexWidget';
import ForecastControl from '../tabbar/elements/ForecastControl';
import AirQualityWidget from '../forecast/widgets/AirQualityWidget';
import Seperator from '../tabbar/elements/Seperator';
import ForecastCapsule from '../forecast/ForecastCapsule';
import { hourly, weekly } from '../../data/ForecastData';
import ForecastScroll from '../forecast/ForecastScroll';
import { ForecastType } from '../../models/Weather';
import WindWidget from '../forecast/widgets/WindWidget';
import SunriseWidget from '../forecast/widgets/SunriseWidget';
import RainFallWidget from '../forecast/widgets/RainFallWidget';
import FeelsLikeWidget from '../forecast/widgets/FeelsLikeWidget';
import HumidityWidget from '../forecast/widgets/HumidityWidget';
import VisibilityWidget from '../forecast/widgets/VisibilityWidget';
import { ScrollView } from 'react-native-gesture-handler';

const ForecastSheet = () => {
    const snapPoints = ['38.5%', '83%'];
    const { width, height } = useWindowDimensions();
    const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100)
    const cornerRadius = 44;
    const capsuleRadius = 30;
    const capsuleHeight = height * 0.17;
    const capsuleWidth = width * 0.15;
    const smallWidgetSize = width / 2 - 20;
    const [forecastType, setForecastType] = useState<ForecastType>(ForecastType.Hourly)
    return (
        <BottomSheet
            snapPoints={snapPoints}
            handleIndicatorStyle={{
                width: 48,
                height: 5,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
            backgroundComponent={() => (
                <ForecastSheetBackground width={width} height={firstSnapPoint} cornerRadius={cornerRadius} />
            )}>
            <ForecastControl onPress={(forecastType: ForecastType) => setForecastType(forecastType)} />
            <Seperator width={width} height={3} />
            <ScrollView style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 10 }}>
                <ForecastScroll capsuleWidth={capsuleWidth} capsuleHeight={capsuleHeight} capsuleRadius={capsuleRadius}
                    forcasts={forecastType === ForecastType.Hourly ? hourly : weekly} />
                <View style={{ flex: 1, paddingTop: 30, paddingBottom: 50 }}>
                    <AirQualityWidget width={width - 30} height={150} />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 15, gap: 10 }}>
                        <UvIndexWidget width={smallWidgetSize} height={smallWidgetSize} />
                        <WindWidget width={smallWidgetSize} height={smallWidgetSize} />
                        <SunriseWidget width={smallWidgetSize} height={smallWidgetSize} />
                        <RainFallWidget width={smallWidgetSize} height={smallWidgetSize} />
                        <FeelsLikeWidget width={smallWidgetSize} height={smallWidgetSize} />
                        <HumidityWidget width={smallWidgetSize} height={smallWidgetSize} />
                        <VisibilityWidget width={smallWidgetSize} height={smallWidgetSize} />
                    </View>
                </View>
            </ScrollView>
        </BottomSheet>
    );
};

export default ForecastSheet;

const styles = StyleSheet.create({});
