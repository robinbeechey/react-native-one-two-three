import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Ranks from './Ranks';
import Settings from './Settings';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('Home', () => Home, store, Provider);
	Navigation.registerComponent('Ranks', () => Ranks, store, Provider);
	Navigation.registerComponent('Settings', () => Settings, store, Provider);
}

