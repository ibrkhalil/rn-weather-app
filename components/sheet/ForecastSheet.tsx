import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const ForecastSheet = () => {
    const snapPoints = ['38.5%', '83%'];
    return (
        <BottomSheet
            snapPoints={snapPoints}
            handleIndicatorStyle={{
                width: 48,
                height: 5,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
        ></BottomSheet>
    );
};

export default ForecastSheet;

const styles = StyleSheet.create({});
