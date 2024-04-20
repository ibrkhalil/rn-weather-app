import HomeBackground from './components/HomeBackground';
import { StatusBar } from 'expo-status-bar'
import WeatherTabBar from './components/tabbar/WeatherTabBar';
export default function App() {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar style='light' />
    </>
  );
}
