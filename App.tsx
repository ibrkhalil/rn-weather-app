import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './screens/Home';
import BasicAnimation from './screens/BasicAnimation';

SplashScreen.preventAutoHideAsync(); // Keep splash screen on while fonts are loading.

export default function App() {
    const [fontsLoaded] = useFonts({
        'SF-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
        'SF-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
        'SF-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider onLayout={onLayoutRootView}>
                <BasicAnimation />
                <StatusBar style="light" />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
