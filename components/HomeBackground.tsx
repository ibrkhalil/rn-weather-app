import {
    ImageBackground,
    StyleSheet,
    useWindowDimensions,
    Image,
    ScaledSize,
    View,
} from 'react-native';
import React from 'react';
import {
    Canvas,
    Line,
    LinearGradient,
    Rect,
    vec,
} from '@shopify/react-native-skia';

const HomeBackground = () => {
    const dimensions = useWindowDimensions();
    const { width, height } = dimensions;
    const myStyles = styles(dimensions);
    const smokeHeight = height * 0.6;
    const smokeOffsetY = height * 0.4;
    return (
        <View style={{ ...StyleSheet.absoluteFillObject }}>
            <Canvas style={{ flex: 1 }}>
                <Rect x={0} y={0} height={height} width={width}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, height)}
                        colors={['#2E335A', '#1C1B33']}
                    />
                </Rect>
            </Canvas>

            <ImageBackground
                source={require('../assets/home/Background.png')}
                resizeMode="cover"
                style={{ height: '100%' }}
            >
                <Canvas
                    style={{
                        height: smokeHeight,
                        ...StyleSheet.absoluteFillObject,
                        top: smokeOffsetY,
                    }}
                >
                    <Rect x={0} y={0} width={width} height={smokeHeight}>
                        <LinearGradient
                            start={vec(width / 2, 0)}
                            end={vec(width / 2, smokeHeight)}
                            colors={[
                                'rgba(58, 63, 84, 0)',
                                'rgba(58, 63 ,84 , 1)',
                            ]}
                            positions={[-0.02, 0.54]}
                        />
                    </Rect>
                    {/* <Line p1={vec(width/2, 0)}
          p2={vec(width/2, smokeHeight)}
          strokeWidth={10}
          color={'red'} /> */}
                </Canvas>
                <Image
                    source={require('../assets/home/House.png')}
                    style={myStyles.houseImage}
                    resizeMode="cover"
                />
            </ImageBackground>
        </View>
    );
};

export default HomeBackground;

const styles = ({ width }: ScaledSize) =>
    StyleSheet.create({
        houseImage: {
            width: width,
            height: width,
            ...StyleSheet.absoluteFillObject,
            top: '36%',
        },
    });
