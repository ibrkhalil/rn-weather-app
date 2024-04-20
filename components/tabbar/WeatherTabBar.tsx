import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import ArcComponent from './elements/ArcComponent';
import TabBarItems from './elements/TabBarItems';

const WeatherTabBar = () => {
    const tabBarHeight = 88;
    const { width, height } = useWindowDimensions();
    return (
        <View
            style={{
                height: tabBarHeight,
                ...StyleSheet.absoluteFillObject,
                top: height - tabBarHeight,
                flex: 1,
            }}
        >
            <ArcComponent height={tabBarHeight} width={width} />
            <TabBarItems />
        </View>
    );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
